'use client';
import React, { useRef, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Vector3 } from "three";
import { COSINE_GRADIENTS } from '@thi.ng/color';
import fragmentShader from 'raw-loader!glslify-loader!../shader/fragmentShader.glsl';
import vertexShader from 'raw-loader!glslify-loader!../shader/vertexShader.glsl';

// Default color palette
// const DEFAULT_COLOUR_PALETTE = COSINE_GRADIENTS['yellow-purple-magenta'].map((color) => new Vector3(...color));

// Default Smile theme + more Pink + Orange ` toothpaste frequency
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(1.528, 0.468, 0.758, 1.0), // First color
//   new Vector3(-2.052, 0.190, -0.215, 1.0), // Second color
//   new Vector3(-1.882, -6.283, -2.043, 1.0), // Third color
//   new Vector3(-2.462, -0.583, -2.803, 1.0), // Fourth color
// ];


// Default Smile theme w out orange
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.662, 0.469, 0.894, 1.0), // First color
//   new Vector3(0.573, 0.131, 0.026, 1.0), // Second color
//   new Vector3(0.587, 0.972, 1.089, 1.0), // Third color
//   new Vector3(3.049, 6.244, 4.676, 1.0), // Fourth color
// ];


// Black, hot Pink, Blue
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.258, 0.258, 0.458, 1.0), // First color
//   new Vector3(0.828, 0.268, 0.348, 1.0), // Second color
//   new Vector3(1.408, 0.668, 1.388, 1.0), // Third color
//   new Vector3(2.938, 1.018, 5.769, 1.0), // Fourth color
// ];


// Smile theme + orange + sky blue
const DEFAULT_COLOUR_PALETTE = [
  new Vector3(0.998, 0.738, 0.838, 1.0), // First color
  new Vector3(0.748, 0.218, 0.310, 1.0), // Second color
  new Vector3(0.528, -0.442, 1.186, 1.0), // Third color
  new Vector3(0.868, -0.362, 0.995, 1.0), // Fourth color
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
