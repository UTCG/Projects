Example post for Week 2

# Blender time!

This week we're gonna learn Blender.

## Coding and stuff

Here is the source code for Blender in C++. Be warned, there is a lot of linear algebra and geometry processing in the code! Blender is a highly sophisticated 3D graphics program.

```c++
#include <stdio.h>

int main() {
    printf("Hello, world!\n");
    return 0;
}
```

Here's a simple hello world program in TIBASIC for the TI 84+:

```python
import turtle as t
from math import sqrt

t.hideturtle()
t.color('red')
t.speed(0)

def draw_triangle(p1: t.Vec2D, p2: t.Vec2D, p3: t.Vec2D, depth: int) -> None:
    p1p2 = p2 - p1
    p2p3 = p3 - p2
    p1p3 = p3 - p1
    if depth == 0:
        t.penup()
        t.goto(p1)
        t.pendown()
        t.goto(p2)
        t.goto(p3)
        t.goto(p1)
    else:
        draw_triangle(p1, p1 + p1p2 * (1 / 2), p1 + p1p3 * (1 / 2), 0)
        draw_triangle(p1 + p1p2 * (1 / 2), p2, p2 + p2p3 * (1 / 2), 0)
        draw_triangle(p1 + p1p3 * (1 / 2), p2 + p2p3 * (1 / 2), p3, 0)
        draw_triangle(p1, p1 + p1p2 * (1 / 2), p1 + p1p3 * (1 / 2), depth - 1)
        draw_triangle(p1 + p1p2 * (1 / 2), p2, p2 + p2p3 * (1 / 2), depth - 1)
        draw_triangle(p1 + p1p3 * (1 / 2), p2 + p2p3 * (1/2), p3, depth - 1)

DEPTH = 6
SCALE = 300

t.Vec2D(-1, -sqrt(3) / 3)

left = SCALE * t.Vec2D(-1, -sqrt(3) / 2)
apex = SCALE * t.Vec2D(0, sqrt(3) / 2)
right = SCALE * t.Vec2D(1, -sqrt(3) / 2)

draw_triangle(left, apex, right, DEPTH)
t.done()
```

### Another heading

Here's some more misc text

#### Heading for image

Here's an image:

![logo](../images/logo.jpg)

#### Trying to add some html

Below you should see a shader, if this worked properly:

<div>
<canvas class="glslCanvas" data-fragment-url=“../scripts/test_shader.frag" width="500" height="500">
</canvas>
</div>

