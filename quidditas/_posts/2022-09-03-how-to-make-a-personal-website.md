---
title: "How to make a Personal Website"

tags:
- website
---

## Introduction
When you Google your own name, what shows up? 

For me, it's my own personal website! The purpose of this post is to summarize how you too can make your own customizable website using Github pages. 

Github pages is a free way to create and host a website built using Github and Jekyll. It's best for making a website that is highly customizable-- you can easily change the styling, add scripts, and other functionality that far surpasses what is available from template website options. If you do not want to do any coding, you may wish to consider using Wordpress, Google sites, or another free alternative. However, if you are comfortable following tutorials online and/or have familiarity with HTML/CSS/Javascript, Github pages is the way to go. 

## Making a Github Page
Making the initial webpage is pretty quick. You can either create a completely blank website, or copy from a template repo (short for repository). 

#### Website from Scratch
First, make a Github account using the name you want the website. If you pick `YourUsername`, then you will be able to create a free website with the url:
```
YourUsername.github.io
```
You can optionally purchase a domain name if you want a website such as `YourName.com`. If you use Google domains, you it costs about 12 dollars a year.

After making your account, create a repository with the name `YourUsername.github.io`, just as above. The repo must be public for the free website. In it, create a file called `index.md`; this will be your website's homepage. Then go to `Settings > Pages`. When your site is published, it should say "Your site is live at `https://YourUsername.github.io`".

For more details, check out Github's guide/documentation [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). 

#### Copying from a Template Repo
You can alternatively find a template repository and clone your website from it. If you search around for Github pages tutorials or website templates, you can find templates that already have page structures that you wish to use. Make sure you find one which you have permission to copy! For this process, follow the previous steps, but in creating your repo, clone it from the desired template. 

## Next Steps

#### Choosing a Theme
The second thing to do is the pick a theme for your website. First, check out the default templates [here](https://pages.github.com/themes/). If you plan to edit your theme, pick the one which has the best layout (ignoring things that you will change manually, such as background color, font, etc.) If you do not want to make major changes, pick your favorite. If you want to completely build the theming from scratch[^1], or have not idea what to choose, pick the `Minima` theme. 

[^1]: This is recommended primarily because the themes themselves handle casework regarding different browsers and device sizes. You can still change and override any code from the theme itself. 

Once you have chosen a theme, follow the instructions in the theme's readme. This requires editing the file `_config.yml` with the code provided in the readme. 

#### Markdown Syntax
Markdown files are a simplified way to write text using effects such as **bold**, *italic*, or `code`, as well as to create headings. I recommend reviewing a guide such as [this page](https://www.markdownguide.org/basic-syntax) to see how to use the syntax. 

Note that you can include HTML code in markdown pages too, as well as comments using `<!-- -->` syntax. 
<!-- If you're readying the source code, comments look like this! -->

#### Create your Website
After this, the world is your oyster: make a blog, upload your resume/CV, customize your website, and so forth! There are many tutorials out there for editting your website, whether or not you have expertise in web development. 

I have a few tutorials available, particularly focused about how to write math content on your website. Check out [Quidditas](https://willhoffer.com/quidditas/), and look for the posts under the tag `website`. For instance, I recommend checking out the posts:

- [How to Create a Markdown Post](https://willhoffer.com/2021-11-28/how-to-make-a-post-with-markdown/)
- [Converting Latex to Markdown](https://willhoffer.com/2020-03-01/converting-latex-into-markdown/)

These show you how to configure $\LaTeX$ rendering in a markdown files, and how you can convert `.tex` files into text that you can copy into a `.md` file to put on your website. 

#### Develop your Website Locally
When you make changes to your website, it takes time to update (usually a minute or two.) However, if you download your website repo and set up Jekyll on your computer, you can build and edit your website offline, with no waiting time! I have a tutorial for this [here](https://willhoffer.com/2022-09-03/how-to-make-a-personal-website/).

## Footnotes





