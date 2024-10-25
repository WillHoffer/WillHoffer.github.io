---
title: "How to Install Manim on Windows"

tags:
- tutorial
- sci-comp
---

# What is Manim?

Manim, which I presume is short for *Math Animation*, is a package created for math visualization and animation. The original author is Grant Sanderson, the force behind the [Youtube channel 3blue1brown](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw), who maintains a personal version and alternatively there is a (better maintained) community version. If you've watched any of Grant's videos, then the package speaks for itself. 

As to installation, I will focus on the community version, found [here](https://github.com/ManimCommunity/manim). 

# Installation

There are two ways that you can install Manim on Windows that I will discuss here. Firstly, I manually installed it and its dependency FFmpeg. Secondly, when I ran into an error on a second device, I first installed a package manager on Windows that automatically installed Manim and its dependencies without issue. 

For manual installation, follow Steps 0A-2A. For the package manager version, follow Steps 1B-2B. Knowing what I know now, I'd recommend installing Chocolatey (Option B) as it felt much easier and should be useful for the future too. 

## Method A, Manual Installation
### Step 0A: Preliminaries

First, install Python. I will not be covering how to do this here, as there are many ways to do so. 

### Step 1A: Install the Manim package

Open a terminal and install Manim:
```
pip install manim
```
If this works, great! For some reason, this worked on my laptop but failed on the desktop (both Windows). In the second case, jump to Method B with Chocolatey.

### Step 2A: Install FFmpeg

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

## Method B, Using a Package Manager
### Step 1B: Install Chocolatey

[Installing Chocolatey](https://chocolatey.org/install), a package manager, makes this process really easy. You actually don't install through their website but rather through Powershell. The instructions are on the link provided, but here are the steps as well:

- Open powershell as an administrator (right click and select the option to run as administrator).
- Run `Get-ExecutionPolicy`. If it returns `Restricted`, run `Set-ExecutionPolicy AllSigned`. 
- Install chocolatey with the command: 
`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

### Step 2B: Install Manim and its Dependencies

Now run the command `choco install manimce`. This will install Manim and all of its dependencies for you. Notably, it installed a different version of Python for me that I had to switch to. After that, however, everything worked. 

## Optional Steps and Testing
### Step 3: VSCode Extension 

If you don't use VSCode, you are done. Go ahead and test out the program and/or set up your desired workflow. If you use VSCode, though, there is an extension called Manim Sideview which I highly recommend. It's installed using the extensions sidebar like usual, and the page itself has a nice tutorial for using it.

### Step 4: Test it out

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
<div class="centered">
  <video width="640" height="480" controls>
    <source src="\assets\videos\SquareToCircle.mp4" type="video/mp4">
  If you see this, the video is not displayed correctly.
  </video> 
</div>