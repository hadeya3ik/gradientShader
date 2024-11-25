// Fragment Shader for Animated Gradient with Noise
#pragma glslify: noise = require('glsl-noise/simplex/3d')

// Uniforms
uniform float uTime;
uniform float uSpeed;
uniform vec3 uColourPalette[4]; // Gradient colors
uniform float uUvScale; // UV scaling
uniform float uUvDistortionIterations; // Number of distortion iterations
uniform float uUvDistortionIntensity; // Intensity of UV distortion

varying vec2 vUv;

// Cosine gradient function (from thi.ng/color gradients)
vec3 cosineGradientColor(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
    return clamp(a + b * cos(6.28318 * (c * t + d)), 0.0, 1.0);
}

void main() {
    vec2 uv = vUv;

    // Scale UV coordinates
    uv *= uUvScale;

    // Apply UV distortion using noise
    for (float i = 0.0; i < uUvDistortionIterations; i++) {
        uv += noise(vec3(uv - i * 0.2, (uTime * uSpeed) + i * 32.0)) * uUvDistortionIntensity;
    }

    // Compute noise value for gradient input
    float colourInput = noise(vec3(uv, sin((uTime * uSpeed)))) * 0.5 + 0.5;

    // Compute gradient color using the cosine gradient
    vec3 colour = cosineGradientColor(colourInput, uColourPalette[0], uColourPalette[1], uColourPalette[2], uColourPalette[3]);

    // Output the final color
    gl_FragColor = vec4(colour, 1.0);
}

