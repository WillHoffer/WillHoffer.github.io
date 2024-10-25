---
title: "Related Rates"

author: "Will Hoffer"
date: "March 11, 2020"
layout: post
tags:
- calculus
---

<script src="{{ site.url }}{{ site.baseurl }}/knitr_files/2020-03-11-Related-Rates_files/header-attrs-2.1/header-attrs.js"></script>

<section class="main-content">
<div id="overview" class="section level2">
<h2>Overview</h2>
<p>The idea behind related rates problems is that given an equation with two variables, we also can find an equation that involves their two derivatives. Hence, their rates are related to each other.</p>
<div id="a-simple-example-circumference-radius" class="section level3">
<h3>A Simple Example: Circumference &amp; Radius</h3>
<p>Let’s disect a very simple example to create a recipie to solve these problems.</p>
<center>
<img src="{{ site.url }}{{ site.baseurl }}/knitr_files/2020-03-11-Related-Rates_files/figure-html/unnamed-chunk-1-1.png" /><!-- -->
</center>
<p>We have the following equation: <span class="math display">\[ C=2\pi r\]</span> Where <span class="math inline">\(r\)</span> is the radius and <span class="math inline">\(C\)</span> the circumference. For rates involving time, we will take a time derivative on both sides. (This step is implicit differentiation, but now we have two functions of time, <span class="math inline">\(C(t)\)</span> and <span class="math inline">\(r(t)\)</span>.) <span class="math display">\[
\begin{aligned}
\frac{d}{dt}C &amp;= \frac{d}{dt}(2\pi r)\\
\frac{dC}{dt} &amp;= 2\pi\frac{dr}{dt}
\end{aligned}
\]</span> We now have an equation that involves their two rates.</p>
<p>The problem will give us information about one of the rates, and we use the two equations (the starting one, and the one we obtained through implicit differentiation) to solve it.</p>
<blockquote>
<p><strong>E.G:</strong> Suppose a rock is dropped into a pond, creating a ripple with circumference <span class="math inline">\(4cm\)</span>. If the edge of the ripple moves at a speed of <span class="math inline">\(3cm/s\)</span> away from where the rock hit the water, then how fast is the circumference of the first ripple growing?</p>
</blockquote>
<details>
<summary> Solution</summary> We are asked to find the rate of growth of the circumference– i.e. <span class="math inline">\(\frac{dC}{dt}\)</span>. We are given two quantities: <span class="math inline">\(C_0=4cm\)</span> and <span class="math inline">\(\frac{dr}{dt}=3cm/s\)</span>. As we saw above: <span class="math display">\[
\frac{dC}{dt}=2\pi\frac{dr}{dt}
\]</span> In this case, we don’t actually need the value of <span class="math inline">\(C_0\)</span>. Instead, we need only plug in <span class="math inline">\(3cm/s\)</span> to the equation and find that <span class="math inline">\(\frac{dC}{dt}=6\pi\, cm/s\approx 18.85\,cm/s\)</span>.
</details>
<div id="step-by-step" class="section level4">
<h4>Step-by-Step</h4>
<ol style="list-style-type: decimal">
<li>Write the main equation relating quantities.</li>
<li>Implicitly differentiate the equation, usually with respect to time, <span class="math inline">\(\frac{d}{dt}\)</span>.</li>
<li>Solve the equation for the rate needed in the problem.</li>
<li>Plug in the values given. These will include the given rate, as well as possibly values of the quantities themselves if they show up from the chain rule.</li>
</ol>
</div>
</div>
<div id="a-classic-example-the-falling-ladder-problem" class="section level3">
<h3>A Classic Example: The Falling Ladder Problem</h3>
<p>This problem is a very common one.</p>
<blockquote>
<p><strong>E.G:</strong> Suppose a ladder of length <span class="math inline">\(8m\)</span> leans against a wall at an angle of <span class="math inline">\(60^\circ\)</span>. If the top of the ladder, touching the wall, falls at a constant speed of <span class="math inline">\(2m/s\)</span>, how fast does the bottom of the ladder slide along the ground when the top of the ladder is four meters above the ground? (You may use the fact that when this happens, <span class="math inline">\(\frac{d\theta}{dt}=-\frac{3}{4}\)</span>.)</p>
</blockquote>
<details>
<summary>Solution</summary> I have a scanned copy of a written solution which includes pictures. You may view or download the file <a href="https://willhoffer.com/uploads/media/default/related_rates_ladder_problem.pdf">here</a>.
</details>
</div>
</div>
</section>
