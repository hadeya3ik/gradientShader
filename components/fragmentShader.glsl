varying vec2 vUv;

uniform vec3 uColors[3];
uniform float uTime;
uniform float uAmplitude;
uniform float uSpeed;

void main() {
    vec2 centeredUv = 2.0 * vUv - vec2(1.0);

    centeredUv += uAmplitude * 0.4 * sin(1.0 * centeredUv.yx + vec2(1.2, 3.4) + uTime * uSpeed);
    centeredUv += uAmplitude * 0.2 * sin(5.2 * centeredUv.yx + vec2(3.5, 0.4) + uTime * uSpeed);
    centeredUv += uAmplitude * 0.3 * sin(3.5 * centeredUv.yx + vec2(1.2, 3.1) + uTime * uSpeed);
    centeredUv += uAmplitude * 1.6 * sin(4.0 * centeredUv.yx + vec2(0.8, 2.4) + uTime * uSpeed);

    vec3 baseColor = uColors[0];

    for (int i = 0; i < 3; i++) {
        float influence = 0.5 + 0.5 * cos(float(i) * 2.0 * length(centeredUv) - uTime);
        baseColor += uColors[i] * influence;
    }
    
    gl_FragColor = vec4(baseColor, 1.0);
}
