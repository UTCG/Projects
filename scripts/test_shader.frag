#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mo = u_mouse/u_resolution;
    gl_FragColor = vec4((sqrt(2.) + cos(u_time) * (st.x - 0.5) + sin(u_time) * (st.y - 0.5)) / sqrt(2.),
                        (sqrt(2.) + cos(u_time / 2.) * (st.x - 0.5) + sin(u_time / 2.) * (st.y - 0.5)) / (sqrt(2.)),
                        (sqrt(2.) + -sin(u_time) * (st.x - 0.5) + cos(u_time) * (st.y - 0.5)) / sqrt(2.),
    0.75);
}

