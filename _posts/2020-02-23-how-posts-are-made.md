---
title: "How Posts are Made"

author: "Will Hoffer"
date: "February 23, 2020"
layout: post
---


<section class="main-content">
<div id="r-markdown" class="section level2">
<h2>R Markdown</h2>
<p>These webpages are created using R Markdown documents. In particular, the version of Markdown used– <a href="https://pandoc.org/">Pandoc</a>– supports <span class="math inline">\(\LaTeX\)</span> quite nicely. The R programming language is supported out of the box, and more functionality can be implemented as needed.</p>
<p>The website for RStudio and its discussion of R markdown may be found <a href="http://rmarkdown.rstudio.com" class="uri">http://rmarkdown.rstudio.com</a>. I highly recommend viewing the instructional tools of <a href="https://citytech-cuny.academia.edu/BoyanKostadinov/Teaching-Documents">Boyan Kostadinov</a> on the topic; I myself learned about R Markdown through his presentation given at UCR on 11/08/2019.</p>
<p>One important tip: files “knit” by RStudio are built with their css formatting included. You may change the theme in the settings, but one must use additional pacakages to support any GitHub Jekyll themes. The following have been employed: <a href="https://github.com/yixuan/prettydoc/">prettydoc</a> adds support for this knitting process, and <a href="https://github.com/privefl/jekyll-now-r-template">prettyjekyll</a> is used to apply tweaks to the formatted document.</p>
</div>
</section>
