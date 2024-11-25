'use client'
import React, {useRef, useMemo} from "react";
import { Canvas, useThree, useFrame} from "@react-three/fiber";
import fragmentShader from 'raw-loader!glslify-loader!./fragmentShader.glsl'
import vertexShader from 'raw-loader!glslify-loader!./vertexShader.glsl'
import { useControls } from "leva";
import { Vector3, Color } from "three";
import { COSINE_GRADIENTS } from '@thi.ng/color'

const DEFAULT_COLOUR_PALETTE = [
  new Vector3(1.0, 0.0, 0.0), // Red
  new Vector3(0.0, 1.0, 0.0), // Green
  new Vector3(0.0, 0.0, 1.0), // Blue
];

function Plane() {
  const { viewport, size } = useThree();
  const mesh = useRef();

  const { speed, amplitude } = useControls({
  speed: { value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
  amplitude: { value: 0.5, min: 0.1, max: 5.0, step: 0.1 },
});

const uniforms = useMemo(() => ({
  uTime: { value: 0.0 },
  uAmplitude: { value: 0.5 },
  uSpeed: { value: 1.0 },
  uColors: { value: DEFAULT_COLOUR_PALETTE }, // Match the uniform name in the shader
}), []);

  // Update uniforms on every frame
  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uSpeed.value = speed;
    uniforms.uAmplitude.value = amplitude;
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
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
    <Canvas style={{ width: '100vw', height: '100vh' }} >
     <Plane></Plane>
     <ambientLight intensity={0.5} />
      <directionalLight intensity={3} position={[0,3,2]}/>
    </Canvas>
  )
}

export default Scene
