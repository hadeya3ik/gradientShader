// Vertex Shader for ScreenQuad
// Efficient vertex shader without transformation matrices
varying vec2 vUv;

void main() {
    vUv = position.xy * 0.5 + 0.5; // Map NDC to UV coordinates
    gl_Position = vec4(position.xy, 0.0, 1.0); // Use NDC position
}
