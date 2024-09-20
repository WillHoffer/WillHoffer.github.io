---
title: "Convergence of Dirichlet Series"
tags:
- number-theory
- analysis
---

$$ 
\newcommand{\L}{\mathcal{L}}
\newcommand{\l}{\lambda}
\newcommand{\e}{\varepsilon}
$$

## Introduction

In this article, we shall consider two types of combinatorial objects: classical and generalized Dirichlet series. A classical Dirichlet series is a sum of the form:

$$ f(s) = \sum_{n=1}^\infty \frac{a_n}{n^s} $$

and a generalized Dirichlet series is a sum of the form: 

$$ f(s) = \sum_{n=1}^\infty a_n e^{-\lambda_n s} $$

where now we have weights on each term and a sequence $(\lambda_n)$ which determines the spacing between subsequent terms in the series. Note that the classical series may be recovered from the more general series by choosing $\lambda_n=\log n$. We allow for $a_n$ to be complex numbers, and we specify that the sequence $(\lambda_n)$ is a sequence of increasing real numbers, viz. $\lambda_1<\lambda_2<\lambda_3<... $.

Our primary motive will be to explore when such series converge using Laplace transforms. In this article, we shall prove that the domains of absolute convergence of such series are always half-planes. 

## Dirichlet Series as Laplace Transforms

We comment that the generalized Dirichlet series are written as exponentials since they may be interpreted as Laplace transforms of a discrete measure. To see this, consider the discrete measure $\mu$ given by:

$$ \mu := \sum_{n=1}^\infty a_n \delta_{\lambda n} $$

where here $\delta_x$ denotes the Dirac point measure supported at the point $x$. The Laplace transform of a measure is defined as follows:

$$ \L[\mu](s) := \int_0^\infty e^{-t s}d\mu(t) $$

As such, the generalized Dirichlet series are exactly the Laplace transform of the given discrete measure. Explicitly:

$$\begin{align*}
\L[\mu](s) &= \int_0^\infty e^{-ts} d\left(\sum_{n=1}^\infty a_n \delta_{\lambda n}\right)(t) \\
    &= \sum_{n=1}^\infty a_n\int_0^\infty e^{-ts}d\delta_{\l_n}(t) \\
    &= \sum_{n=1}^\infty a_n e^{-\l_n s}
\end{align*}$$

Note that in the last step, we have used the fact that $\int_{[0,\infty]} f(t)d\delta_{\l_n}(t) = f(\l_n)$. 

Using this connection, one may employ techniques from the study of Laplace transforms to deduce convergence results about the generalized Dirichlet series. 

## Half-Planes of Convergence

One of the most important properties of Dirichlet series, and more generally Laplace transforms, is that the series will converge in half-planes. This can be deduced from the following convergence theorem:

#### Theorem: Absolute Convergence of Laplace Transforms

Let $\mu$ be a measure on $(0,\infty)$, and denote by $$f(s) = \L[\mu] ( s )$$ its Laplace transform. Suppose that at the point $s=s_0$ the Laplace transform absolutely converges. Then the Laplace transform $f=\L[\mu]$ converges absolutely and is a holomorphic function of $s$ in the open half plane $\Re(s)=\sigma>\Re(s_0)=\sigma_0$. 

#### Proof

We shall make use of the following key theorem of real analysis:

> #### Dominated Convergence Theorem
> 
> Let $(f_n)$ be a sequence of $\mu$-integrable functions which converge almost everywhere to a limit $f=\lim_{n\to\infty}f_n$, and suppose that there is a $\mu$-integrable function $g$ such that $\vert f_n\vert \leq g$ for all $n$. Then $f$ is $\mu$-integrable and the following holds:
> 
> $$\int fd\mu = \lim_{n\to\infty}\int f_nd\mu $$
> 
> See for instance Theorem 2.24 in Folland's *Real Analysis* book. 

By assumption, $f(s_0) = \int_0^\infty \vert e^{-ts_0}\vert d\vert\mu\vert(t) <\infty$ converges. This implies that the measure $d\nu(t):=e^{-t\sigma_0}d\vert\mu\vert(t)$ is a finite measure on $(0,\infty)$. 

As such, for any $\Re(s)=\sigma>\sigma_0$, we have that:

$$ |\L[\mu](s)| \leq \int_0^\infty e^{-t\sigma}d|\mu|(t) \leq \int_0^\infty e^{-t\sigma_0}d|\mu|(t) = \nu[(0,\infty)]< \infty $$

