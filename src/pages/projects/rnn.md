---
title: "RNNs, Char-nns, and Karpathy-NNs Oh My!"
date: "2019-03-22"
categories: ["project"]
---

Recently, I learned of a famous recurrent neural network build by Andrew Karpathy and the lighter Python version I can run on my laptop. It is a char-nn, meaning that it can generate text by generating one character at a time. This means it would write "H" "E" "L" "L" "O" letter by letter rather than the whole word "HELLO" at once This network and the corresponding article shows up in many papers and has even been cited by Google in their research.  Since it was all open source, I decided I should give it a shot.

After web scraping all of the data, it was finally time to start the training process. First, I tried training the network on Ariana Grande songs. I knew may not have great results since the training set was only 205KB of text (the minimum recommended size is 1MB), but I thought it would be a great proof of concept. Here was its first crack at an Ariana Grande lyric.

"oQCK(?v!gGRkXjVc63U;V"DhWtmFUkí(&K5d!P;yz5V9WW)EtPUi'BZ y;’KOV]n&ceXx—rDd-pV0Ucc3;SEJrIFA"JduG&ua986p]T\[Xf,$vf8LifSo5HU-azP)4úVVeY,qrZF,6In(NnMkwyvIO!y-.ckN!)YwL,.emDU:J"D?dLq5ZEi!(’(S]Ji
]8"S9,?j,!H 

Thats not exactly a lyrical masterpiece. Let's go one training step further.

anoAa,hjIcvy eloa eoueyvoeee  s
, mw,  .n ithe. 
znv
eaoI etn yoasvwa   rhno ,yhaeme,hwaIeooeeohyente cl e are ere IITeoieupITOheroea iy yeuea eneeBhee he eee
ehe
ec n avhe
hto e nIieyeelneye ehwoe b 

Look how much better it has gotten! Although it is a far cry from English, it has learned to use far less punctuation and that spaces need to go in between short to medium sets of letters. All in only one training run! However, progress quickly slowed down, and once the network was trained, it produced lyrics such as this.

lird


You're give a littiess
Cave is everytup

I know you right the want come on
JAgatther halk it mall up, show, ar pain frollightul you world get where beh-(Ix)
Is back hear la
Neas.
Shea
Got rould 
The network has learned some words and formed a line that theoretically could be in a song, "I know you right the want come on". Furthermore, the gibberish looks more English-like. The extra lines came from the fact that each song was separated by 4 empty lines. This network wasn't a smashing success, but the network clearly learned from the extremely small data set.

Since my data set for the first char-nn was too small, I decided to get a larger data set. Using scrapy. I collected the transcripts of all 112 episodes of my favorite podcast, Hello Internet.  This data set was 11MB, so it was a decent size. However, because it is a podcast, the words are conversational, so the grammar of the data set is not perfect. Here is the result after a few hours of training.

dont records like that I think it's a sit I don't know I wifh on the how do something is crassed by this is just used to be there ane what you like protQable to maying as we could be with yeah the mos
Clearly, this network has learned some English, but it is nonsensical and  fails to spell a significant number of words. However, the larger data set helped immensely, and it was able to learn far more with Hello Internet than it was with Ariana Grande. In the future, I would like to be able to use the full version of the network, but that will have to wait until I get a desktop.