
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 斜线 y=kx+b
float line_kx(vec2 st, float k, float b, float line_width){
  float y = k*st.x + b;
  // return step(y, st.y) - step(y+line_width, st.y);
  return pow(smoothstep(y-line_width, y, st.y), 10.0) - pow(smoothstep(y, y+line_width, st.y), 10.0);
}

void main() {
    // (gl_FragCoord.xy/u_resolution) * 2 - 1=> [0,1] * 2 -1 => [0, 2] -1 => [-1, 1]
    vec2 st = (gl_FragCoord.xy * 2.0 -u_resolution) / u_resolution;

    // y < 0, 返回0，否则返回1
    // float pct = step(0.0, st.y) - step(0.02, st.y);
    // float pct = smoothstep(0.0, 0.01, st.y) - smoothstep(0.01, 0.02, st.y);
    float pct = pow(smoothstep(0.0, 0.01, st.y), 10.0) - pow(smoothstep(0.01, 0.02, st.y), 10.0);

    vec3 line_color = vec3(1.0, 1.0, 0.0);
    vec3 color = vec3(0.6);

    color = mix(color, line_color, pct);


    // y轴
    float pct_y = pow(smoothstep(0.0, 0.01, st.x), 10.0) - pow(smoothstep(0.01, 0.02, st.x), 10.0);
    color = mix(color, line_color, pct_y);

    // 斜线
    float pct_k = line_kx(st, 1.0, -0.3, 0.02);
    color = mix(color, line_color, pct_k);

    gl_FragColor = vec4(color,1.0);
}