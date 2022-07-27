#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    vec2 bl = step(vec2(0.1),st);

    // top-right
    // vec2 tr = step(st, vec2(0.9));
    vec2 tr = step(vec2(0.1),1.0-st);

    float pct = bl.x * bl.y * tr.x * tr.y;

    // The multiplication of left*bottom will be similar to the logical AND.
    color = vec3( pct );

    gl_FragColor = vec4(color,1.0);
}