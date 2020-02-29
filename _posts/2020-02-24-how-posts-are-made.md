---
title: "How Posts Are Made"

author: "Will Hoffer"
date: "February 24, 2020"
layout: post
---


<section class="main-content">
<div id="overview" class="section level2">
<h2>Overview</h2>
<p>Posts are created as R Markdown documents and then appropriately converted into standard markdown files to be formatted and displayed on the internet. I use RStudio to create these files, which has built in support for Git. <a href="https://citytech-cuny.academia.edu/BoyanKostadinov/Teaching-Documents">Boyan Kostadinov</a> originally brought using R Markdown documents to my attention at a presentation given at UCR on November 8, 2019. I highly recommend viewing the instructional information on the provided link for a beginning introduction.</p>
<p>R Markdown is superior to a standard markdown document due to supporting much more functionality. <a href="https://pandoc.org/">Pandoc</a>, its version of markdown, supports standard <span class="math inline">\(\LaTeX\)</span> and the header can be made to include custom content. As the name would suggest, the R programming language is supported out of the box; Python may also be implemented if so desired. The website for RStudio and its discussion of R markdown may be found <a href="http://rmarkdown.rstudio.com" class="uri">http://rmarkdown.rstudio.com</a>.</p>
</div>
<div id="how-to-create-a-new-post" class="section level2">
<h2>How to Create a New Post</h2>
<p>In order to make R Markdown files work with Jekyll (the Ruby engine behind much of the website formatting,) some auxillary packages are needed. RStudio can knits Rmd files into various formats, but it does not build html files in the same format as Jekyll would; this leads to a lack of proper formatting. Firstly, the package <a href="https://github.com/yixuan/prettydoc/">prettydoc</a> enables much of the thematic styling from standard Jekyll themes. In lieu of the standard knitting process, as second package <a href="https://github.com/privefl/jekyll-now-r-template">prettyjekyll</a> gives the following command:</p>
<pre><code>prettyjekyll.FormatPost(choose.dir())</code></pre>
<p>Which acts as a replacement for the knitting process to create a standard .md file in the appropriate directory. The .Rmd files are stored in the _knitr directory.</p>
<p>Some tips:</p>
<ul>
<li><p>MathJax is needed to properly display <span class="math inline">\(\LaTeX\)</span>, so be sure the default layout includes an appropriate script.</p></li>
<li><p>The website may be locally viewed using Jekyll commands. The ReadMe file on the GitHub repository contains more info on how to do so.</p></li>
</ul>
</div>
</section>
