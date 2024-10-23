---
title: "How to install Sage on Windows"

tags:
- tutorial
- sci-comp
---

# What is Sage?

[Sage](https://www.sagemath.org/) is a computer algebra system (CAS) used for high level mathematics programming. It is free and open source. Similar programs include Mathematica or MatLab. 

In this article, I will recount how I installed Sage on a Windows system and configured it to work using VSCode for convenient editing. There is an installation guide [here](https://doc.sagemath.org/html/en/installation/index.html), but I found it lacking in several key steps and containing redundant or outdated information that made the overall process less clear.

# Installation of Sage

Here is the outline:
- Install Windows Subsystem for Linux (WSL)
- Install Sage though WSL
- Configue WSL on VSCode 

In order to follow this guide, you will need some ability to access and type commands in terminals. For the most part, you will just be copy-pasting from commands I provide here. 

## Installing WSL

Open Windows PowerShell or a command prompt in administrator mode and run the command:
```
wsl --install
```
By default, this will set up the Ubuntu linux distribution. A more detailed guide is [here](https://learn.microsoft.com/en-us/windows/wsl/install) if you wish to change the distribution or encounter issues.

As part of this process, you will be prompted to create a unix username and password. There are expected conventions for the username; an all-lowercase string worked for me. As for the password, make sure you can type it relatively easily in the command line as sometimes you may be prompted for it when executing a command. 

When the installation is complete, you should be able to access Ubuntu from the Windows start menu, which will open a terminal. This is where you should enter commands for the next steps. 

## Configuring WSL and Installing SageMath

After installing WSL with a distribution such as Ubuntu, open the linux terminal. You can do so by finding the distribution on the start menu.

Run the commands:
```
sudo apt update
```
followed by:
```
sudo apt upgrade
```
I found that this process was necessary before I could install sage. 


After this process is complete, run the command:
```
sudo apt install sagemath
```

You should be able to use the `sage` command to enter sage commands into the terminal, but we will set up jupyter notebooks for the purpose of working with sage in VSCode.

First, you should also install a browser such as Firefox with the command:
```
sudo snap install firefox
```

Next, execute the command:
```
jupyter notebook
```
which should open a jupyter notebook in the web browser that you installed earlier. If jupyter was not installed/the command not recognized, try running the command `pip install notebook`, though I found that this had already been included in the prerequsites of installing sagemath. 

At this point, you can program sage and save notebooks on your computer. If you don't want to use VSCode, you can either use these notebooks or manually write and run scripts. 

## Setting up VSCode

It is cumbersome to set up and operate the WSL terminal and editing files. I found that I could not rename files in the linux browser, for instance. So, I figured out how to make VSCode able to run sage notebooks. The instructions [here](https://doc.sagemath.org/html/en/installation/launching.html#using-jupyter-notebook-through-visual-studio-code-vs-code-in-wsl) were almost complete, but I found a major hurtle/subelty, so I suggest following my guide here. 

Open VSCode and install the extension "WSL". Extensions are accessed/installed through the sidebar or through using `Ctrl + Shift + X`. 

Then, use `Ctrl + Shift + P` to open the command palette at the top of the program and search for:
```
WSL: Connect to WSL in New Window
```
When you have done so, the bottom left corner should say `WSL:Ubuntu` or whatever other distribution you set up. 

Next, install the Jupyter extension. Important: I had to install the extension **while in the WSL window** because having already installed it in a normal window does not make installed here, which lead to the `sagemath` kernel not appearing later.  

In VSCode, open a folder where you plan to program in Sage. Then, create a jupyter notebook; it will have the file type `.ipynb`. At the top right of the window, select the button `Select Kernel`, select the option `Jupyter kernel...`, and the select the `SageMath` kernel. (The name of this will have a number for the version. At the time of my writing this, I had `SageMath 9.5` installed.) 

You are essentially done. I would recommend saving your workspace with `File > Save Workspace as...` so that you can easily access the window with the WSL setup in the future. You should also create a shortcut to this workspace file somewhere convenient; you will find the workspace file in the folder you chose which notably will be in the Linux files. You need to look under the `Linux` directory on the sidebar of File Explorer. For me, the file I worked in had directory:
```
\\wsl.localhost\Ubuntu\home\willhoffer\SageMath
```
You can also just pin the folder to Quick Access for convenience, too. 

## Using Sage

You are done! You can create and run sage code through jupyter notebooks now in that workspace. Notebooks execute code in a similar fashion to how Mathematica notebooks work, if you are familiar.

You can also write and load sage files if you have larger blocks of code. To do so, save the sage code as a file such as `myfile.sage`, with the `.sage` extension. Then, in a sagemath-kernel `.ipynb` file, use the code:
```
load("myfile.sage")
```
to run the code. This is helpful for larger amounts of code, for modularizing programs, etc. 

