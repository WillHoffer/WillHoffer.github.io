---
title: "The Von Mangoldt Dirichlet Series"

tags:
- number-theory
- analysis
---

## Introduction
In what follows, let $p$ denote a prime number. The von Mangoldt function $\Lambda$ is defined by the following:

$$
\Lambda(n) = \begin{cases} 
\log p & \text{ if }n=p^m\text{ is a prime power} \\
0 & \text{ otherwise}
\end{cases}
$$

Our goal is to elucidate the connection between $\Lambda$, the Riemann zeta function $\zeta$, and the prime numbers. Today, we will consider the classical Dirichlet series whose coefficients are given by the von Mangoldt function: 

$$ f(s) = \sum_{n=1}^\infty \frac{\Lambda(n)}{n^s} $$

We will show that this series is exactly given by (the negative of) the logarithmic derivative of the Riemann zeta function. This logarithmic derivative is given by:

$$ \frac{d}{ds}\log \zeta(s) = \frac{\zeta'(s)}{\zeta(s)} $$

## Main Theorem

The Dirichlet series whose coefficients are prescribed by the von Mangoldt function $\Lambda(n)$ is precisely the opposite of the logarithmic derivative of the Riemann zeta function $\zeta$. To wit:

$$ -\frac{\zeta'(s)}{\zeta(s)} = \sum_{n=1}^\infty \frac{\Lambda(n)}{n^s} $$

#### Proof 

By the Euler product formula for the Riemann zeta function, we have:

$$ \zeta(s) = \prod_{p\in \mathscr{P}} \frac{1}{1-p^{-s}} $$

where the product is taken over all primes $p$, and absolutely converges when $\sigma=\Re(s)>1$. 

Because the product is absolutely convergent, the following equivalent identity holds for the logarithm of the product: 

$$ \log \zeta(s) = \log \prod_{p\in \mathscr{P}} \frac{1}{1-p^{-s}} = -\sum_{p\in \mathscr{P}} \log(1-p^{-s}) $$

Further, this latter series is absolutely convergent when $\sigma >1$. In particular, it follows that this sum is holomorphic in this domain since it is an absolutely convergent sum comprised of functions holomorphic in said half-plane. (Absolute convergence of the series is enough to ensure that the partial summands converge locally uniformly to a function which is holomorphic by a theorem of Weierstrauss in complex analysis.) 

Therefore, term-by-term differentiation is valid for such an absolutely convergent holomorphic series. Thus we compute:

$$\begin{align*}
-\frac{\zeta'(s)}{\zeta(s)} &= -\frac{d}{ds}\log \zeta(s) \\
    &= \frac{d}{ds} \sum_{p\in \mathscr{P}} \log(1-p^{-s}) \\
    &= \sum_{p\in \mathscr{P}} \frac{d}{ds} \log(1-p^{-s}) \\
    &= \sum_{p\in \mathscr{P}} (1-p^{-s})^{-1}(- p^{-s})(-\log p) \\
    &= \sum_{p\in \mathscr{P}} \log p \frac{p^{-s}}{1-p^{-s}}
\end{align*}$$

Next, we shall note the fact that $\frac{1}{p^\sigma}<1$ for any prime $p$ and real number $\sigma >1$. In particular, these ensure that the following series is absolutely convergent: 

$$ \frac{1}{1-p^{-\sigma}} = \sum_{m=0}^\infty (p^{-\sigma})^m = \sum_{m=0}^\infty (p^m)^{-\sigma} $$

Therefore, the complex valued series identity also holds when $\sigma = \Re(s) >1 $:

$$ \frac{1}{1-p^{-s}} = \sum_{m=0}^\infty (p^{-s})^m = \sum_{m=0}^\infty (p^m)^{-s} $$

The corresponding sum of absolute values of its terms is exactly the previous identity. We tweak the identity slightly by multiplying with the extra factor of $p^{-s}$:

$$ \frac{p^{-s}}{1-p^{-s}} = \sum_{m=1}^\infty (p^m)^{-s} $$

Using this fact, we now return to our previous calculation. We find:

$$\begin{align*}
-\frac{\zeta'(s)}{\zeta(s)} &= \sum_{p\in \mathscr{P}} \log p \frac{p^{-s}}{1-p^{-s}} \\
    &= \sum_{p\in \mathscr{P}} \log p \sum_{m=1}^\infty (p^m)^{-s} \\
    &= \sum_{p\in \mathscr{P}} \sum_{m=1}^\infty \frac{\log p}{(p^m)^s}
\end{align*}$$

Now, this double sum has the precise effect of summing over every prime power of the form $p^m$ for some prime $p$ and positive integer $m$. This double sum can be interpreted as a particular ordering of a more general unordered sum over the countable set of all prime powers. As is [proved here on another post](https://willhoffer.com/2021-11-24/absolute-convergence-of-unordered-sums/), absolute convergence of one ordering of a sum ensures that any other rearrangement is also absolutely convergent. Using this fact, we may write:

$$ \sum_{p\in \mathscr{P}} \sum_{m=1}^\infty \frac{\log p}{(p^m)^s} = \sum_{n=p^m} \frac{\log p}{n^s} $$

where the latter sum is over natural numbers which are prime powers of the form $p^m$, with positive integer $m$.

By using the von Mangoldt function, we can convert this sum to a Dirichlet series which sums over the natural numbers. As $\Lambda(n)=0$ for any term which is not a prime power, the two series will have exactly the same terms with the same weights. Thus, we may write:

$$ \sum_{n=p^m} \frac{\log p}{n^s} = \sum_{n=p^m} \frac{\Lambda(n)}{n^s} = \sum_{n=1}^\infty \frac{\Lambda(n)}{n^s} $$

Therfore, we may complete the proof of the identity by combining our previous calculations with these two identities. 
<div style="text-align: right; margin:1vw">$ \blacksquare $</div>

