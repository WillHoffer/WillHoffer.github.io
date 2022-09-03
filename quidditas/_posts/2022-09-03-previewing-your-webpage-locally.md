---
title: "Previewing Your Webpage Locally"

tags:
- website
---

## Setup

Whenever you are altering your Github sites webpage, it is extremely useful to be able to preview the changes before you publish them. Also, there is a significant delay before changes to the repository are updated. The solution to these quandaries is to use Jekyll on your computer to locally build and host the webpage. 

<a href="https://jekyllrb.com/docs/"><img src="https://jekyllrb.com/img/logo-2x.png" alt="Jekyll logo" class="centered"></a>

In order to do so, you will need to download Ruby and then to setup Jekyll. A quickstart guide is available [here](https://jekyllrb.com/docs/) on Jekyll's website. Note, however, that the website is already created by Github pages, so you may skip step three in their instructions and instead navigate to a local download of your Github repo. 

## Launching the Local Website

In a terminal in the directory of your local download of the repo, use the command: 
```
bundle exec jekyll serve
```
to make your website available at [http://localhost:4000](http://localhost:4000). 

<br>

In order to update the gems (Ruby program packages) you can use the command:
```
bundle update
```
Every now and then, you may receive a notice that one of the gems has an important update. By running this command, the gems will be updated and you can commit and push the new `gemfile.lock` to ensure the most recent version of the gems are being used. 