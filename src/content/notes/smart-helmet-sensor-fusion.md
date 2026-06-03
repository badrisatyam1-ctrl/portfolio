---
title: "Sensor Fusion Algorithms for Impact Detection"
date: "2026-05-10"
excerpt: "How I combined accelerometer and gyroscope data on an ESP32 to accurately differentiate between a rough motorcycle ride and an actual crash."
tags: ["Embedded", "IoT", "Sensors"]
readingTime: "6 min"
---

# The Problem with Simple Thresholds

When building the Smart Helmet system, my initial approach to crash detection was a simple threshold: if the accelerometer (MPU6050) reads a sudden spike in G-force over a certain limit, trigger an accident alert. 

However, this caused massive false positives. Riding over a pothole or dropping the helmet on a desk would trigger an SOS text message. I needed a smarter way to verify an accident.

## Implementing Sensor Fusion

To solve this, I moved away from raw accelerometer thresholds and implemented a rudimentary sensor fusion algorithm.

```cpp
// Pseudocode for Impact Verification
bool detectAccident(float accel_g, float gyro_rate, int alcohol_level) {
    // 1. Check for high impact
    if (accel_g > CRASH_THRESHOLD_G) {
        
        // 2. Cross-verify with sudden orientation change (tumbling)
        if (gyro_rate > TUMBLE_THRESHOLD_DEG) {
            
            // 3. Optional Context: Was the rider intoxicated?
            if (alcohol_level > LEGAL_LIMIT) {
                // High probability of severe accident
                return true;
            }
            
            return true; // Crash detected
        }
    }
    return false; // Likely just a pothole
}
```

### The Three-Phase Verification
1. **Primary Impact (Accel):** We still look for the G-force spike.
2. **Rotational Verification (Gyro):** A real accident almost always involves tumbling or a severe change in orientation. If the gyroscope doesn't register a rapid tumble immediately following the impact, we assume it was a linear bump (like a pothole).
3. **Timer Delay:** Finally, before sending the GSM SOS text, the system waits 10 seconds. If the rider gets up, they can cancel the SOS via a physical button.

By combining multiple sensor readings (Accel + Gyro), the embedded system became significantly more resilient to false positives.
