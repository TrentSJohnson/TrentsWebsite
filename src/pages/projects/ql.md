---
title: "Q-Learning!"
date: "2018-12-4"
categories: ["project"]
---
Normally, after one makes his or her first few simple neural networks, they progress to convolution neural networks, but reinforcement learning was too fascinating for me to pass up on. However, I quickly learned that people did this because deep Q-learning is especially difficult. For this project, I did not achieve actual deep Q-Learning (DQN), but I plan on achieving it soon. Deep Q-Learning means that a network is intakes a state and outputs the Q-values defined by the Bellman equation for each action. In this project, I achieved Q-learning and a neural network that tried to memorize the Q-table. By the end of the school year, I plan to have a deep version running, but early on, I wanted to simply experiment with the process. 

In this project I made a 10x10 maze,and programmed the explicit algorithm to quickly predict the Q-Values and deftly solve the maze. To learn the maze, the algorithm initially made purely random moves, but as time progressed, it would slowly begin to move more and more towards move it thinks is best. However, the it will always move randomly at least 10% of the time to constantly be checking for new routes to ensure it is on the most efficient path. Here are the results.

However, I wanted to use a neural network to replicate this actions. However, DQNs are notoriously difficult to stabilize and I would like a bit more experience before having to tune one.

So, I tried turning it into a classification problem. I first ran my explicit algorithm to find the correct Q-values. Then paired each state with its best moved, and trained the network to intake a state and classify as a state with a best move that is left, right, up, or down. I used a 2 hidden layer network with 8 nodes on the hidden layers with 20000 training epochs and actions encoded in one-hot vectors. This is 1000 runs of the maze with the network having a 1% chance of making a random move.

As we can see, usually the network does great. However, when a random move does happen, the network may be pushed off the best route. Sometimes, this results in an only small addition to the number of steps which can be seen with the small bumps. Other times, the network will misidentify an area, and try to move in the direction that makes it run into a wall of the maze. When the network, also call an agent in this case, tries to move into a wall, it will remain in the same tile. Thus, it will run into a wall over and over again until another random action moves into a new tile. 

A way to fix this would be when the agent tries to run into a wall, force it to take a random action that doesn't move it into a wall. However, I have decided that this is the end of our little maze agent for a few reasons. The problem with my classification method is it relies on the explicit algorithmic Q-learning algorithm to be performed. This is fine for my small maze, but for huge environments like Space Invaders and self-driving cars, these explicit algorithms take too long and require too much memory to be feasible. Furthermore, when the algorithm comes across a new state, it can only take a random action. On the other hand, a properly trained agent would be able to able to make an educated guess based on prior knowledge. Thus, I think I will take a break from Q-learning for a bit and learn some existing libraries to allow me to create far more powerful networks.

Source:

 https://www.udemy.com/deeplearning/