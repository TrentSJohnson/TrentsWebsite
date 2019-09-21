---
title: "Hard Hardware Wearing Me Down"
date: "2019-01-02"
categories: ["blog"]
span: ""
---

Earlier this month, I tried to install Andrew Karpathy famous char-nn model.  This network uses a more advanced version of the recurrent neural network (RNN) known as the long-short-term memory network (LSTM). However, this network was written in Lua. Lua is a scripting language that runs far faster than the traditional Python but is usually reserved for more industrial applications. However, this was a problem because it requires a Linux or Mac operating system, and I have Windows. After some serious Googling, I managed to get a virtual machine with Ubuntu installed. However, when I got my network up and running, it would end up taking over a year of training before the model was ready. It turns out that a GPU is needed to train it in any reasonable time, and unfortunately, I don't have a GPU. Welp. That's not going to work.

Then I tried plan B: borrowing a friends desktop. However, the Ubuntu installation failed halfway through, and the GPU was AMD, not Nvidia. This was a big issue because AMD does not have well-built drivers to support neural networks like Nvidia. Thus, I was unable to run the full model. Luckily, Karparthy, released a shorter version of the program withPython where I was able to use it to moderate success in this project.