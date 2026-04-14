"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TechGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial 
        color="#F8B133" 
        wireframe={true} 
        transparent={true} 
        opacity={0.15} 
      />
    </mesh>
  );
}

function FloatingParticles() {
  const ref = useRef<any>(null);
  
  const points = useMemo(() => {
    const coords = new Float32Array(1500 * 3);
    for (let i = 0; i < coords.length; i += 3) {
      const radius = 4 * Math.random() + 1; // avoid center
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i+2] = radius * Math.cos(phi);
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 15;
      // Gently drift upwards like heat
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#F8B133"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <fog attach="fog" args={['#0D1B3E', 3, 10]} />
        <ambientLight intensity={0.5} />
        <TechGlobe />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
