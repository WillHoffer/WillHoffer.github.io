---
title: "How to install Manim (and ffmpeg) on Windows"

tags:
- tutorial
- sci-comp
---

# What is Manim?

Manim, which I presume is short for *Math Animation*, is a package created for math visualization and animation. The original author is Grant Sanderson, the force behind the Youtube channel 3blue1brown, and there is also a community version. If you've watched any of Grant's videos, then the package speaks for itself. 

As to installation, I will focus on the community version, found [here](https://github.com/ManimCommunity/manim). 

# Step-by-step

### Step 0: Preliminaries

First, install Python. I will not be covering how to do this here, but I will mention that I specifically use Anaconda and my workflow is primarily with VSCode. 

### Step 1: Install the Manim package

Open a terminal and install Manim:
```
pip install manim
```
If you've set up python correctly, this step is as easy as any other package.

### Step 2: Install FFmpeg

This is a package needed for video editing. I've used it before for `gifsicle` optimization, however I needed to set it up on my laptop so I will cover it here. Secretly, this tutorial is really about setting up `ffmpeg` because everything else is super straightforward, but `ffmpeg` is *not*. 

[Here](https://www.wikihow.com/Install-FFmpeg-on-Windows) is the guide that I found most helpful. 

I tried three things:
- Manually install [ffmpeg](https://ffmpeg.org/download.html) and add to the system environment
- Run `pip install ffmpeg`
- Run `conda install conda-forge::ffmpeg`
At first, none of these seemed to work. What finally did get it installed was opening a `cmd` prompt in administrator mode (not a powershell terminal) and running:
```
setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Notably, I altered my path variable manually since my path took the form `C:\Program Files\ffmpeg\bin`; in principle you should be able to directly use your path in the above command with needed to manually add then alter it. 

If you've installed it correctly, running the command `ffmpeg -version` should work. I think when I edited the system variables manually, I made an error. Don't create a new variable, but instead edit the existing path variable. In that setting, you should be able to add the new path to ffmpeg. 

Lastly, this is very important: *restart your computer*. My python terminals did not recognize ffmpeg until after restarting, not just opening new terminals. 

### Step 4: VSCode Extension 

If you don't use VSCode, you are done. Go ahead and test out the program and/or set up your desired workflow. If you use VSCode, though, there is an extension called Manim Sideview which I highly recommend. It's installed using the extensions sidebar like usual, and the page itself has a nice tutorial for using it.


### Step 5: Test it out

Now test it out using the sample program provided by Manim community:
```
from manim import *

class SquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        square = Square()
        square.flip(RIGHT)
        square.rotate(-3 * TAU / 8)
        circle.set_fill(PINK, opacity=0.5)

        self.play(Create(square))
        self.play(Transform(square, circle))
        self.play(FadeOut(square))
```
If you've done everything correctly, you should get the scene:
<video width="640" height="480" controls>
  <source src="https://github.com/WillHoffer/WillHoffer.github.io/blob/08538c1956a0dbf5189d851d48f266226f066ece/assets/videos/SquareToCircle.mp4" type="video/mp4">
If you see this, the video is not displayed correctly.
</video> 