'use client';
import React, { useRef, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Vector3 } from "three";
import { COSINE_GRADIENTS } from '@thi.ng/color';
import fragmentShader from 'raw-loader!glslify-loader!./fragmentShader.glsl';
import vertexShader from 'raw-loader!glslify-loader!./vertexShader.glsl';

// Default color palette
// const DEFAULT_COLOUR_PALETTE = COSINE_GRADIENTS['yellow-purple-magenta'].map((color) => new Vector3(...color));

const DEFAULT_COLOUR_PALETTE = [
  new Vector3(0.938, 0.328, 0.718, 1), // Orange (RGB: 255, 128, 0)
  new Vector3(0.659, 0.438, 0.328, 0), // Pink (RGB: 255, 0, 128)
  new Vector3(0.388, 0.388, 0.296, 0), // Purple (RGB: 128, 0, 255)
  new Vector3(2.538, 2.478, 0.168, 0), // Black (RGB: 0, 0, 0)
];

function Plane() {
  const { viewport } = useThree(); 
  const mesh = useRef();

  // Leva controls 
  const { speed, scale, distortionIterations, distortionIntensity } = useControls({
    speed: { label: 'Speed', value: 0.1, min: 0.01, max: 2.0, step: 0.05,},
    scale: { label: 'Scale', value: 0.2, min: 0.1, max: 2.0, step: 0.1,},
    distortionIterations : { label: 'DistortionIterations', value: 5, min: 0, max: 10.0, step: 0.1,},
    distortionIntensity : { label: 'DistortionIntensity', value: 0.5, min: 0.1, max: 1.0, step: 0.1,}
  });

  // Set up shader uniforms
  const uniforms = useMemo(() => ({
    uTime: { value: 0.0 },
    uSpeed: { value: 0.1 },
    uUvScale: { value: 0.2 },
    uUvDistortionIterations: { value: 4.9 },
    uUvDistortionIntensity: { value: 0.5 },
    uColourPalette: { value: DEFAULT_COLOUR_PALETTE }, // Static color palette
  }), []);

  // Update uniforms on every frame
  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uSpeed.value = speed;
    uniforms.uUvScale.value = scale;
    uniforms.uUvDistortionIterations.value = distortionIterations;
    uniforms.uUvDistortionIntensity.value = distortionIntensity;
  });

  return (
    <mesh
      ref={mesh}
      scale={[viewport.width, viewport.height, 1]} // Fullscreen
    >
      <planeGeometry args={[1, 1]} /> 
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <Plane />
    </Canvas>
  );
}

export default Scene;