This proves that the integral absolutely converges on the right half-plane $\sigma>\sigma_0$. 

To see holomorphicity, we first compute the difference quotient:

$$
\frac{\L[\mu](s+h)-\L[\mu](s)}{h} = \int_0^\infty \frac{e^{-th}-1}{h}e^{-ts}d\mu(x)
$$

Then apply the dominated convergence theorem to obtain that:

$$ \L[\mu]'(s) = -\int_0^\infty te^{-ts}d\mu(t) $$

The $n^\text{th}$ order derivative is computed similarly:

$$ \L[\mu]^{(n)}(s) = (-1)^n\int_0^\infty t^n e^{-ts}d\mu(t) $$

Details of the proof, including absolute convergence of integrals defining the derivatives, are included below. 

<details markdown=block><summary markdown=span>Click to View.</summary>

We proceed by induction on $m$, the order of the derivative. 

Let $h$ be any complex number with $\vert h\vert =\frac1n$. Setting $H_n = \frac{e^{-th}-1}{h}$, we have that:

$$ |H_n| \leq \frac{|th|e^{|th|}}{|h|} \leq C e^{2t|h|} = Ce^{\frac{t}{n}}$$

where $C>0$ is some positive constant so that $t\leq C e^{t\vert h\vert}$ (depending only on $h$). Supposing that $n$ is large enough so that $1/n < \frac12\sigma_0$, we find:

$$\begin{align*}
\int_0^\infty C e^{t/n}d\nu(t) &= C\int_0^\infty e^{-t(\sigma_0-1/n)}d|\mu|(t) \\
    &\leq C\int_0^\infty e^{-\frac12 t\sigma_0}d|\mu|(t) \\
    &= C\int_0^\infty d\nu(2t) \\
    &=C\nu[(0,\infty)] <\infty
\end{align*}$$

In the last step, we have used that the domain $(0,\infty)$ is invariant under scaling (by positive numbers) and that the measure $\nu$ is finite. 

Therefore, for sufficiently large $n$, each $\vert H_n\vert \leq g(t):=Ce^{\frac{t}{n}}$ where $g$ is $\nu$-integrable function. Observe that:
$$\lim_{h\to 0}\frac{e^{-th}-1}{h}=\left.\frac d{dz}e^{-tz}\right\vert_{z=0}=-t$$

where we note that the derivative is the complex derivative. 

Now, the difference quotient takes the form:

$$ \frac{\L[\mu](s+h)-\L[\mu](s)}{h} = \int_0^\infty \frac{e^{-th}-1}{h}e^{-ts}d\mu(x) $$

We now apply the dominated convergence theorem with any sequence $(h_n)$ with $\vert h\vert =\frac{1}{2n}$ to obtain:

$$ \lim_{h_n\to 0}\frac{\L[\mu](s+h)-\L[\mu](s)}{h} = \int_0^\infty -te^{-ts}d\mu(x) $$

Because the sequence may approach zero in an arbitrary direction, and because the limit on the inside is a well-defined complex derivative independent of the direction, we see that the limit is independent of the direction. Thus, we have that the function is complex differentiable, and we may write:

$$ \L[\mu]'(s) = \lim_{h\to 0}\frac{\L[\mu](s+h)-\L[\mu](s)}{h} = \int_0^\infty -te^{-ts}d\mu(x) $$

Also, the integral on the right hand side is absolutely convergent:

$$\begin{align*}
\left\vert \int_0^\infty te^{-ts}d\mu(t)\right\vert &\leq \int_0^\infty te^{-t\sigma}d|\mu|(t) \\
    &\leq C\int_0^\infty e^{-t(\sigma-\varepsilon)}d|\mu|(t) \\
    &= C\int_0^\infty e^{-\sigma_0}d|\mu|(t) <\infty 
\end{align*}$$

where here $C>0$ is a positive constant depending only on $\varepsilon$ such that $t\leq Ce^{t\varepsilon}$ and $\varepsilon$ is chosen so that $\sigma-\varepsilon>\sigma_0$. 

This proves the base case of $m=1$.

For subsequent derivatives, let us suppose that the $m^{\text{th}}$ order derivative $\L[\mu]^{(m)}$ exists and converges absolutely at $s$. We shall again form a difference quotient, bound, and apply the dominated convergence theorem. 

So, we have as a hypothesis that the integral $\int_0^\infty t^m e^{-ts}d\mu(s)$ converges (absolutely). The $m^\text{th}$ order difference quotient takes the form:

