#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 在Y上画一条线, 使用0.0-1.0之间的值, 小于等于0的时候是1, 大于等于0.02是0, 其他在中间
// 因为abs 不可能大于0，所以只能等于0的时候为1，也就是st.y === st.x
// 中间对角线就是st.x === st.y,在对角线附近接近 st.x === st.y, 也就是接近0，接近0也就是返回值接近1
float plot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main()
{
  // 使得st的xy都是0-1
  vec2 st = gl_FragCoord.xy/u_resolution;


  // vec3(st.x) = vec3(st.x, st.x, st.x)，X轴0-1 也就是0-255，X轴黑色->白色
  vec3 color = vec3(st.x);

  // vec3(st.y) = vec3(st.y, st.y, st.y)，Y轴0-1 也就是0-255，Y轴黑色->白色
  // vec3 color = vec3(st.y);

  // pct为0-1
  float pct = plot(st);

  // 当pct为1的时候 vec3(0.0,1.0,0.0)画绿色，当pct为0的时候，画color
  // pct接近1，画绿色，所以越往外面越糊
  color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

  gl_FragColor = vec4(color,1.0);
}   