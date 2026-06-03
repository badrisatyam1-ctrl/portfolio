---
title: "Understanding Convolution in CNNs for Defect Analysis"
date: "2026-05-15"
excerpt: "A deep dive into how convolutional layers extract spatial features from images, specifically focusing on semiconductor wafer defect classification."
tags: ["Deep Learning", "Computer Vision"]
readingTime: "8 min"
---

# Feature Extraction in CNNs

When working with semiconductor wafer maps, detecting macro-level defects like rings or scratches requires robust spatial feature extraction.

A standard deep learning approach relies on Convolutional Neural Networks (CNNs). Here is a standard implementation snippet in TensorFlow:

```python
import tensorflow as tf
from tensorflow.keras import layers, models

def build_wafer_model():
    model = models.Sequential()
    
    # First Convolutional Block
    model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 1)))
    model.add(layers.MaxPooling2D((2, 2)))
    
    # Second Convolutional Block
    model.add(layers.Conv2D(64, (3, 3), activation='relu'))
    model.add(layers.MaxPooling2D((2, 2)))
    
    model.add(layers.Flatten())
    model.add(layers.Dense(64, activation='relu'))
    model.add(layers.Dense(9, activation='softmax')) # 9 Defect Classes
    
    return model
```

### Why it works

The convolution kernels scan across the wafer map, naturally capturing spatial hierarchies. Early layers learn basic lines and curves (like a scratch), while deeper layers combine these into complex shapes (like a center ring).
