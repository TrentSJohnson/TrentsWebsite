---
title: "Lights Out!"
date: "2019-01-12"
categories: ["project"]
---
One of the foundation concepts in programming is the Galois Field, also know as a finite field The most common variant is GF(2) which is a feild of n dimensions with each dimension containing the points 0 and 1. Addition, subtraction, and multiplication work in the field, but each operation is done in mod 2. To illustrate how it works, let us look at the vector [0,1,0,0] in GF(2). We can perform addition in the field by adding [1,1,0,1] to our original vector which would output [1,0,0,1]. This is because 1 + 0 = 1 mod 2, 0 + 0 = 0 mod 2, and 1 + 1 = 0 mod 2. 


In an attempt to provide a visual for this, I programmed the classic game Lights Out!

This game has a 5 by 5 plane of GF(2). Each square is either on, a value of 1, or off, a value a 0. Pressing a square changes the state of it and its neighbors. This is mathematically equivalent to adding 1 to the square and its neighbors. The goal of the game is to make the entire plane all gray, hence the title Lights Out! You can see how pressing a button twice is the same as turning it off. Using this fact, one can optimize their strategy to solve the game since you know you should never have to press a button twice.

I found this project to be very informative about the Galois field, and it taught me how to program in the pygame library which will be useful for making games to run machine learning on.
