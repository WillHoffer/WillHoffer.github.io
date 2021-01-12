---
title: "Classical Observables and the Hamiltonian"

author: "Will Hoffer"
date: "June 17, 2020"
layout: post
tags:
- mathphys
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
<div id="classical-mechanics" class="section level1">
<h1>Classical Mechanics</h1>
<div id="classical-observables" class="section level3">
<h3>Classical Observables</h3>
<div id="the-hamiltonian" class="section level4">
<h4>The Hamiltonian</h4>
<p>Consider a particle of mass <span class="math inline">\(m\)</span> in a conservative force field <span class="math inline">\(F=-\nabla V\)</span> in ambient space <span class="math inline">\(\mathbb{R}^3\)</span>. Let <span class="math inline">\(q\)</span> denote its position and <span class="math inline">\(p\)</span> its momentum. The Hamiltonian <span class="math inline">\(H\)</span> is the sum of kinetic and potential energy. For this single particle, <span class="math inline">\(H\)</span> is of the form:<a href="#fn1" class="footnote-ref" id="fnref1"><sup>1</sup></a> <span class="math display">\[H = \frac{p^2}{2m}+V(q)\]</span> For a conservative system, where energy is conserved, the Hamiltonian formulation of classical mechanics yields the following equations of motion:<a href="#fn2" class="footnote-ref" id="fnref2"><sup>2</sup></a> <span class="math display">\[\begin{aligned}
\frac{\partial H}{\partial p} &amp;= \frac{dq}{dt} \\
\frac{\partial H}{\partial q} &amp;= -\frac{dp}{dt}\end{aligned}\]</span> Note that the first term is exactly the velocity of the particle <span class="math inline">\(\frac{p}{m}\)</span>, and the second the force <span class="math inline">\(F\)</span>. We may recast these equations as a vector field equation: <span class="math display">\[\begin{aligned}
\frac{d}{dt}\begin{pmatrix}
q\\ p
\end{pmatrix} = 
\begin{pmatrix}
\frac{\partial H}{\partial p} \\ -\frac{\partial H}{\partial q}
\end{pmatrix}\end{aligned}\]</span> Therefore, the Hamiltonian equations of motion describe the time derivative of a point <span class="math inline">\((q,p)\)</span> in <em>phase space</em>. For an <span class="math inline">\(n\)</span> dimensional setting, phase space is simply <span class="math inline">\(\mathbb{R}^{2n}\)</span>. More generally, when the configuration space is a manifold <span class="math inline">\(M\)</span> instead of <span class="math inline">\(\mathbb{R}^n\)</span>, phase space is the contangent bundle <span class="math inline">\(T^*M\)</span>. The Hamiltonian, then, is a map from phase space into <span class="math inline">\(\mathbb{R}\)</span>.</p>
<p>We suppose the physical system under consideration has the following Hamiltonian: <span class="math display">\[H = \sum_{j=1}^{k}\frac{p_j^2}{2m_j} + \sum_{j=1}^{k} V(q_j) + \sum_{1\leq i&lt; j\leq n}^{} V_{ij}(q_i-q_j)\]</span> The new term <span class="math inline">\(V_{ij}\)</span> is the symmetric interaction potential between the indicated particles. For this system, there are <span class="math inline">\(kn\)</span> degrees of freedom, and therefore phase space is given by <span class="math inline">\(\mathbb{R}^{2kn}\)</span>.</p>
</div>
<div id="the-algebra-of-classical-observables" class="section level4">
<h4>The Algebra of Classical Observables</h4>
<p>The Hamiltonian is the first and foremost example of a physical observable. Other classical observables are defined in the same fashion: they are functions from phase space into <span class="math inline">\(\mathbb{R}\)</span>. We shall hereforth assume that all classical observables (inculding the Hamiltonian) are smooth. Therefore, we define the algebra of classical observables:</p>
<p>If we denote by <span class="math inline">\(M\)</span> the phase space under consideration, then we define the classical observables to be: <span class="math display">\[\mathscr{A}_{cl}= C^\infty(M)\]</span> Such smooth functions form an algebra.</p>
<p>More generally, one may define the algebra differently; for instance, one may take classical observables to be differentiable or perhaps measurable functions on phase space.</p>
</div>
<div id="time-evolution" class="section level4">
<h4>Time Evolution</h4>
<p>We consider the following Cauchy problem: <span class="math display">\[\left\{\begin{aligned} 
\left(\frac{dq}{dt},\frac{dp}{dt}\right) &amp;= \left(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\right) \\
(q,p)\Big\vert_{t=0}&amp;=(q_0,p_0)
 \end{aligned} \right.\]</span> We shall assume the problem is well-posed and in particular that there is a unique global solution. Let us denote <span class="math inline">\(\mu=(q,p)\)</span> for a point in phase space <span class="math inline">\(\mathscr{M}=\mathbb{R}^{2n}\)</span>. We denote by <span class="math inline">\(\mu(t)\)</span> to be the corresponding point in phase space at a later time <span class="math inline">\(t\)</span> for this time evolution, subject to the initial condition that <span class="math inline">\(\mu_0=\mu(0)\)</span>.</p>
<p>Hamilton’s equations of motions generate a one-parameter group of automorphisms <span class="math inline">\(\left\{ G_t \right\}_{t\in\mathbb{R}}\)</span> on <span class="math inline">\(\mathscr{M}\)</span> with the operation of composition, <span class="math inline">\(G_{t+s}=G_t\circ G_s\)</span>. These automorphism, in turn, generate a family <span class="math inline">\(\left\{ U_t \right\}_{t\in\mathbb{R}}\)</span> of transformations of <span class="math inline">\(\mathscr{A}_{cl}\)</span>. Namely, for <span class="math inline">\(f\in C^\infty(\mathscr{M})\)</span> and <span class="math inline">\(\mu\in\mathscr{M}\)</span>, <span class="math display">\[(U_tf)(\mu) = f(G_t\mu) =: f_t(\mu)\]</span> Here we define <span class="math inline">\(f_t := f\circ G_t\)</span>.</p>
<p>We can in fact find a very nice description of time evolution of observables with this formalism.</p>
<p>First, we start with <span class="math inline">\(G_t:\mathscr{M}{\rightarrow}\mathscr{M}\)</span>, given by <span class="math inline">\(\mu{\rightarrow}G_t\mu\)</span>, the group of transformations. Note that this family satisfies <span class="math inline">\(G_{s+t}=G_s\circ G_t\)</span>; in general the indices behave as would an additive group. We defined <span class="math inline">\(U_t\)</span> to be the operator that precomposes <span class="math inline">\(f\)</span> with the map <span class="math inline">\(G_t\)</span> and denoted by <span class="math inline">\(f_t\)</span> the image of <span class="math inline">\(f\)</span> under this map. In summary: <span class="math display">\[f_t= U_t f = f\circ G_t\]</span> Let <span class="math inline">\(\mu_0=\mu(0)\in\mathscr{M}\)</span>, and write <span class="math inline">\(\mu(t)=G_t(\mu)\)</span>. Let us compute <span class="math inline">\(\frac{df_t}{dt}\)</span> in the following fashion: <span class="math display">\[\begin{aligned}
\frac{\partial }{\partial s} f_{s+t}(\mu_0)     &amp;= \frac{\partial }{\partial s}\left( f_t \circ G_s \right)(\mu_0) \\
                    &amp;= \frac{\partial }{\partial s} f_t(\mu(s)) \\
                    &amp;= \sum_{i=1}^{2n} \left(\frac{\partial }{\partial x_i} f_t(\mu(s))\right) \frac{d}{ds}\mu(s) \\
                    &amp;= \nabla f_t(\mu(s))\cdot \left(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\right)\\
                    &amp;= \nabla f_{t+s}(\mu_0)\cdot \left(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\right)\end{aligned}\]</span> We now evaluate the above expression at <span class="math inline">\(s=0\)</span>. For simplicity of notation, let us now suppress dependence on <span class="math inline">\(\mu(0)\)</span>. <span class="math display">\[\begin{aligned}
\frac{\partial }{\partial s} f_{s+t}\Big\vert_{s=0} &amp;= \nabla f_t\cdot \left(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\right) \\
    &amp;= \sum_{i=1}^{n} \frac{\partial f_t}{\partial q_i}  \frac{\partial H}{\partial p_i} - \sum_{i=1}^{n} \frac{\partial f_t}{\partial p_i} \frac{\partial H}{\partial q_i} \\
    &amp;= \frac{\partial f_t}{\partial q}  \frac{\partial H}{\partial p} - \frac{\partial f_t}{\partial p} \frac{\partial H}{\partial q} \\
    &amp;=: \left\{ H,f_t \right\}\end{aligned}\]</span> In the final line, we define a new very important operation: <span class="math inline">\(\left\{ \cdot,\cdot \right\}\)</span>, the <em>classical Poisson bracket</em>.</p>
<p>Thus we have shown that the time derivative of an observable is given by the Poisson bracket with the Hamiltonian <span class="math inline">\(H\)</span>. We state our result as a theorem:</p>
<p>Let Hamilton’s equations of motions be satisfied for points <span class="math inline">\((p,q)\in\mathscr{M}\)</span>. <span class="math display">\[\frac{d}{dt}(q,p) = \left(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\right)\]</span> For each observable <span class="math inline">\(f\in\mathscr{A}_{cl}\)</span>, let <span class="math inline">\(f_t=f\circ G_t\)</span> be the observable which measures <span class="math inline">\(f\)</span> at a later time <span class="math inline">\(t\)</span>. Then <span class="math inline">\(f_t\)</span> will be the solution to the following Cauchy problem: <span class="math display">\[\left\{\begin{aligned}  
    \frac{df_t}{dt} &amp;= \left\{ H,f_t \right\} = \frac{\partial H}{\partial p} \frac{\partial f_t}{\partial q} - \frac{\partial H}{\partial q} \frac{\partial f_t}{\partial p} \\ 
    f_t\Big\vert_{t=0} &amp;= f 
     \end{aligned} \right.\]</span></p>
</div>
<div id="the-classical-poisson-bracket" class="section level4">
<h4>The Classical Poisson Bracket</h4>
<p>We begin by generically defining the classical Poisson bracket from the previous section.</p>
<p>We define a mapping <span class="math inline">\(\mathscr{A}_{cl}\times\mathscr{A}_{cl}{\rightarrow}\mathscr{A}_{cl}\)</span> as follows, letting <span class="math inline">\(f,g\in\mathscr{A}_{cl}\)</span>: <span class="math display">\[\left\{ f,g \right\} := \frac{\partial f}{\partial q}  \frac{\partial g}{\partial p} - \frac{\partial f}{\partial p} \frac{\partial g}{\partial q}\]</span></p>
<p>We proceed to state and prove some properties of this bracket. Throughout this section, let <span class="math inline">\(f,g,h\in \mathscr{A}_{cl}\)</span> and <span class="math inline">\(\alpha\in \mathbb{R}\)</span>.</p>
<div id="skew-symmetry" class="section level5 unnumbered">
<h5 class="unnumbered">Skew-Symmetry</h5>
<p>The Poisson bracket is skew-symmetric. <span class="math display">\[\begin{aligned}
\{f,g\} &amp;= \frac{\partial f}{\partial q}  \frac{\partial g}{\partial p} - \frac{\partial f}{\partial p} \frac{\partial g}{\partial q} \\ 
        &amp;= -\left(\frac{\partial f}{\partial q}\frac{\partial g}{\partial p}-\frac{\partial f}{\partial p}\frac{\partial g}{\partial q}\right)\\ 
        &amp;= -\left(\frac{\partial g}{\partial p}\frac{\partial f}{\partial q}-\frac{\partial g}{\partial q}\frac{\partial f}{\partial p}\right)\\ 
        &amp;= -\{ g, f\}\end{aligned}\]</span></p>
</div>
<div id="bilinearity" class="section level5 unnumbered">
<h5 class="unnumbered">Bilinearity</h5>
<p>The Poisson bracket is linear in both its inputs. <span class="math display">\[\begin{aligned}
\{f,\alpha g+ h\}   &amp;= \frac{\partial f}{\partial p}\frac{\partial (\alpha g +h)}{\partial q}-\frac{\partial f}{\partial q}\frac{\partial (\alpha g +h)}{\partial p} \\
                    &amp;= \frac{\partial f}{\partial p}\left(\alpha\frac{\partial g}{\partial q}+\frac{\partial h}{\partial q}\right)-\frac{\partial f}{\partial q}\left(\alpha\frac{\partial g}{\partial p}+\frac{\partial h}{\partial p}\right)\\
                    &amp;= \alpha\left(\frac{\partial f}{\partial p}\frac{\partial g}{\partial q}-\frac{\partial f}{\partial q}\frac{\partial g}{\partial p}\right)+\frac{\partial f}{\partial p}\frac{\partial h}{\partial q}-\frac{\partial f}{\partial q}\frac{\partial h}{\partial p}\\
                    &amp;= \alpha\{f,g\}+\{f,h\}\\
                    \\
\{\alpha f + h,g\}  &amp;= -\{g,\alpha f+h\} \\
                    &amp;= -\left(\alpha\{g,f\}+\{g,h\}\right)\\
                    &amp;= \alpha\{f,g\}+\{h,g\}\end{aligned}\]</span></p>
</div>
<div id="jacobi-identity" class="section level5 unnumbered">
<h5 class="unnumbered">Jacobi Identity</h5>
<p>The Poisson bracket satisfies the Jacobi identity: <span class="math display">\[\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\} =0\]</span></p>
<p>For readability, we shall use subscripts to denote partial derivatives, e.g. <span class="math inline">\(\frac{\partial f}{\partial p_j}=f_{p_j}\)</span>. Also in what follows, we will employ the Einstein summation convention; whenever an index is repeated, one interprets the quantity as a sum over <span class="math inline">\(n\)</span> coordinates. <span class="math display">\[\begin{aligned}
&amp;\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\} \\
    &amp;= \left\{ f,g_{p_j}h_{q_j}- g_{q_j}h_{p_j} \right\} + \left\{ g,h_{p_j}f_{q_j}- h_{q_j}f_{p_j} \right\} + \left\{ h,f_{p_j}g_{q_j}- f_{q_j}g_{p_j} \right\} \\
    &amp;=   f_{p_k}(g_{p_j}h_{q_j}- g_{p_j}h_{q_j})_{q_k}
                    - f_{q_k}(g_{p_j}h_{q_j}- g_{p_j}h_{q_j})_{p_k} \\
        &amp; +  g_{p_k}(h_{p_j}f_{q_j}- h_{p_j}f_{q_j})_{q_k}
                    - g_{q_k}(h_{p_j}f_{q_j}- h_{p_j}f_{q_j})_{p_k} \\
        &amp; +  h_{p_k}(f_{p_j}g_{q_j}- f_{p_j}g_{q_j})_{q_k}
                    - h_{q_k}(f_{p_j}g_{q_j}- f_{p_j}g_{q_j})_{p_k} \\\\
    &amp;=   f_{p_k}(g_{p_j}h_{q_j})_{q_k}- f_{p_k}(g_{p_j}h_{q_j})_{q_k}
                    - f_{q_k}(g_{p_j}h_{q_j})_{p_k}+ f_{q_k}(g_{p_j}h_{q_j})_{p_k} \\
        &amp; +  g_{p_k}(h_{p_j}f_{q_j})_{q_k}- g_{p_k}(h_{p_j}f_{q_j})_{q_k}
                    - g_{q_k}(h_{p_j}f_{q_j})_{p_k}+ g_{q_k}(h_{p_j}f_{q_j})_{p_k} \\
        &amp; +  h_{p_k}(f_{p_j}g_{q_j})_{q_k}- h_{p_k}(f_{p_j}g_{q_j})_{q_k}
                    - h_{q_k}(f_{p_j}g_{q_j})_{p_k}+ h_{q_k}(f_{p_j}g_{q_j})_{p_k} \\\\
    &amp;=   f_{p_k}g_{p_j q_k} h_{q_j}+ f_{p_k}g_{p_j}h_{q_j q_k}
                    - f_{p_k}g_{p_j q_k} h_{q_j}- f_{p_k}g_{p_j}h_{q_j q_k}\\
                    &amp;- f_{q_k}g_{p_j p_k} h_{q_j}- f_{q_k}g_{p_j}h_{q_j p_k}
                    + f_{q_k}g_{p_j p_k} h_{q_j}+ f_{q_k}g_{p_j}h_{q_j p_k}
 \\
        &amp; +  g_{p_k}h_{p_j q_k} f_{q_j}+ g_{p_k}h_{p_j}f_{q_j q_k}
                    - g_{p_k}h_{p_j q_k} f_{q_j}- g_{p_k}h_{p_j}f_{q_j q_k}\\
                    &amp;- g_{q_k}h_{p_j p_k} f_{q_j}- g_{q_k}h_{p_j}f_{q_j p_k}
                    + g_{q_k}h_{p_j p_k} f_{q_j}+ g_{q_k}h_{p_j}f_{q_j p_k}
 \\
        &amp; +  h_{p_k}f_{p_j q_k} g_{q_j}+ h_{p_k}f_{p_j}g_{q_j q_k}
                    - h_{p_k}f_{p_j q_k} g_{q_j}- h_{p_k}f_{p_j}g_{q_j q_k}\\
                    &amp;- h_{q_k}f_{p_j p_k} g_{q_j}- h_{q_k}f_{p_j}g_{q_j p_k}
                    + h_{q_k}f_{p_j p_k} g_{q_j}+ h_{q_k}f_{p_j}g_{q_j p_k}
 \\\\
    &amp;=    f_{p_k}g_{p_j q_k} h_{q_j}+ f_{p_k}g_{p_j}h_{q_j q_k}
                                                    - f_{p_k}g_{p_j}h_{q_j q_k}\\
                                    &amp;- f_{q_k}g_{p_j p_k} h_{q_j}- f_{q_k}g_{p_j}h_{q_j p_k}
                                    + f_{q_k}g_{p_j p_k} h_{q_j} \\
        &amp; +   g_{p_k}h_{p_j q_k} f_{q_j}+ g_{p_k}h_{p_j}f_{q_j q_k}
                                                    - g_{p_k}h_{p_j}f_{q_j q_k}\\
                                    &amp;- g_{q_k}h_{p_j p_k} f_{q_j}- g_{q_k}h_{p_j}f_{q_j p_k}
                                    + g_{q_k}h_{p_j p_k} f_{q_j} \\
        &amp; +   h_{p_k}f_{p_j q_k} g_{q_j}+ h_{p_k}f_{p_j}g_{q_j q_k}
                                                    - h_{p_k}f_{p_j}g_{q_j q_k}\\
                                    &amp;- h_{q_k}f_{p_j p_k} g_{q_j}- h_{q_k}f_{p_j}g_{q_j p_k}
                                    + h_{q_k}f_{p_j p_k} g_{q_j} \\\\
    &amp;=    f_{p_k}g_{p_j q_k} h_{q_j}+ f_{p_k}g_{p_j}h_{q_j q_k}
                                                    - f_{p_k}g_{p_j}h_{q_j q_k}
                                                    - f_{q_k}g_{p_j}h_{q_j p_k}  \\
        &amp; +   g_{p_k}h_{p_j q_k} f_{q_j}+ g_{p_k}h_{p_j}f_{q_j q_k}
                                                    - g_{p_k}h_{p_j}f_{q_j q_k}
                                                    - g_{q_k}h_{p_j}f_{q_j p_k}  \\
        &amp; +   h_{p_k}f_{p_j q_k} g_{q_j}+ h_{p_k}f_{p_j}g_{q_j q_k}
                                                    - h_{p_k}f_{p_j}g_{q_j q_k}
                                                    - h_{q_k}f_{p_j}g_{q_j p_k}  \\\\
    &amp;=        f_{p_k}g_{p_j}h_{q_j q_k}
                                        - f_{p_k}g_{p_j}h_{q_j q_k}  \\
        &amp; +       g_{p_k}h_{p_j}f_{q_j q_k}
                                        - g_{p_k}h_{p_j}f_{q_j q_k}  \\
        &amp; +       h_{p_k}f_{p_j}g_{q_j q_k}
                                        - h_{p_k}f_{p_j}g_{q_j q_k}  \\
    &amp;=0
\end{aligned}\]</span></p>
<p>We call attention to a critical observation which leads to the pairwise cancellations above. Let us isolate two terms in the fourth equality: the first term <span class="math inline">\(f_{p_k}h_{q_j}g_{p_j q_k}\)</span> and the antepenultimate term <span class="math inline">\(-f_{p_j}h_{q_k}g_{p_k q_j}\)</span>. Note that we have rearranged the latter slightly, employing smoothness to commute the order of partial derivatives. Since under our Einstein convention each term is a double sum each of <span class="math inline">\(n\)</span> terms, we have the following identity: <span class="math display">\[\sum_{j,k=1}^{n} f_{p_k}h_{q_j}g_{p_j q_k}=\sum_{j,k=1}^{n} f_{p_j}h_{q_k}g_{p_k q_j}\]</span> In other words, we may simply "switch the indices" <span class="math inline">\(j\)</span> and <span class="math inline">\(k\)</span> to obtain that <span class="math inline">\(f_{p_k}h_{q_j}g_{p_j q_k}= f_{p_j}h_{q_k}g_{p_k q_j}\)</span>. Thus, we have two terms which are identical but with opposite signs. Since the lines in the expression cyclically repeat, we have in fact three pairs of terms that shall cancel. In this fashion, six terms vanish each step. Subsequent equality steps show more pairs that disappear, three pairs at a time.</p>
</div>
<div id="leibniz-rule" class="section level5 unnumbered">
<h5 class="unnumbered">Leibniz Rule</h5>
<p>The Poisson bracket satisfies a Leibniz identity. <span class="math display">\[\begin{aligned}
\left\{ f,gh \right\}  &amp;= f_{p_j}(gh)_{q_j}- f_{q_j}(gh)_{p_j}\\
            &amp;= f_{p_j}g_{q_j}h + f_{p_j}g h_{q_j}- f_{q_j}g_{p_j}h - f_{q_j}g h_{p_j}\\
            &amp;= f_{p_j}g_{q_j}h - f_{q_j}g_{p_j}h + f_{p_j}h_{q_j}g - f_{q_j}h_{p_j}g\\
            &amp;= \left\{ f,g \right\}h + \left\{ f,h \right\}g\end{aligned}\]</span></p>
