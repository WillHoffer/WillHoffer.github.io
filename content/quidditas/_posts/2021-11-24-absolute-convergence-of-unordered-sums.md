---
title: "Absolute Convergence of Unordered Sums"

tags:
- analysis
---

$$
\newcommand{\NN}{\mathbb{N}}
\newcommand{\J}{\mathscr{J}}
$$

## Introduction

This article is a stand-alone proof of a theorem about absolute convergence of ordered and unordered sums. However, it does also serve as a companion piece to the [exposition on the Dirichlet series whose coefficients are given by the von Mangoldt function](https://willhoffer.com/2021-11-24/von-Mangoldt-function-Dirichlet-series/). Namely, the theorem below helps justify rigourously part of the proof of the theorem therein. 

We shall specify to countable index sets $\J$ for simplicity. In this setting, an unordered sum is defined by:

$$ \sum_{j\in \J} a_j = \sup\left\{ \left.\sum_{j\in J_k} a_j \,\right\vert\, J_k\subset \J, k\in\mathbb{N}, |J_k|=k<\infty \right\} $$

In English, the unordered sum is the supremum of all finite partial sums. This definition has the property that the order in which the summands $a_j$ are added is inconsequential. As a consequence, this sum is said to be convergent if and only if any ordering of the summands converges to the same result as any other. 

To make this statement precise, let us speak of permutations. A permutation of $\NN$ is by definition a bijection $\pi:\J\to\J$. So, given an ordered sum of the form:

$$ \sum_{n=1}^\infty a_{j_n} $$

We may define a reordering of the sum given by a permutation $\pi$ as the sum:

$$ \sum_{n=1}^\infty a_{\pi(j_{n})}  $$

We now posit the following rigorous definition:

> #### Definition
> The unordered sum $\sum_{j\in \mathscr{J}} a_j$ is said to be convergent if and only if there is a finite number $L$ such that for any permutation $\pi:\J\to\J$:
> 
> $$ L = \sum_{n=1}^\infty a_{\pi(j_n)} $$
> 
> In other words, the unordered sum is convergent if there is one ordering of the sum which is convergent in the usual sense, and any other reordering of the sum (in the sense above) converges to the same value $L$. 

Lastly, we shall specialize to absolute sums, wherein each $a_j\geq 0$ for each $j\in \mathscr{J}$. 

## Main Theorem

Suppose that $\mathscr{J}$ is a countable set, and that for each $j\in\J$, $a_j\geq 0$. Then the unordered sum given by

$$ \sum_{j\in \J} a_j = \sup\left\{ \left.\sum_{j\in J_k} a_j \,\right\vert\, J_k\subset \mathscr{J}, k\in\mathbb{N}, |J_k|=k<\infty \right\} $$

converges if there is any ordering of the sum which is convergent. 

Equivalently said, if one choice of ordering of a sum absolutely converges, than any other reordering also converges to the same value. Consequently, the unordered sum is by definition convergent. 

#### Proof

Let us assume that there is some ordering of $\sum_{j\in \J} a_j'$ which is convergent to some value, say $L$. For convenience of notation, we shall use $a_n:= a_{j_n}'$ to denote the summands in order to remove nested subscripts. Therefore, we may without loss of generality assume that the ordering which converges takes the form:

$$ \sum_{n=1}^\infty a_{n} = L  $$

where here we are now summing over the natural numbers, using the fact that $\J\cong \NN$ as sets (viz. they are in bijective correspondence) since $\J$ is assumed to be countable. 

Let us establish notation for partial sums of particular orderings. Given a permutation $\pi$ and a natural number $n\geq 1$, define: 

$$
\newcommand{\psum}[2]{S_{#1,#2}}
\newcommand{\Sinf}{\widetilde{S}_\infty}
\newcommand{\e}{\varepsilon}
\newcommand{\Sm}{\psum{ {l_m} }{ {\tau_m} }}
\newcommand{\aset}[2]{A_{#1,#2}}
\newcommand{\Am}{\aset {l_m}{\tau_m}}
\newcommand{\An}{\aset {N_m}\pi }
$$

$$\begin{align*}
\psum n \pi &= \sum_{k=1}^n a_{\pi(k)} \\
\Sinf &= \sum_{j\in \J } a_j = \sup\{ \psum n\pi : n\in\NN, \pi \in \text{Perm}(\NN) \}
\end{align*}$$

We similarly define $\psum\infty\pi$ as the limit of partial sums of the form $\psum n\pi$. 

By the definition of the supremum, we have that the following two facts hold:
- For any $\psum n\pi$, $\psum n\pi \leq \Sinf $.
- For any $\e >0$,  $\exists \psum l\tau$ for which $\Sinf - \e < \psum l\tau$. 

Fix an arbitrary permutation $\pi$; we shall show that $\psum \infty\pi$ converges. For each $m\in\NN$, let $\e=\frac1m$. Using the supremum properties, we have that there must be $l_m$ and $\tau_m$ for which the sum $\Sm$ satisfies: 

$$ \Sinf - \frac1m < \Sm $$

Now, the partial sum $\Sm$ sums over the elements of the multiset given by:

$$  \Am := \{ a_{\tau_m(k) : k=1,2,...,l_m} \} $$

This set is a multiset because certain terms may be repeated, but we do not want to consider the elements as being ordered as with a sequence. In particular, observe that $\Am$ is exactly the elements of the partial sum $\Sm$. We define $\aset n\pi$ similarly. 


Now, because the terms $a_j$ are all nonnegative, we have that partial sums which sum over all the elements of $\Am$ plus additional terms must be larger than the sum over only the elements of $\Am$. Using the notation above, this translates to:

$$ \aset N\pi \supseteq \Am \implies \psum N\pi \geq \Sm $$

We shall now show that for our fixed ordering $\pi$, for each value of $m$ and $\Sm$ satisfying the inequality above, we may find an $N_m$ such that for all $n\geq N_m$, we have $\Sm \leq \psum n\pi$. Combining the inequalities, we would then deduce that: 

$$ \Sinf - \frac1m < \Sm \leq \psum n\pi \leq \Sinf $$ 

We will also construct $N_m$ so that as $m\to\infty$, $N_m\to\infty$ is manifest as well.

By the remarks prior, we need only demonstrate that we may find a set $\An$ which contains $\Am$. 

Since permutations are invertible, we may define $i_k := \pi^{-1}\tau_m(k)$ for each $k=1,2,...,l_m$. This ensures that $a_{\pi(i_k)} = a_{\tau_m(k)}$ for each $k$. 

Choosing $$ I_m := \max \{ i_k : k=1,2,...,l_m \} $$, we thus find that:

$$\begin{align*}
\Am &= \{ a_{\tau_m(k)  } : k=1,2,...,l_m \} \\
    &= \{ a_{\pi(i_k)} : k=1,2,...,l_m \} \\
    &\subseteq \{ a_{\pi(i)} : i=1,2,...,I_m \} \\
    &= \aset {I_m}\pi
\end{align*}$$

Similarly, any $n\geq I_m$ will satisfy the same superset containment required. It is true that $I_m$ will eventually become arbitrarily large, but it is much simpler to argue that the quantity given by $N_m := m + I_m \geq I_m$ goes to infinity as $m\to\infty$. (There are many ways to choose such a sequence of $N_m$, and it can be arranged that they monotonically increase if so desired.) Either way, we have now verified the claim. 

Therefore, for any $m\in\NN$, we have that there exists an $N_m$ such that for all $n\geq N_m$, we have:

$$ \Sinf - \frac1m < \Sm \leq \psum n\pi \leq \Sinf $$ 

Taking the limit as $m\to\infty$, and thus also $N_m\to\infty$, we find:

$$ \Sinf \leq \psum n\pi \leq \Sinf $$

Since $\pi$ was an arbitrary permutation, this proves that for any ordering we have $\psum \infty\pi = \Sinf$. 

By our original assumptions, $\psum \infty {\text{id}} = \sum_{k=1}^\infty a_k =L<\infty$. But since any permutation must agree with the unordered sum $\Sinf$, we have that $L=\psum \infty\pi$ for any permutation $\pi$. Thus, we have proved that if one ordering converges, then any order also converges to the same value. This completes the proof of the theorem. 
<div style="text-align: right; margin:1vw">$ \blacksquare $</div>



