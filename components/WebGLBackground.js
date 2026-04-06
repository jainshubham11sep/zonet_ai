'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random sphere points, keeping them out of a central radius
function generateParticles(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 1.5 + Math.random() * 5; // keep out of center, push outwards
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

const ParticleField = () => {
  const ref = useRef();
  const sphere = generateParticles(800);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30; // Rotate very slowly
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981" // emerald-500
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const WebGLBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40 dark:opacity-60 transition-opacity duration-700">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleField />
      </Canvas>
      {/* Fallback gradient overlay to blend stars nicely */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default WebGLBackground;
