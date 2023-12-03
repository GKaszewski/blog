---
title: "My Rust little adventure"
description: ""
pubDate: "Jul 21 2023"
category: "Technology"
---

In the previous post I have written that I would have wanted to get into Rust. In July, I finally started writing in Rust 😉. It has been a quite pleasant adventure, I am not going to lie. I have written several projects in it.

## Mandelbrot set

Okay, so the first 'project' that I did in Rust was a simple program that creates Mandelbrot's set image. The code for that was provided by the book _Programming Rust: Fast, Safe Systems Development 2nd Edition_
I did it because it seemed cool and in High School I made similar program but in Java.
This one was more interesting because it used multithreading.
![mandelbrot](https://gabrielkaszewski.dev/media/output.png)
But that was just a **hello world** program, I did not write my 'own' code.

**Repo:** [mandelbrot](https://github.com/GKaszewski/mandelbrot)

## Chip8 emulator

This was my second program. It was more *advanced*than Mandelbrot but still quite simple I think...
Chip8 is actually just an interpreted programming language that was used in 8 bit microprocessors in the 70s. Entire specs are just 11 pages, operation set is quite well documented and the entire process of implementing them was quite pleasant and fast.
My emulator is somewhat functional I would say, although it has some issues with keyboard handling and sound is not implemented **yet**. The emulator passed cortex+ test but somehow flags test still fails and I have no clue why and how to fix it, so I am going to work on that maybe in the future. Nevertheless it was a fun project.
![imb logo](https://user-images.githubusercontent.com/42281413/255027071-9767cc67-808b-4262-80b1-9719fe4812e8.jpg)

I used raylib for window and drawing context, honestly I think that raylib is just an awesome library for projects like this. Anyone who would like to create some project that requires drawing, displaying window and handling sound&keyboard I would recommend you to try raylib.

Repo: [chip8](https://github.com/GKaszewski/chip8)

## Screensaver

I wanted to create my own screen saver 😎. I had no idea what I wanted to make though, finally I'd had decided on making Conway's game of life as a screen saver. I have also used raylib for this project, see how useful it is.
I thought that writing own screen saver were going to be difficult to some extent, but turned out it really was not. All I had to do was to run window in fullscreen without any decorations and just parse some CLI arguments... and that was pretty much it. Oh I also had to handle any user activity and make it to close the app. Anyway it was much fun, I will probably make another one soon, something with Minecraft theme I think...

Repo: [screensaver](https://github.com/GKaszewski/screensaver)

## Asteroids

The last project that I have been working on is asteroids game. It is actually just a remake of my C project (I used SDL2 for that one). In this one I am using **Bevy engine** and I have to admit it is pretty handy and straight-forward to use. I love the data driven design. I have yet still to add HUD, power-ups, boss fight and second-player feature to the game and then I will publish it on my website. In the future I am planning to make my first **commercial game** with Bevy. But we will see.

### Conclusion

Rust is fun, I had no idea that I would find myself in that language but I am pleasantly surprised. Same thing was with Python 😜. I really love the eco-system of Rust. Cargo is just the best. I hated in C and C++ the linking and compiling of external libraries and setting up the toolchain, in Rust all of those problems just fade away. The match feature is also cool.
