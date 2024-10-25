---
title: "Converting Latex into Markdown"

author: "Will Hoffer"
date: "March 1, 2020"
layout: post
tags:
- website
- typesetting
- tutorial
---

<script src="{{ site.url }}{{ site.baseurl }}/knitr_files/2020-03-01-drafting-in-latex_files/header-attrs-2.1/header-attrs.js"></script>

<section class="main-content">
<div id="overview" class="section level2">
<h2>Overview</h2>
<p>In the <a href="https://willhoffer.com/2020/02/how-posts-are-made">previous tutorial</a>, I covered how to make a post to the website under the current build. However, RStudio is not the optimal place to write a <code>.tex</code> file; naturally, Latex power-users will have their preferred setup for writing and compiling these <code>.tex</code> files into <code>.pdf</code>’s. Out of the box, writing in RStudio supports standard Latex along with the ability to specify other packages. However, I have a custom <code>.sty</code> package of frequently used commands and shortcuts. Writing longer posts or converting previously made <code>.tex</code> files requires a new step.</p>
<p>In this post, I propose two solutions to augment the post drafting process. Firstly, one can directly convert a <code>.tex</code> file into a <code>.md</code> file, and then adjust the markdown. The alternative solution is to define commands in the post itself or in an included file. The first solution is the more preferable of the two, but the latter will work well enough in simpler situations and requires less work.</p>
<hr />
</div>
<div id="writing-in-latex-and-converting-with-pandoc" class="section level2">
<h2>Writing in Latex and Converting with Pandoc</h2>
<p>This method is my preferred solution for writing longer posts that rely heavily on Latex commands. As a side benefit, any previously made <code>.tex</code> files can be adapted into posts with only a line or two of extra code.</p>
<div id="conversion-with-pandoc" class="section level3">
<h3>Conversion with Pandoc</h3>
<p>Pandoc is named for its ability to convert between many different file formats. In particular, we may convert a <code>.tex</code> file into a <code>.md</code> file. Once created, the markdown file can be tweaked into a <code>.Rmd</code> file fitting the necessary format for posts. One must install Pandoc and be able to run its commands through the usual OS terminal. <a href="https://pandoc.org/getting-started.html">Here</a> you will find a write up on Pandoc’s website about how to do so. The important command to convert the file <code>example.tex</code> into a markdown file <code>example.md</code> is given by:</p>
<pre><code>pandoc example.tex -s -o example.md</code></pre>
<p>Note that one must first navigate to the appropriate directory. To rerun the command easily, simply use the up arrow to cycle through previous commands. The name of the first file should be exactly what you wish to convert, and the second file name is what will be created.</p>
</div>
<div id="implementing-custom-commands" class="section level3">
<h3>Implementing Custom Commands</h3>
<p>Note that Pandoc is not able to recognize a custom <code>.sty</code> package implemented through <code>\usepackage{}</code>. However, it will read any latex code which is added through the <code>\include{}</code> command. Thus, by sepcifying the file location of a custom style file, say <code>commands.sty</code>, one can have all of these added into a file and used by the Pandoc conversion process. For example consider the following:</p>
<pre><code>$\include{commands.sty}$</code></pre>
<p>This command will add in the text of the file <code>commands.sty</code> which is located in the same directory as the <code>.tex</code> file.</p>
<p>There are some limitations to this process to be aware of. Be mindful not to twice-define a command via a regular setup and the included file; one possibility to prevent double-definition conflicts is by using <code>\providecommand{}[]{}</code> instead of <code>\newcommand{}[]{}</code>.</p>
<p>Also, the Latex as it appears in the markdown document is not parsed in exactly the same way. Consequently, some syntax which works in Latex may not work in the markdown file as read by MathJax. For instance, I had defined a custom command with an optional input that would be considered empty by default:</p>
<pre><code>\providecommand{\to}[1][]{\underset{#1}{\rightarrow}}</code></pre>
<p>However, this would not render correctly in markdown when I used the command without an input (though in Latex such a command is processed properly.) The error disappeared when the default for no input contained text and when the optional argument was removed entirely. Thus, some syntax may need to be adjusted slightly if it does not display properly.</p>
<p>The takeaway is to always check the knitted file to see if the content is rendering properly. Any commands that are seen as undefined will show up emphasized in red; these should be included in the <code>.sty</code> commands.</p>
<hr />
</div>
</div>
<div id="including-commands-in-the-markdown-file" class="section level2">
<h2>Including Commands in the Markdown File</h2>
<p>I have not fully explored this solution, but in theory it can be implemented and refined. MathJax supports defining commands, so one can in practice define all of the necessary shortcuts in each file. For example, the following code can be used to make a shortcut. I provide the exact code and a block quote that contains how it will render.</p>
<pre><code>$\newcommand{\exampleFormula}{\sum_{n=1}^\infty\frac{1}{n}=\infty}$

$$\exampleFormula$$</code></pre>
<blockquote>
<p><span class="math inline">\(\newcommand{\exampleFormula}{\sum_{n=1}^\infty\frac{1}{n}=\infty}\)</span></p>
<p><span class="math display">\[\exampleFormula\]</span></p>
</blockquote>
<p>In this way, then, one may write any number of custom commands. One could collect common shortcuts into a separate file and include them automatically in each post in the same way that headers, footers, etc. are generated. However, this process has drawbacks. While MathJax renders, the commands may flash breifly on the page in my limited testing. It also requires more tinkering to automatically include such text in every post file from a single source.</p>
<p>I believe this approach will work, but the alternative is to use the standard Latex workflow and then augment it with any markdown content after the bulk of the post is written. The latter produces a <code>.pdf</code> as normal composing in Latex, output with the formatting of any desired class file or template. Further, the generated markdown document will be stand-alone, as it contains no reference to any custom commands. (Namely, the <code>.sty</code> commands package is no longer necessary after the conversion process.)</p>
</div>
</section>