$$
\frac{\L[\mu]^{(m)}(s+h)-\L[\mu]^{(m)}(s)}{h} = (-1)^m\int_0^\infty \frac{e^{-th}-1}{h} t^m e^{-ts}d\mu(t)
$$

Use the same argument as before to bound the term $\vert H_n\vert\leq g$. Since the integral $\int_0^\infty t^m e^{-ts}d\mu(s)$ converges absolutely, we have that the measure given by $d\nu_m(t) = t^m e^{-ts}d\vert \mu\vert (s)$ is finite. The function $g$ is also $\nu_m$-integrable by a similar argument as before, as $d\nu_m(t)=t^md\nu(t)$; the only difference will be an extra overall positive constant $2^m$ during the step with the pullback of the measure under the map $t\mapsto \frac12 t$. 

So we again apply dominated convergence to yield the following:

$$ \L[\mu]^{(m+1)} = (-1)^{m+1}\int_0^\infty t^{m+1}e^{-ts}d\mu(t)$$

where the same arguments as above are used to ensure that these complex derivatives are well defined. Alternatively, one may use the tools of complex analysis to ensure that one complex derivative implies holomorphicity (and thus all orders of complex derivatives.)

This completes the inductive step. Therefore, by induction we have proven that the $m^\text{th}$ order derivatives exist and are given by:

$$ \L[\mu]^{(m)}(s) = (-1)^m\int_0^\infty t^m e^{-ts}d\mu(t) $$

Absolute convergence of the integral follows the exact same steps as in the base case, but using a constant $C>0$ so that $t^m\leq Ce^{t\varepsilon}$. (Such constants exists since any polynomial in $t$ is of order $O(e^{\alpha t})$ as $t\to\infty$ for any $\alpha>0$.)

</details>

Since $s$ was an arbitrary point with $\Re(s)>\sigma_0$, we have proven that that $\L[\mu]$ is holomorphic at all points in that open right half plane. Further, we have shown that for each $n=0,1,2,...$, $\L[\mu]^{(n)}(s)$ is an absolutely convergent integral. 

<div style="text-align: right; margin:1vw">$ \blacksquare $</div>

#### Corollary

Let $$X=\{ z: f(z)=\L[\mu](z)\text{ converges absolutely }\}$$. Then the interior of $X$ is an open half-plane. 

> #### Proof
> 
> For any $s_0\in X$, we have that $f(s)$ converges (absolutely) for all $\Re(s)>\Re(s_0)$. Thus, $X$ contains the half plane $\Re(s)>\Re(s_0)$. Define the half plane $$\mathbb{H}_{s_0}=\{s: \Re(s)>\Re(s_0)\}$$. Then we may write:
> 
> $$ X = \cup_{x\in X} \mathbb{H}_x $$
> 
> This implies that the interior of $X$ takes the form:
> 
> $$ \text{int} X = \mathbb{H}_{\sigma_{a.c.}} $$
> 
> where $$\sigma_{a.c.}:= \inf\{\Re(s_0): s_0\in X\}$$. This proves the corollary.
> <div style="text-align: right; margin:1vw">$ \blacksquare $</div>

We note that we do not have information about the vertical line $\Re(s)=\sigma_{a.c.}$; convergence at such points depends on whether a lateral limit exists or not. This quantity $\sigma_{a.c.}$ is called the *abscissa of absolute convergence*, as it is the smallest real number $x$ for which the function $f$ converges absolutely in the half plane $\mathbb{H}_x$. 

#### Corollary

A generalized Dirichlet series $$f(s)=\sum_{n=1}^\infty a_n e^{-\l_n s}$$, and thus also a classical Dirichlet series, converges in a half plane of the form $$\mathbb{H}_{\sigma_{a.c.}}$$, where $$\sigma_{a.c.}:= \inf\{\Re(s_0): f(s_0) \text{ converges absolutely}\}$$. 

> #### Proof
> 
> The proof of the corollary is simply to apply the main theorem to the discrete measure representing the Dirichlet series. Namely, let:
> 
> $$\mu := \sum_{n=1}^\infty a_n \delta_{\lambda n}$$
> 
> Then by the theorem, $$f(s) = \L[\mu](s)$$ is absolutely convergent and holomorphic in the half plane $$\mathbb{H}_{\sigma_{a.c.}}$$. Since $$\L[\mu](s) = \sum_{n=1}^\infty a_n e^{-\l_n s}$$, we are done. (For a classical Dirichlet series, pick $$\l_n=\log n$$.)
> 
> <div style="text-align: right; margin:1vw">$ \blacksquare $</div>

