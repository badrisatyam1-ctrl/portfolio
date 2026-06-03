---
title: "Tuning PID Controllers for Autonomous Flight"
date: "2026-04-18"
excerpt: "The math and methodology behind stabilizing a quadcopter using Proportional, Integral, and Derivative control loops."
tags: ["Control Systems", "Mathematics", "Robotics"]
readingTime: "5 min"
---

# The Drone Stabilization Problem

A drone is inherently aerodynamically unstable. Without a microcontroller constantly adjusting the motor speeds hundreds of times per second, the drone will immediately flip over and crash. 

To achieve stable hovering in my Autonomous Aerial Systems project, I implemented a **PID Controller** (Proportional, Integral, Derivative) for all three axes of movement: Pitch, Roll, and Yaw.

### The Mathematics of Flight

The PID formula calculates the "error" (the difference between the desired angle and the actual angle read by the MPU6050 gyroscope) and outputs a correction value to the motor ESCs.

```cpp
// A simplified PID calculation step
error = setpoint - measured_value;

// Proportional: Reacts to current error
P = Kp * error;

// Integral: Reacts to accumulated past errors
I = I + (Ki * error * dt);

// Derivative: Reacts to the rate of change
D = Kd * ((error - previous_error) / dt);

output = P + I + D;
previous_error = error;
```

### Tuning the Constants
The hardest part of building the flight controller was tuning the `Kp`, `Ki`, and `Kd` constants. 

1. **Kp (Proportional):** Increasing this made the drone react faster to tilting, but setting it too high caused violent oscillations.
2. **Kd (Derivative):** I added this to "dampen" the proportional response. It predicts the future error and slows down the motors just before the drone reaches the perfectly level position, preventing overshooting.
3. **Ki (Integral):** Finally, I added a tiny bit of Integral gain to compensate for physical imperfections (like one motor being slightly weaker than the others, causing a persistent drift).

By carefully tuning these three values on a test rig, the experimental drone platform achieved a perfectly locked-in hover.
