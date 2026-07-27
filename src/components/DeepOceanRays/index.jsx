import { useEffect, useRef } from "react";
import { Styled } from "./styled";

const vertexShaderSource = `#version 300 es
in vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `#version 300 es
precision highp float;

out vec4 glFragColor;

uniform vec2 u_resolution;
uniform float u_time;

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        0.08,
        1.0
    ) * clamp((u_resolution.x - length(sourceToCoord)) / u_resolution.x, 0.05, 1.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);

    // vec3 deepOcean = vec3(0.005, 0.035, 0.075);
    // vec3 oceanBlue = vec3(0.0, 0.16, 0.28);
    // vec3 cyanGlow = vec3(0.0, 0.55, 0.72);
    // vec3 tealGlow = vec3(0.0, 0.32, 0.45);

    // float depth = smoothstep(0.0, 1.0, uv.y);
    // vec3 base = mix(oceanBlue, deepOcean, depth);

    vec3 deepBlack = vec3(0.004, 0.004, 0.006);
    vec3 darkGray = vec3(0.045, 0.045, 0.052);
    vec3 softGrayGlow = vec3(0.32, 0.32, 0.34);
    vec3 silverGrayGlow = vec3(0.48, 0.48, 0.52);

    float depth = smoothstep(0.0, 1.0, uv.y);
    vec3 base = mix(darkGray, deepBlack, depth);

    float speed = 0.75;

    vec2 rayPos1 = vec2(u_resolution.x * 0.65, u_resolution.y * -0.38);
    vec2 rayDir1 = normalize(vec2(1.0, -0.116));

    vec2 rayPos2 = vec2(u_resolution.x * 0.85, u_resolution.y * -0.62);
    vec2 rayDir2 = normalize(vec2(1.0, 0.241));

    float rays1 = rayStrength(rayPos1, rayDir1, coord, 36.2214, 21.11349, speed);
    float rays2 = rayStrength(rayPos2, rayDir2, coord, 22.39910, 18.0234, speed * 0.8);

    float verticalFade = 1.0 - smoothstep(0.0, u_resolution.y, coord.y);
    float rayMask = pow(verticalFade, 1.65);

    // vec3 rays = cyanGlow * rays1 * 0.35 + tealGlow * rays2 * 0.28;
    vec3 rays = softGrayGlow * rays1 * 0.55 + silverGrayGlow * rays2 * 0.42;
    rays *= rayMask;

    float vignette = distance(uv, vec2(0.5));
    vignette = smoothstep(0.82, 0.18, vignette);

    vec3 color = base + rays;
    color *= vignette;

    glFragColor = vec4(color, 1.0);
}
`;

const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
};

const DeepOceanRays = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext("webgl2", {
            alpha: false,
            antialias: true,
            powerPreference: "high-performance",
        });

        if (!gl) return;

        const vertexShader = createShader(
            gl,
            gl.VERTEX_SHADER,
            vertexShaderSource,
        );
        const fragmentShader = createShader(
            gl,
            gl.FRAGMENT_SHADER,
            fragmentShaderSource,
        );

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        const vertices = new Float32Array([
            -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
        ]);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const resolutionLocation = gl.getUniformLocation(
            program,
            "u_resolution",
        );
        const timeLocation = gl.getUniformLocation(program, "u_time");

        let animationFrameId;
        const startTime = performance.now();

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            gl.viewport(0, 0, canvas.width, canvas.height);
        };

        const render = () => {
            resize();

            const time = (performance.now() - startTime) * 0.001;

            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(timeLocation, time);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
            gl.deleteProgram(program);
            gl.deleteBuffer(buffer);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
        };
    }, []);

    return (
        <Styled.Wrapper>
            <canvas ref={canvasRef} />
        </Styled.Wrapper>
    );
};

export default DeepOceanRays;
