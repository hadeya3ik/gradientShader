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


// Black, hot Pink, Blue
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.258, 0.258, 0.458, 1.0), // First color
//   new Vector3(0.828, 0.268, 0.348, 1.0), // Second color
//   new Vector3(1.408, 0.668, 1.388, 1.0), // Third color
//   new Vector3(2.938, 1.018, 5.769, 1.0), // Fourth color
// ];

// Smile theme + orange + sky blue
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.998, 0.738, 0.838, 1.0), // First color
//   new Vector3(0.748, 0.218, 0.310, 1.0), // Second color
//   new Vector3(0.528, -0.442, 1.186, 1.0), // Third color
//   new Vector3(0.868, -0.362, 0.995, 1.0), // Fourth color
// ];

// TOP CHOICE 
const DEFAULT_COLOUR_PALETTE = [
  new Vector3(1.040, 1.040, 0.718), // First color
  new Vector3(0.418, 0.500, 0.478), // Second color
  new Vector3(0.523, 0.308, 0.273), // Third color
  new Vector3(0.000, 0.308, 0.667), // Fourth color
];

// eh dark 
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(-2.722, -2.242, -1.592), // First color
//   new Vector3(3.920, 3.076, 3.920),    // Second color
//   new Vector3(-0.612, 1.268, 0.742),   // Third color
//   new Vector3(0.248, 1.298, -0.313),   // Fourth color
// ];

// black, hot pink, light blue, 
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.228, -0.222, 0.078),  // First color
//   new Vector3(-0.802, 0.708, 1.028),  // Second color
//   new Vector3(1.299, 0.721, 1.193),   // Third color
//   new Vector3(-1.503, -0.653, -1.073), // Fourth color
// ];

// black, orange, pink, blue,
// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.148, 0.098, 0.288),  // First color
//   new Vector3(1.117, 0.552, 0.665),  // Second color
//   new Vector3(1.368, 1.208, 1.308),  // Third color
//   new Vector3(0.897, -0.993, -1.243), // Fourth color
// ];


// const DEFAULT_COLOUR_PALETTE = [
//   new Vector3(0.258, 0.258, 0.458, 1.0), // First color
//   new Vector3(0.828, 0.268, 0.348, 1.0), // Second color
//   new Vector3(1.408, 0.668, 1.388, 1.0), // Third color
//   new Vector3(2.938, 1.018, 5.769, 1.0), // Fourth color
// ];


function Plane() {
  const { viewport } = useThree(); 
  const mesh = useRef();

  // Leva controls 
  const { speed, scale, distortionIterations, distortionIntensity } = useControls({
    speed: { label: 'Speed', value: 0.05, min: 0.001, max: 0.2, step: 0.01,},
    scale: { label: 'Scale', value: 2, min: 0.1, max: 2.0, step: 0.1,},
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
    uColourPalette: { value: DEFAULT_COLOUR_PALETTE },
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
