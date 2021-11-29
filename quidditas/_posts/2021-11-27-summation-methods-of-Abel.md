---
title: "Summation Methods of Abel"
tags:
- analysis
- number-theory
- combinatorics
---

## Introduction

There are several summation techniques or formulae that bear the name of [Niels Henrik Abel](https://scienceworld.wolfram.com/biography/Abel.html). In this article, we shall identify three of them:
- [Abel's Summation by Parts](#abel's-summation-by-parts)
- [Abel's Partial Summation Formula](#abel's-partial-summation-formula)
- [Abel Resummation](#abel-resummation)

## Abel's Summation by Parts

Summation by parts is an identity of discrete sums tantamount to integration by parts. This technique is sometimes called Abel's lemma or an Abel transformation, though here we emphasize that [this Abel transformation is for discrete sums](https://encyclopediaofmath.org/wiki/Abel_transformation) and should not be confused with the [Abel integral transform](https://mathworld.wolfram.com/AbelTransform.html) used in spherical analysis.

Given two sequences $(a_n)$ and $(b_n)$, denote by $A_n$ the sum of the first $n$ terms of the sequence $(a_n)$, viz. $A_n=\sum_{k=1}^n a_k$. Then summation by parts is the following identity:

$$ \sum_{n=1}^N a_n b_n = A_N b_N - \sum_{n=1}^{N-1} A_n(b_{n+1}-b_n) $$

The identity bears resemblance to the usual integration by parts $\int f'g = fg - \int fg'$ when one considers sums as integrals and, in lieu of the derivative, the finite difference operator $\Delta$. In particular, we have that $\Delta A_n = A_n - A_{n-1} = a_n$ and $\Delta b_{n+1}=b_{n+1}-b_n$, whence the formula is equivalent to:

$$ \sum_{n=1}^N b_n\Delta A_n = A_N b_N - \sum_{n=1}^{N-1} A_n\Delta b_{n+1} $$

Other reexpressions of the same formula exist, but the common thread is that the difference operator inside the sum is transferred from one sequence to the other.

#### Proof of the Identity

Given two sequences $$(a_n)_{n\in\mathbb{N}}$$ and $$(b_n)_{n\in\mathbb{N}}$$ (say, of complex numbers), and defining $$A_n=\sum_{k=1}^n a_k$$, we have that the following holds for any $$N\in\mathbb{N}$$:

$$ \sum_{n=1}^N a_n b_n = A_N b_N - \sum_{n=1}^{N-1} A_n(b_{n+1}-b_n) $$

<details markdown=block><summary markdown=span>Click to View.</summary>

We proceed by induction on $m$, the upper index of the sum. 

The base case with $N=1$ is simply the statement that $a_1b_1=A_1b_1$, so there is nothing to prove. 

Now suppose as the induction hypothesis that the following identity holds for $m=N-1$:

$$ \sum_{n=1}^{N-1} a_n b_n = A_{N-1} b_{N-1} - \sum_{n=1}^{N-2} A_n(b_{n+1}-b_n) $$

We shall show that the desired identity in the statement of the theorem with $m=N$ holds.  We compute:

$$\begin{align*}
\sum_{n=1}^N a_nb_n &= \sum_{n=1}^N (A_n-A_{n-1})b_n \\
    &= A_Nb_N-A_{N-1}b_N + \sum_{n=1}^{N-1} a_n b_n \\
    &= A_Nb_N-A_{N-1}b_N + A_{N-1} b_{N-1} - \sum_{n=1}^{N-2} A_n(b_{n+1}-b_n) \\
    &= A_Nb_N - \sum_{n=1}^{N-1} A_n(b_{n+1}-b_n)
\end{align*}$$

This proves the inductive step, and thus the result holds for any natural number $N\geq 1$.
<div style="text-align: right; margin:1vw">$ \blacksquare $</div>

</details>

## Abel's Partial Summation Formula

The partial summation formula bears a strong resemblance to the summation by parts, except in place of the $n^{\text{th}}$ partial sum $A_N$, we shall use the summatory function $N_A$ accorded to the sequence $A=(a_n)$. More precisely, define:

$$ N_A(t) := \sum_{n\leq t} a_n $$

and let $f\in C^1([0,x])$. Then the following identity holds:

$$ \sum_{0\leq n\leq x}a_n f(n) = N_A(x)f(x) - \int_0^x N_A(t)f'(t)dt $$

#### Proof
<details markdown=block><summary markdown=span>Click to View.</summary>

Let $m=\lfloor x\rfloor$, so that $m\leq x < m+1$. By summation by parts and the fundamental theorem of calculus, we have that the following holds:

$$\begin{align*}
\sum_{n=0}^m a_n f(n) &= N_A(N)f(N) - \sum_{n=0}^{m-1} N_A(n)(f(n+1)-f(n)) \\
    &= N_A(m)f(m) - \sum_{n=0}^{m-1} N_A(n)\int_{[n,n+1)} f'(t)dt \\
    &= N_A(m)f(m) - \sum_{n=0}^{m-1}\int_{[n,n+1)} N_A(t)f'(t)dt \\
    &= N_A(m)f(m) - \int_0^m N_A(t)f'(t)dt
\end{align*}$$

Note that in passing $N_A$ into the integral, we have used that $N_A(n)=N_A(t)$ for all $t\in[n,n+1)$.

Now, because $N_A(t)\equiv N_A(m)$ is constant when $t\in [m,x)$, we may again use the fundamental theorem of calculus to find:

$$ N_A(x)f(x) = N_A(m)f(m) + \int_m^x N_A(t)f'(t)dt $$ 

Note also that $$\sum_{n=0}^m N_A(n)f(n) = \sum_{0\leq n \leq x} N_A(n)f(n) $$. Using this fact and the line above, we may rewrite the above identity using $x$ in place of the rounded $m$ to find:

$$\begin{align*}
\sum_{0\leq n \leq x} N_A(n)f(n) &= \sum_{n=0}^m a_n f(n) \\
    &= N_A(m)f(m) - \int_0^m N_A(t)f'(t)dt \\
    &= N_A(x)f(x) - \int_m^x N_A(t)f'(t)dt - \int_0^m N_A(t)f'(t)dt \\
    &= N_A(x)f(x) - \int_0^x N_A(t)f'(t)dt
\end{align*}$$

This completes the proof of the identity.

<div style="text-align: right; margin:1vw">$ \blacksquare $</div>
</details>

Note that the same formula holds if the sequence starts at one, instead of zero. The exact same proof yields that:

$$ \sum_{1\leq n\leq x}a_n f(n) = N_A(x)f(x) - \int_1^x N_A(t)f'(t)dt $$

This variant is often more convenient for Dirichlet series, where the indices start at one. One may use the formula, for instance, to derive the following:

$$\sum_{1\leq n\leq \lfloor x \rfloor} \frac1{n^s} = \frac{\lfloor x \rfloor}{x^s} - \int_1^\infty \lfloor t \rfloor\frac{-s}{t^{s+1}}dt $$

Provided that $\Re(s)>1$ so that the first term vanishes in the limit as $x\to\infty$, we deduce an integral representation for the Riemann zeta funciton:

$$ \zeta(s) = \sum_{n=1}^\infty \frac1{n^s} = s\int_1^\infty \frac{\lfloor t \rfloor}{t^{s+1}}dt $$

In fact, for an arbitrary Dirichlet series, an integral representation of the same flavor holds, but with the summatory function of Dirichlet series replacing the numerator of the integrand. (In the above formula, all the Dirichlet series coefficients are equal to one, so $\lfloor x \rfloor=\sum_{1\leq n\leq \lfloor t \rfloor} 1$ is the summatory function.) The region of convergence in the more general setting is determined by when the ratio $x^{-s}\sum_{1\leq n\leq \lfloor x \rfloor} a_n$ vanishes as $x\to\infty$, as well as when the indefinite integral converges. 

## Abel Resummation

There is another summation technique which is commonly called Abel summation, or perhaps better distinguished as Abel resummation. This technique is a way to extend ordinary summation to handle some types of divergent series. 

> #### Definition: Abel Summable Series
> Suppose we have a series of the form $$ \sum_{n=0}^\infty a_n $$. By subtracting the zeroth term/translating to the origin, we may without loss of generality assume that $a_0=0$. 
> 
> We say that the series is **Abel summable** if the following holds:
> 
> - The power series $$\sum_{n=0}^\infty a_nz^n $$ converges in the unit disk.
> - The limit $$\lim_{t\to 1^-}\sum_{n=0}^\infty a_n t^n = L$$ converges. 
> 
> In this case, the Abel sum of the series is the value of the limit, viz:
> 
> $$\sum_{n=0}^\infty a_n = \lim_{t\to 1^-}\sum_{n=0}^\infty a_n t^n = L$$

Notably, when the series is convergent in the usual sense this summation method yields the same result for the limit. This is an example of what is often considered an "Abelian theorem," c.f. Abelian and Tauberian theorems. See below for more.

However, there exists divergent series for which this summation method yields concrete results. 

For example, consider the difergent series:

$$ \sum_{n=0}^\infty (-1)^n $$

This series diverges by oscillation, as its partial sums switch between one and zero. Using the Abel resummation, though, we consider the convergent series:

$$ \sum_{n=0}^\infty (-1)^n z^n = \frac{1}{1+z} $$ 

<div>
where the identity holds whenever $|z|<1 $. The limit as $z$ approaches one along the real axis is given by one half, viz:
</div>

$$\frac12=\lim_{t\to1^-}\frac1{1+t}$$

Thus, the Abel resummation of the series is defined to be one half. 

#### Connection with Tauberian Theorems

An Abelian theorem is often of the flavor that a more general summation method arrive at the same result for an already convergent series. In other words, the generalized summation process is consistent with an ordinary or weaker summation method. 

Meanwhile, Tauberian theorems are converses or partial converses to such "Abelian" theorems. A Tauberian theorem often gives sufficient conditions under which the generalized summation method yields convergent in the stricter sense, prior to the generalized notion of summability. 

The original Tauberian theorem concerns a sufficient condition under which Abel summability implies ordinary convergence, namely that the coefficients $a_n$ are of asymptotic order $\frac1n$. More precisely, that Abel summability plus the condition $a_n=0(\frac1n)$ ensures ordinary convergence is what Tauber proved. A later theorem showed the sufficiency for the more general condition $a_n=O(\frac1n)$. See [this article](https://encyclopediaofmath.org/wiki/Tauberian_theorems) for more information. 

This topic is worth its own future post, especially in regards to other generalized summation methods (namely, Borel summation.)  