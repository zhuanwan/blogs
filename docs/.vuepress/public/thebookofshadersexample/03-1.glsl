#ifdef GL_ES
precision mediump float;
#endif
uniform float u_time;
void main()
{
  gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0); // sin(x)=>(-1,1), abs=>(0,1)
} 