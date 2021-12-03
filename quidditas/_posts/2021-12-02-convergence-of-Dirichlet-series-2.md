---
title: "Convergence of Dirichlet Series II"
tags:
- number-theory
- analysis
---

$$ 
\newcommand{\HH}{\mathbb{H}} 
\newcommand{\CC}{\mathbb{C}}
\newcommand{\sc}{\sigma_c}
\newcommand{\sac}{\sigma_{\text{a.c.}}}
$$

## Introduction

This post is a follow up to [this previous post](https://willhoffer.com/2021-11-27/convergence-of-Dirichlet-series/) wherein we established that Laplace transforms of complex measures converge absolutely in half-planes. More generally, in fact, this result holds for local complex measures $\mu$ whose magnitude grows at most exponentially--- that is to say, the measure $\vert\mu\vert$ has a cumulative distribution function $F(t)=\vert\mu\vert([0,t])$ which is of exponential order, viz. $F(t)=O(\exp(At))$ for some $A>0$ as $t\to\infty$. 

As a corollary, we obtained that a generalized Dirichlet series (realized as a Laplace transform of a discrete measure) converges absolutely in regions shaped like half-planes. 

Here, we shall show that a generalized Dirichlet series can converge absolutely in any half-plane $$\HH_x=\{ s\in\CC : \Re(s) > x\}$$, $x\in\mathbb{R}$. We will prove more in fact: we shall demonstrate a examples of a generalized Dirichlet series whose abscissa of convergence $\sc$ and whose abscissa of absolute convergence $\sac$ can be any two real numbers, provided that $\sc\leq \sac$. 

We will not make comment about the convergence behavior at points in the boundaries of such half-planes, only on the open interior of such half-planes. 

## Dirichlet Series with Prescribed Half-Planes of Convergence

#### The Starting Example

We shall start by considering the following (classical) Dirichlet series:

$$ f(s)= \sum_{n=1}^\infty \frac{(-1)^{n+1}}{n^s} $$

This is sometimes known as [the alternating zeta function, or the Dirichlet eta function](https://mathworld.wolfram.com/DirichletEtaFunction.html).

By elementary techniques, we are able to deduce the following: 

#### Theorem
The Dirichlet series $f$ converges in the half plane $\HH_0$ and converges absolutely in the half-plane $\HH_1$. In other words, $\sc=0$ and $\sac=1$.  

> #### Proof
> 
> We have that the absolute version of the series takes the form:
> 
> $$ \sum_{n=1}^\infty \left\vert\frac{(-1)^{n+1}}{n^s}\right\vert = \sum_{n=1}^\infty \frac{1}{n^\sigma} $$
> 
> The left hand side is a $p$-series with parameter $p=\sigma$, so the series $f$ converges absolutely when $\sigma>1$. 
>
> Meanwhile, when $\sigma>0$ we have that the sequence $a_n=n^{-\sigma}=\vert n^{-s}\vert$ is monotonically decreasing to zero as $n\to\infty$. Since the terms are alternating in sign, Leibniz's alternating series test ensures the the series converges.
> <div style="text-align: right; margin:1vw">$ \blacksquare $</div>

#### Modification of the Example

We now write the series above as a generalized Dirichlet series:

$$ f(s) = \sum_{n=1}^\infty (-1)^{n+1}e^{-s\log n} $$

Apply the transformation linear transformation:

$$ s\mapsto \frac{s-x_0}{x_1-x_0} $$

to obtain the new series, $g(s) := f\left(\frac{s-x_0}{x_1-x_0}\right)$. 

#### Theorem (Arbitrary Abscissa of Convergence, $\sac>\sc$)

Let $x_1,x_0$ be any two real numbers with $x_1>x_0$. The series $g$ as defined is a generalized Dirichlet series of the form:

$$ g(s) = \sum_{n=1}^\infty b_n e^{-\lambda_n s} $$

Further, we have that abscissa of convergence $\sc=x_0$ and abscissa of absolute convergence $\sc=x_1$. 

<blockquote>

#### Proof 

We first compute that $g$ remains a generalized Dirichlet series:

$$\begin{align*}
g(s) &= \sum_{n=1}^\infty (-1)^{n+1}e^{-\left(\frac{s-x_0}{x_1-x_0}\right)\log n} \\
    &= \sum_{n=1}^\infty (-1)^{n+1}n^{\frac{x_0}{x_1-x_0}}e^{-s\frac{\log n}{x_1-x_0}} \\
    &= \sum_{n=1}^\infty b_n e^{-\lambda_n s}
\end{align*}$$

where we make the assignments $b_n=(-1)^{n+1}n^{\frac{x_0}{x_1-x_0}}$ and $\lambda_n=\frac{\log n}{x_1-x_0}$. 

We remark that the condition $x_1> x_0$ ensures that each $\lambda_n>0$ (so that they forms an increasing sequence). When $x_1-x_0=1$, the series above reduces to a classical Dirichlet series with coefficients $a_n=(-1)^{n+1} n^{x_0}$. 

Since $f(t) = g((x_1-x_0)t+x_0))$ absolutely converges when $\Re(t)>1$ and converges when $\Re(t)>0$, $g$ converges under these same conditions. In the variable $s=(x_1-x_0)t+x_0$, it follows that $g(s)$ converges absolutely when $\Re(s)>x_1$ and converges when $\Re(s)>x_0$.
<div style="text-align: right; margin:1vw">$ \blacksquare $</div>

</blockquote>


Thus, we have shown that the convergence of a generalized Dirichlet series may have arbitrary abscissa of convergence $\sc=x_0$ and abscissa of absolute convergence $\sac=x_1> x_0$. Note that this construction involves dividing by $x_1-x_0$, which fails when they are equal. 

#### Equal Abscissae Case

We next proceed similarly but with a different example to prove the theorem when the abscissa of convergence coincide. 

In the spirit of the previous proof, we shall also take a known example and modify it with a linear transformation. In this case, the ordinary Riemann zeta function will do:

$$ \zeta(s) = \sum_{n=1}^\infty \frac{1}{n^s} $$

This series is absolutely convergent when $\Re(s)>1$, and it diverges when $\Re(s)<1$. These can be seen, for instance, by using the integral test and comparison with the harmonic series, respectively. (Any other technique to prove this result for such a $p$-series would do.) Thus, the abscissae of convergence coincide and equal to one.

Note that the absolute convergence for real valued $s$ is automatic from convergence since the coefficients are positive, and absolute convergence of the series with complex $s=\sigma+i\tau$ follows from comparison to the series with real parameter $\sigma$.

#### Theorem (Arbitrary Abscissa of Convergence, $\sac=\sc$)

For any real number $x_0$, there is a classical Dirichlet series $g$ whose abscissa of convergence and of absolute convergence coincide and equal this number: $\sac=\sc=x_0$.

<blockquote>

#### Proof 

Define the new Dirichlet series $g(s) = \zeta(s-(x_0-1))$ for $x_0\in\mathbb{R}$, which converges when $\Re(s)-x_0+1>1$, or $\Re(s)>x_0$. Thus $\sc=x_0$ for $g$. The abcissa of absolute convergence is the same for the $\zeta$ function, and hence for $g$ as well. 

Since this transformation is only a shift by $x_0-1$, the series $g$ remains a classical Dirichlet series:

$$\begin{align*}
g(s) &= \sum_{n=1}^\infty \frac{1}{n^{s-x_0+1}} = \sum_{n=1}^\infty \frac{n^{x_0-1}}{n^{s}}
\end{align*}$$

Since $x_0$ is a arbitrary real number, we are done.
<div style="text-align: right; margin:1vw">$ \blacksquare $</div>
</blockquote>

In summary, we have shown that for any two real numbers $x_1,x_0\in\mathbb{R}$ with $x_1\geq x_0$, there is a generalized Dirichlet series $g$ whose abcissae satisfy $\sc=x_0$ and $\sac=x_1$. 
