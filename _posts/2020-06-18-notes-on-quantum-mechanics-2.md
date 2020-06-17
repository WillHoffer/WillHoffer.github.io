---
title: "Notes on Quantum Mechanics II"

author: "Will Hoffer"
date: "June 18, 2020"
layout: post
---

<script src="{{ site.url }}{{ site.baseurl }}/knitr_files/2020-02-29-quantum-mechanics_files/header-attrs-2.1/header-attrs.js"></script>
<script src="../_drafts/{{ site.url }}{{ site.baseurl }}/knitr_files/2020-02-29-quantum-mechanics_files/header-attrs-2.1/header-attrs.js"></script>

<section class="main-content">
<script src="../_drafts/{{ site.url }}{{ site.baseurl }}/knitr_files/2020-02-29-quantum-mechanics_files/header-attrs-2.1/header-attrs.js"></script>
<div id="introduction" class="section level1">
<h1>Introduction</h1>
<div id="preface" class="section level3 unnumbered">
<h3 class="unnumbered">Preface</h3>
<p>The following are course notes from Math 242 - Mathematics of Quantum Mechanics, taught by Dr. Lapidus at University of California, Riverside during the Winter 2019 quarter. The course did not have a dedicated textbook, though the book <em>An Introduction to Quantum Theory</em> by Keith Hannabuss was recommended as a supplemental textbook.</p>
<p>The course began by developing classical mechanics through the Hamiltonian formulation, which then provides the essential framework to formulate the Heisenberg picture of quantum mechanics.</p>
</div>
<div id="work-in-progress" class="section level3">
<h3>Work in Progress</h3>
<p>Note that these notes are a currently a work in progress. If you would like to see photographic copies of my notes from the course, they are available via <a href="https://drive.google.com/a/ucr.edu/file/d/1BeuZUcFhi0ZFFucY6-AuIPmEnJ_Jmnjk/view?usp=drivesdk">Google drive</a>.</p>
</div>
</div>
<div id="classical-states" class="section level3">
<h3>Classical States</h3>
<div id="measuring-a-state" class="section level4">
<h4>Measuring a State</h4>
</div>
<div id="pure-and-mixed-states" class="section level4">
<h4>Pure and Mixed States</h4>
</div>
<div id="convexity-of-states" class="section level4">
<h4>Convexity of States</h4>
</div>
<div id="axiomatic-state" class="section level4">
<h4>Axiomatic State</h4>
</div>
</div>
<div id="classical-dynamics" class="section level3">
<h3>Classical Dynamics</h3>
<div id="liouvilles-theorem" class="section level4">
<h4>Liouville’s Theorem</h4>
</div>
<div id="hamiltonian-vs.-liouville-mechanics" class="section level4">
<h4>Hamiltonian vs. Liouville Mechanics</h4>
</div>
</div>
</div>
<div id="quantum-mechanics" class="section level1">
<h1>Quantum Mechanics</h1>
<div id="the-two-slit-experiment" class="section level3">
<h3>The Two-Slit Experiment</h3>
<div id="feynmans-interpretation" class="section level4">
<h4>Feynman’s Interpretation</h4>
</div>
</div>
<div id="quantum-observables" class="section level3">
<h3>Quantum Observables</h3>
<div id="the-algebra-of-quantum-observables" class="section level4">
<h4>The Algebra of Quantum Observables</h4>
</div>
<div id="the-quantum-poisson-bracket" class="section level4">
<h4>The Quantum Poisson Bracket</h4>
</div>
</div>
<div id="quantum-states" class="section level3">
<h3>Quantum States</h3>
<div id="states" class="section level4">
<h4>States</h4>
</div>
<div id="density-matrices" class="section level4">
<h4>Density Matrices</h4>
</div>
<div id="correspondence" class="section level4">
<h4>Correspondence</h4>
</div>
<div id="pure-and-mixed-states-1" class="section level4">
<h4>Pure and Mixed States</h4>
</div>
</div>
<div id="quantum-statistics" class="section level3">
<h3>Quantum Statistics</h3>
<div id="meanexpected-values" class="section level4">
<h4>Mean/Expected Values</h4>
</div>
<div id="variance-inequalities" class="section level4">
<h4>Variance Inequalities</h4>
</div>
<div id="heisenberg-uncertainty-principle" class="section level4">
<h4>Heisenberg Uncertainty Principle</h4>
</div>
</div>
<div id="quantum-dynamics" class="section level3">
<h3>Quantum Dynamics</h3>
<div id="heisenberg-vs.-schrodinger-pictures" class="section level4">
<h4>Heisenberg vs. Schrodinger Pictures</h4>
</div>
<div id="stationary-states" class="section level4">
<h4>Stationary States</h4>
</div>
</div>
<div id="spectral-calculus" class="section level3">
<h3>Spectral Calculus</h3>
<div id="spectra-and-eigenstates" class="section level4">
<h4>Spectra and Eigenstates</h4>
</div>
<div id="unbounded-operators" class="section level4">
<h4>Unbounded Operators</h4>
</div>
<div id="functional-calculus" class="section level4">
<h4>Functional Calculus</h4>
</div>
<div id="projection-valued-measure" class="section level4">
<h4>Projection Valued Measure</h4>
</div>
</div>
<div id="real-systems" class="section level3">
<h3>Real Systems</h3>
<div id="position-and-momentum" class="section level4">
<h4>Position and Momentum</h4>
</div>
<div id="canonical-commutation-relations" class="section level4">
<h4>Canonical Commutation Relations</h4>
</div>
<div id="multiplication-and-the-fourier-transform" class="section level4">
<h4>Multiplication and the Fourier Transform</h4>
<table>
<thead>
<tr class="header">
<th align="left">Dictionary</th>
<th align="left">Classical/Statistical</th>
<th align="left">Quantum</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Observable</td>
<td align="left">Function on phase space</td>
<td align="left">Self-adjoint operator on a Hilbert space</td>
</tr>
<tr class="even">
<td align="left">State</td>
<td align="left">Element of phase space</td>
<td align="left">Linear functional on the Hilbert space</td>
</tr>
</tbody>
</table>
<p>Quantum analog of Poisson bracket, Heisenberg formulation of quantum mechanics (p. 4-5)</p>
</div>
</div>
</div>
<div id="references" class="section level1">
<h1>References</h1>
<ul>
<li><p>Richard Feynman, "Space-Time Approach to Non-Relativistic Quantum Mechanics." Reviews of Modern Physics, Vol. 20, No. 2, April 1948.</p></li>
<li><p>Gerald Johnson and Michel Lapidus, <em>The Feynman Integral and Feynman’s Operational Calculus</em>, Chapter 7. Oxford University Press, 2000.</p></li>
</ul>
</div>
<div class="footnotes">
<hr />
<ol>
<li id="fn1"><p>We denote <span class="math inline">\(p^2:=p\cdot p\)</span>.<a href="#fnref1" class="footnote-back">↩︎</a></p></li>
<li id="fn2"><p>These partial derivatives denote gradients, e.g. <span class="math inline">\(\frac{\partial H}{\partial p}=\left(\frac{\partial H}{\partial p_1},\frac{\partial H}{\partial p_2},\frac{\partial H}{\partial p_3}\right)\)</span>.<a href="#fnref2" class="footnote-back">↩︎</a></p></li>
</ol>
</div>
</section>