</div>
<div id="derivation-of-the-algebra" class="section level5 unnumbered">
<h5 class="unnumbered">Derivation of the Algebra</h5>
<p>We note that the above properties imply that the Poisson bracket is a derivation of the algebra in the following sense. Let <span class="math inline">\(X_f:\mathscr{A}_{cl}{\rightarrow}\mathscr{A}_{cl}\)</span> be the vector field, i.e. a first order linear differential operator, given by the following: <span class="math display">\[\begin{aligned}
X_f :=&amp; \frac{\partial f}{\partial p}\frac{\partial }{\partial q}-\frac{\partial f}{\partial q}\frac{\partial }{\partial p} \\
X_f\cdot g =&amp; \left\{ f,g \right\}\end{aligned}\]</span> Then <span class="math inline">\(X_f\)</span> acts on <span class="math inline">\(\mathscr{A}_{cl}\)</span>. To say that <span class="math inline">\(X_f\)</span> is a derivation is to assert the following identity: <span class="math display">\[X_f(hg) = (X_f\cdot g)h+(X_f\cdot h)g\]</span> We note that this identity is equivalent to the Leibniz rule. Indeed: <span class="math display">\[\begin{aligned}
\left\{ f,gh \right\} &amp;=  X_f\cdot (gh) \\
\left\{ f,g \right\}h + g\left\{ f,h \right\}  &amp;= (X_f\cdot g)h + (X_f\cdot h)g\end{aligned}\]</span> Therefore, when one equation holds, so too must the other. Note that in a noncommutative setting, one must take care with the definitions and statement of the identities, but here we shall have no such issues.<br />
Given two such derivations <span class="math inline">\(X_f, X_g\)</span> define their commutator in the usual fashion: <span class="math display">\[=X_f X_g-X_g X_f\]</span> The following identity of these vector fields is equivalent to the Jacobi identity: <span class="math display">\[= X_{\left\{ f,g \right\}}\]</span> To see this equivalence, we consider the action of <span class="math inline">\([X_f,X_g]-X_{\left\{ f,g \right\}}\)</span> on <span class="math inline">\(h\)</span> and simplify using only the linearity and skew-symmetry properties. <span class="math display">\[\begin{aligned}
([X_f,X_g] - X_{\left\{ f,g \right\}})h &amp;= (X_f X_g  -X_g X_f) h - X_{\left\{ f,g \right\}} h \\
    &amp;= X_f X_g h - X_g X_f h - X_{\left\{ f,g \right\}} h \\
    &amp;= X_f \left\{ g,h \right\} - X_g \left\{ f,h \right\} - \left\{ \left\{ f,g \right\},h \right\} \\
    &amp;= \{f,\{g,h\}\} - \{g,\{f,h\}\} + \{h,\{f,g\}\} \\
    &amp;= \{f,\{g,h\}\} + \left\{ g,-\left\{ f,h \right\} \right\} + \{h,\{f,g\}\}\\
    &amp;= \{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}\end{aligned}\]</span> Therefore, when one expression is zero, so too is the other. Note well that when given fixed <span class="math inline">\(f,g\)</span> this identity holds for any <span class="math inline">\(h\in\mathscr{A}_{cl}\)</span>; in the reverse direction of the equivalence, this fact is needed to deduce that <span class="math inline">\([X_f,X_g]=X_{\left\{ f,g \right\}}\)</span> as operators.</p>
</div>
</div>
<div id="algebraic-properties" class="section level4">
<h4>Algebraic Properties</h4>
<p>Having established this Poisson bracket, we now summarize the following facts about this algebra. Firstly, <span class="math inline">\(\mathscr{A}_{cl}\)</span> is a real vector space and a commutative algebra with multiplication and addition. Together with the classical Poisson bracket, <span class="math inline">\(\mathscr{A}_{cl}\)</span> is moreover a Lie algebra, with the Poisson bracket as its Lie product. Furthermore, the algebraic product and the Lie product are related via the Leibniz rule, viz. the latter is a derivation.</p>
<p>Further, this algebra contains a distinguished element, the Hamiltonian <span class="math inline">\(H\)</span>, by which the time evolution of any observable is determined via the action <span class="math inline">\(X_H\)</span>.</p>
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
<!-- </section> -->
