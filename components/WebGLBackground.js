'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  MeshDistortMaterial, 
  Float, 
  Sphere, 
  Stars, 
  Sparkles,
  GradientTexture,
  useCursor
} from '@react-three/drei';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────
// AI NUCLEUS (MORPHING CORE)
// ─────────────────────────────────────────────────────────
const AiNucleus = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const { clock, pointer } = state;
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y, 
        pointer.x * 0.5, 
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x, 
        -pointer.y * 0.5, 
        0.1
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.2}>
        <MeshDistortMaterial
          color="#6366F1" // Primary Accent
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.6}
          roughness={0.2}
          emissive="#6366F1"
          emissiveIntensity={0.4}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#6366F1', '#818cf8', '#6366F1']}
          />
        </MeshDistortMaterial>
      </Sphere>
    </Float>
  );
};

// ─────────────────────────────────────────────────────────
// REACTIVE PARTICLES (THE '7D' FEEL)
// ─────────────────────────────────────────────────────────
const ReactiveParticles = () => {
  const particlesRef = useRef();
  
  useFrame((state) => {
    const { clock, pointer } = state;
    if (particlesRef.current) {
      // Move particles towards pointer slightly
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.position.x = THREE.MathUtils.lerp(
        particlesRef.current.position.x, 
        pointer.x * 0.5, 
        0.05
      );
      particlesRef.current.position.y = THREE.MathUtils.lerp(
        particlesRef.current.position.y, 
        pointer.y * 0.5, 
        0.05
      );
    }
  });

  return (
    <group ref={particlesRef}>
      <Sparkles 
        count={200} 
        scale={8} 
        size={2} 
        speed={0.4} 
        opacity={0.3} 
        color="#818cf8" 
      />
      <Sparkles 
        count={50} 
        scale={10} 
        size={8} 
        speed={0.2} 
        opacity={0.1} 
        color="#ffffff" 
      />
    </group>
  );
};

// ─────────────────────────────────────────────────────────
// INTERACTIVE LIGHTING
// ─────────────────────────────────────────────────────────
const InteractiveLights = () => {
  const lightRef = useRef();
  
  useFrame((state) => {
    const { pointer } = state;
    if (lightRef.current) {
      // Lerp light position to mouse
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, pointer.x * 5, 0.1);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, pointer.y * 5, 0.1);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={50} color="#818cf8" />
      <pointLight position={[-5, 5, 2]} intensity={20} color="#6366F1" />
    </>
  );
};

const WebGLBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000 overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)]" />
      
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Performance optimization
        gl={{ antialias: true, alpha: true }}
      >
        <InteractiveLights />
        <AiNucleus />
        <ReactiveParticles />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>

      {/* Finishing Vignette & Gradient Blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_100%)] opacity-40" />
    </div>
  );
};

export default WebGLBackground;
