
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
  return pow(smoothstep(y-line_width, y, st.y), 10.0) - pow(smoothstep(y, y+line_width, st.y), 10.0);
}

// 起始点到终点画一条线
float line_segment_width_two_point(vec2 st, vec2 start, vec2 end, float line_width) {
  vec2 line_vetcor_from_end = normalize(vec2(start.x, start.y) - vec2(end.x, end.y)); // 结束点指向起始点的向量
  vec2 line_vector_from_start = -line_vetcor_from_end; // 起始点指向结束点的向量
  vec2 st_vector_from_end = st - vec2(end.x, end.y); // 结束点指向画布中任意点的向量
  vec2 st_vector_from_start = st - vec2(start.x, start.y); // 起始点点指向画布中任意点的向量

  float proj1 = dot(line_vetcor_from_end, st_vector_from_end);
  float proj2 = dot(line_vector_from_start, st_vector_from_start);

  // 通过点乘结果>0 判断是否同相，过滤掉线段两头超出部分
  if (proj1 > 0.0 && proj2 > 0.0) {
    // 求结束点指向画布中任意点的向量与结束点指向起始点的向量的夹角
    float angle = acos(dot(line_vetcor_from_end, st_vector_from_end) / (length(line_vetcor_from_end) * length(st_vector_from_end)));
    // 屏幕上任意点到直线的垂直距离
    float dist = sin(angle)*length(st_vector_from_end);

    return pow(1.0 - smoothstep(0.0, line_width/2.0, dist), 6.0);
  }
}

// y = Asin(ωx + φ) + b
// 正弦函数各常数值说明
// A：振幅（即纵向拉伸压缩的倍数）
// ω：角速度（控制波浪的周期）
// φ：初相位
// b：偏距，表示波形在Y轴的位置关系
float sinLine(vec2 st,float line_width) {

  // 振幅
  float amplitude = 0.08;
    
  // 角速度（控制波浪的周期）
  float angularVelocity = 12.0;

  // 偏距
  float b = 0.5;

  // 初相位
  float initialPhase = 0.5;

  float frequency = 12.0;
  initialPhase = frequency * u_time;

  float y = amplitude * sin((angularVelocity*st.x)+initialPhase)+b;
  return smoothstep(y-line_width/2.0,y,st.y)-smoothstep(y,y+line_width/2.0,st.y);
}


void main() {
    // (gl_FragCoord.xy/u_resolution) * 2 - 1=> [0,1] * 2 -1 => [0, 2] -1 => [-1, 1]
    vec2 st = (gl_FragCoord.xy * 2.0 -u_resolution) / u_resolution;

    vec3 line_color = vec3(1.0, 1.0, 0.0);
    vec3 color = vec3(0.6);


    // x轴
    float pct_x = line_segment_width_two_point(st, vec2(-1.0, -0.0), vec2(1.0, 0.0), 0.04);
    color = mix(color, line_color, pct_x);

    // y轴
    float pct_y = line_segment_width_two_point(st, vec2(0.0, -1.0), vec2(0.0, 1.0), 0.04);
    color = mix(color, line_color, pct_y);
    // sin
    float pct_sin = sinLine(st, 0.02);
    color = mix(color, line_color, pct_sin);

    gl_FragColor = vec4(color,1.0);
}