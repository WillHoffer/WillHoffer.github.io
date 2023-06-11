---
title: "How to Make a Post with R Markdown"

author: "Will Hoffer"
date: "February 29, 2020"
layout: post
tags: 
- website
- tutorial
---

<script src="{{ site.url }}{{ site.baseurl }}/knitr_files/2020-02-23-how-posts-are-made_files/header-attrs-2.1/header-attrs.js"></script>

<section class="main-content">
<div id="overview" class="section level2">
<h2>Overview</h2>
<p>This website uses R Markdown documents created in RStudio and ultimately sent to the internet. This workflow requires some additional setup, but in the current build of the website files may be built and previewed locally, then pushed to the GitHub repository which hosts the site.</p>
<p>There are several dependencies to this process. The website is created and hosted via <a href="https://pages.github.com/">GitHub Pages</a> and as such is built using <a href="https://jekyllrb.com/">Jekyll</a>. The support for R Markdown is done using <a href="https://rstudio.com/">RStudio</a>, and formatting corrections are done using the additional resources of <a href="https://github.com/yixuan/prettydoc/">prettydoc</a> to add styling to the knitting process and the related project <a href="https://github.com/privefl/jekyll-now-r-template">prettyjekyll</a> to properly build the pages for the website.</p>
</div>
<div id="from-creation-to-publication" class="section level2">
<h2>From Creation to Publication</h2>
<div id="creating-formatting-the-file" class="section level3">
<h3>Creating &amp; formatting the file</h3>
<p>Individual posts are created as R Markdown files. If desired, a draft of the page’s contents may first be made in the _drafts directory. Its contents will not show up on the website (publically or in the local preview,) but it may be knitted in the usual fashion of R Studio to be previewed. Note that its formats will not be perfect, but the formatting will be fixed later. Then, the file should be moved or copied to the <code>_knitr</code> directory.</p>
<p>Once the file is ready to be previewed locally, run the following command in the RStudio console:</p>
<pre><code>prettyjekyll.FormatPost(choose.files())</code></pre>
<p>This command will correctly format the post and create a file markdown under the <code>_posts</code> directory. Note that this command essentially acts as a replacement for the knitting process. Note also that <code>choose.files()</code> may be replaced with the file directory; this command simply opens up a UI to select the file from the computer.</p>
<p>Note that as currently configured, these posts will show up on the blog by default. They may of course be moved if they are desired to be elsewhere on the site, but the navigation bar does not update automatically so it should be manually changed. One of the features of the website as currently built is that it uses <a href="https://shopify.github.io/liquid/">Liquid</a> to implement some programmatic options in <code>.html</code> or markdown documents. (Liquid code is how posts are automatically listed.)</p>
</div>
<div id="previewing-locally-publishing" class="section level3">
<h3>Previewing locally &amp; publishing</h3>
<p>The site may be emulated using a Ruby command in the OS’ standard command line directory. First, navigate to the local directory of the GitHub project using the <code>cd</code> command; by default when downloading from a GitHub repository, this will go to one’s documents folder. Then run the following command:</p>
<pre><code>bundle exec jekyll serve </code></pre>
<p>Doing so will run a local version of the website for preview that by default may be found on <a href="http://127.0.0.1:4000/" class="uri">http://127.0.0.1:4000/</a>. This preview is updated live with changes, so there will show up as soon as the post is formatted (even if changes have not yet been comitted.)</p>
<p>Once the post appears correctly, commit all changes. Through git– either in the RStudio UI or another git program– be sure to pull, check for any conflicts, and then push the changes to the GitHub repository. Changes will go live when they are commited to the master branch.</p>
</div>
</div>
<div id="additional-comments" class="section level2">
<h2>Additional Comments</h2>
<div id="rstudio" class="section level3">
<h3>RStudio</h3>
<p>I first learned of RStudio from a presentation given by <a href="https://citytech-cuny.academia.edu/BoyanKostadinov/Teaching-Documents">Boyan Kostadinov</a> at UCR on November 8, 2019. I have attached a link to a page with some of his publications; in particular, I recommend looking at the document “Creating Dynamic Mathematical Documents in RStudio by Unifying Computing with R and Typesetting with LaTeX” to learn more about RStudio.</p>
<p>RStudio itself runs a version of markdown called <a href="https://pandoc.org/">Pandoc</a>, which among other things has great support for <span class="math inline">\(\LaTeX\)</span>. Additionally, out of the box R Markdown documents can include content programmed with the R programming language. Other languages, such as Python, can also be implemented if so desired.</p>
<p>The website for RStudio and its discussion of R markdown may be found <a href="http://rmarkdown.rstudio.com" class="uri">http://rmarkdown.rstudio.com</a>.</p>
</div>
<div id="other-tips" class="section level3">
<h3>Other tips</h3>
<p>MathJax is needed to properly display <span class="math inline">\(\LaTeX\)</span>, so be sure the default post layout includes an appropriate script.</p>
</div>
</div>
</section>
