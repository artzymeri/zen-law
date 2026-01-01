'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function SilkWave({ 
  yOffset, 
  zOffset, 
  speed, 
  amplitude,
  phase,
  scale,
  irregularity
}: { 
  yOffset: number;
  zOffset: number;
  speed: number;
  amplitude: number;
  phase: number;
  scale: number;
  irregularity: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(50, 12, 200, 40);
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uAmplitude: { value: amplitude },
        uPhase: { value: phase },
        uSpeed: { value: speed },
        uIrregularity: { value: irregularity },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uAmplitude;
        uniform float uPhase;
        uniform float uSpeed;
        uniform float uIrregularity;
        
        varying vec2 vUv;
        varying float vElevation;
        varying vec3 vWorldNormal;
        varying float vEdgeFactor;
        
        // Noise function for irregularity
        float hash(float n) { return fract(sin(n) * 43758.5453123); }
        float noise(float x) {
          float i = floor(x);
          float f = fract(x);
          float u = f * f * (3.0 - 2.0 * f);
          return mix(hash(i), hash(i + 1.0), u);
        }
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          float xNorm = (pos.x + 25.0) / 50.0;
          
          // Add irregular noise-based movement
          float noiseVal = noise(xNorm * 5.0 + uTime * uSpeed * 2.0) * uIrregularity;
          float noiseVal2 = noise(xNorm * 8.0 - uTime * uSpeed * 1.5 + uPhase) * uIrregularity * 0.5;
          
          // Main flowing S-curve with faster, more varied motion
          float mainWave = sin(xNorm * 3.14159 * 2.0 + uTime * uSpeed * 1.8 + uPhase) * uAmplitude;
          
          // Secondary wave with different frequency for complexity
          float secondWave = sin(xNorm * 3.14159 * 3.5 + uTime * uSpeed * 1.3 + uPhase * 1.7) * uAmplitude * 0.4;
          
          // Third wave layer for more organic movement
          float thirdWave = cos(xNorm * 3.14159 * 1.5 + uTime * uSpeed * 2.2 + uPhase * 0.5) * uAmplitude * 0.25;
          
          // Combine all waves with noise
          pos.y += mainWave + secondWave + thirdWave + noiseVal + noiseVal2;
          
          // Z depth with irregular motion
          pos.z = cos(xNorm * 3.14159 * 2.0 + uTime * uSpeed * 1.2 + uPhase) * 4.0;
          pos.z += sin(xNorm * 3.14159 * 1.3 + uTime * uSpeed * 0.9) * 2.0;
          pos.z += noise(xNorm * 3.0 + uTime * uSpeed) * uIrregularity * 2.0;
          
          // Subtle mouse interaction
          pos.y += uMouse.y * 0.5;
          
          vElevation = pos.z;
          
          // Calculate normal for sharp lighting
          float delta = 0.005;
          float yPrev = sin((xNorm - delta) * 3.14159 * 2.0 + uTime * uSpeed * 1.8 + uPhase) * uAmplitude;
          float yNext = sin((xNorm + delta) * 3.14159 * 2.0 + uTime * uSpeed * 1.8 + uPhase) * uAmplitude;
          float zPrev = cos((xNorm - delta) * 3.14159 * 2.0 + uTime * uSpeed * 1.2 + uPhase) * 4.0;
          float zNext = cos((xNorm + delta) * 3.14159 * 2.0 + uTime * uSpeed * 1.2 + uPhase) * 4.0;
          
          vec3 tangent = normalize(vec3(delta * 50.0, yNext - yPrev, zNext - zPrev));
          vec3 bitangent = vec3(0.0, 1.0, 0.0);
          vWorldNormal = normalize(cross(bitangent, tangent));
          
          // Edge factor for sharper highlights
          vEdgeFactor = abs(pos.y - position.y) / uAmplitude;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vElevation;
        varying vec3 vWorldNormal;
        varying float vEdgeFactor;
        
        void main() {
          // Deep black base
          vec3 baseColor = vec3(0.0, 0.0, 0.0);
          
          // Darker mid-tone for better contrast
          vec3 midColor = vec3(0.08, 0.08, 0.09);
          
          // Brighter highlight for more apparent edges
          vec3 highlightColor = vec3(0.28, 0.28, 0.32);
          
          // Sharp lighting calculation
          vec3 lightDir = normalize(vec3(0.3, 1.0, 0.6));
          float diffuse = max(dot(vWorldNormal, lightDir), 0.0);
          
          // Sharper rim lighting - increased power for crisper edges
          float rim = pow(1.0 - abs(vWorldNormal.z), 4.0) * 0.9;
          
          // Crisp depth-based shading
          float depthFactor = smoothstep(-4.0, 4.0, vElevation);
          
          // Sharp top edge highlight
          float topEdge = pow(smoothstep(0.75, 0.98, vUv.y), 2.0) * 0.5;
          float bottomEdge = pow(smoothstep(0.25, 0.02, vUv.y), 2.0) * 0.3;
          
          // Combine lighting with more contrast
          float light = diffuse * 0.4 + rim + depthFactor * 0.2 + topEdge + bottomEdge;
          
          // Sharper color mixing
          vec3 finalColor = mix(baseColor, midColor, smoothstep(0.1, 0.5, vUv.y) * 0.4);
          finalColor = mix(finalColor, highlightColor, pow(light, 1.2));
          
          // Less fade for more definition
          float fadeX = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
          float fadeY = smoothstep(0.0, 0.05, vUv.y) * smoothstep(1.0, 0.95, vUv.y);
          
          float alpha = fadeX * fadeY * 0.95;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }, [amplitude, phase, speed, irregularity]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
    shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    shaderMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry} 
      material={material}
      position={[0, yOffset, zOffset]}
      scale={[scale, scale, scale]}
    />
  );
}

function AmbientGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <planeGeometry args={[60, 60]} />
      <shaderMaterial
        transparent
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec2 center = vUv - 0.5;
            float dist = length(center);
            
            // Subtle radial gradient
            float glow = smoothstep(0.5, 0.0, dist) * 0.08;
            
            vec3 color = vec3(0.05, 0.05, 0.06);
            
            gl_FragColor = vec4(color, glow);
          }
        `}
      />
    </mesh>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    // Very subtle rotation based on mouse
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.03,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.02,
      0.05
    );
  });

  return (
    <>
      <color attach="background" args={['#000000']} />
      
      <AmbientGlow />
      
      <group ref={groupRef}>
        {/* Top wave - curves from top left */}
        <SilkWave 
          yOffset={8} 
          zOffset={-2} 
          speed={0.45} 
          amplitude={4}
          phase={0}
          scale={1.0}
          irregularity={1.2}
        />
        
        {/* Upper middle wave */}
        <SilkWave 
          yOffset={3} 
          zOffset={-1} 
          speed={0.38} 
          amplitude={3.5}
          phase={Math.PI * 0.5}
          scale={1.1}
          irregularity={0.8}
        />
        
        {/* Center wave */}
        <SilkWave 
          yOffset={-2} 
          zOffset={0} 
          speed={0.52} 
          amplitude={3}
          phase={Math.PI}
          scale={1.0}
          irregularity={1.5}
        />
        
        {/* Lower wave */}
        <SilkWave 
          yOffset={-7} 
          zOffset={-1.5} 
          speed={0.42} 
          amplitude={4}
          phase={Math.PI * 1.5}
          scale={1.05}
          irregularity={1.0}
        />
        
        {/* Bottom wave */}
        <SilkWave 
          yOffset={-12} 
          zOffset={-3} 
          speed={0.35} 
          amplitude={3.5}
          phase={Math.PI * 0.3}
          scale={1.15}
          irregularity={1.3}
        />
      </group>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 22], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: '#000000' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
