---
title: "Asymptotics of the Logarithmic Integral"

tags:
- asymptotics
- number-theory
---

$$
\newcommand{\Li}{\text{Li}}
\newcommand{\li}{\text{li}}
$$

## The Logarithmic Integral

The logarithmic integral is given by the following:

$$ \Li(x) = \int_2^x \frac{dt}{\log t} $$

Another variant of this integral is given by the integral starting from zero:

$$ \li(x) = \int_0^x \frac{dt}{\log t} $$

The former has the advantage of avoiding the singularity at $t=1$. However, if one interprets the integral as a [Cauchy principal value](https://mathworld.wolfram.com/CauchyPrincipalValue.html), then the integral makes sense; see for instance [its full definition here](https://mathworld.wolfram.com/LogarithmicIntegral.html). 

The value $\li(2)$ is finite, so we have that they only differ by a constant: $\Li(x) = \li(x) -\li(2)$. Because we are interested in the asymptotics of the function as $x$ becomes very large, we have that $\Li(x) \sim \li(x)$, as both functions are increasing to infinity whence the constant is negligible. 

## Connection to the Prime Number Theorem

The logarithmic integral shows up in the statement of the prime number theorem. If $\pi(x)$ denotes the number of prime numbers less than or equal to $x$, then we have that:

$$\pi(x) \sim \frac{x}{\log(x)} $$

This formulation is due to Gauss, but we note the slightly more precise estimate suggested to Gauss by Dirichelt:

$$ \pi(x) \sim \Li(x) $$

Our goal is to show that these two functions are in fact asymptotic to each other, whereby these formulations of the prime number theorem are the same. That is, we wish to prove:

$$ \Li(x) \sim \frac{x}{\log(x)} $$

## Theorem: Asymptotic Expansion of the Logarithmic Integral

The logarithmic integral starting from zero $\li(x)$ has the following asymptotic expansion as $x\to\infty$:

$$\li(x) \sim \frac{x}{\log x}\sum_{n=0}^\infty \frac{n!}{(\log x)^n} $$

Equivalently, the logarithmic integral starting from two has the same asymptotic expansion:

$$\Li(x) \sim \frac{x}{\log x}\sum_{n=0}^\infty \frac{n!}{(\log x)^n} $$

#### Proof

Integrating $\Li(x)$ by parts, we find:

$$ \begin{align*} 
    \Li(x)  &= \int_2^x \frac{1}{\log t}dt \\
            &= \left.\frac{t}{\log t}\right\vert_2^x - \int_2^x \frac{-1}{(\log t)^2}\frac{1}{t}tdt \\
            &= \frac{x}{\log x}-\frac{2}{\log 2} + \int_0^x \frac{dt}{(\log t)^2} \\
            &= C_1 + \frac{x}{\log x} + \int_0^x \frac{dt}{(\log t)^2}
\end{align*} $$

Here, $C_1 = -\frac{2}{\log 2}$. We have more generally that in fact:

$$ \int_0^x\frac{dt}{(\log t)^n} = C+\frac{x}{(\log x)^{n}} + n\int_2^x \frac{dt}{(\log t)^{n+1}} $$

Where here $C=- \frac{2}{(\log 2)^n}$. This follows from the same calculation:

$$ \begin{align*} 
    \int_0^x\frac{dt}{(\log t)^n}  
        &= \left.\frac{t}{(\log t)^n}\right\vert_2^x - \int_2^x \frac{-n}{(\log t)^{n+1}}\frac{1}{t}tdt \\
        &= \frac{x}{(\log x)^n} - \frac{2}{(\log 2)^n} + n\int_0^x \frac{dt}{(\log t)^{n+1}} \\
        &= C+\frac{x}{(\log x)^{n}} + n\int_2^x \frac{dt}{(\log t)^{n+1}} 
\end{align*} $$

The asymptotic expansion will arise from repeating the integration by parts process ad infinitum. The following lemma establishes this process:

> #### Lemma 
> Proceeding by induction, we will now establish the following for any $N\geq 1$:
> 
> $$ \Li(x) =  C_N + \sum_{n=0}^{N-1} \frac{n! x}{(\log x)^{n+1}} + N!\int_2^x\frac{dt}{(\log t)^{N+1}} $$
> 
> Here, $C_N = -\frac{2}{\log 2}\sum_{n=0}^{N-1}\frac{n!}{(\log 2)^{n}}$ is a constant depending only on $N$.
> <details>
> <summary>Proof</summary>
> The base case with $N=1$ is exactly the first integration by parts we have performed above. So, we may suppose that the formula holds for a given value of $N$ and seek to show that the proposition holds for the next value $N+1$. To that end, starting from the $N^{\text{th}}$ expression we assume to hold, we compute:
> 
> $$ \begin{align*} 
>     \Li(x) &= C_N + \sum_{n=0}^{N-1} \frac{n!\, x}{(\log x)^{n+1}} + N!\int_2^x\frac{dt}{(\log t)^{N+1}} \\
>         &= C_N +\sum_{n=0}^{N-1} \frac{n!\, x}{(\log x)^{n+1}} + N!\left( \frac{x}{(\log x)^{N+1}}-\frac{2}{(\log 2)^{N+1}} + (N+1)\int_2^x \frac{dt}{(\log t)^{N+2}}  \right) \\ 
>         &= C_N-\frac{2\,N!}{(\log 2)^{N+1}} +\sum_{n=0}^{N-1} \frac{n!\, x}{(\log x)^{n+1}} + \frac{N!\,x}{(\log x)^{N+1}} + (N+1)!\int_2^x \frac{dt}{(\log t)^{N+2}}  \\
>         &= -\frac{2}{\log 2}\sum_{n=0}^{N-1}\frac{n!}{(\log 2)^{n}}-\frac{2\,N!}{(\log 2)^{N+1}} +\sum_{n=0}^{N} \frac{n!\, x}{(\log x)^{n+1}} + (N+1)!\int_2^x \frac{dt}{(\log t)^{N+2}} \\
>         &= -\frac{2}{\log 2}\sum_{n=0}^{N}\frac{n!}{(\log 2)^{n}} +\sum_{n=0}^{N} \frac{n!\, x}{(\log x)^{n+1}} + (N+1)!\int_2^x \frac{dt}{(\log t)^{N+2}} \\
>         &= C_{N+1} +\sum_{n=0}^{N} \frac{n!\, x}{(\log x)^{n+1}} + (N+1)!\int_2^x \frac{dt}{(\log t)^{N+2}}
> \end{align*} $$
> 
> Here, $C_{N+1} = -\frac{2}{\log 2}\sum_{n=0}^{N}\frac{n!}{(\log 2)^{n}} $.
> 
> Thus, the first expression holds, and whenever the $N^{\text{th}}$ expression holds, the $(N+1)^{\text{st}}$ expression holds as well. Thus by induction, the claim holds for any $N\geq 1$.
> 
> <div style="text-align: right; margin:1vw">$ \blacksquare $</div>
> </details>

<!-- As a corollary of the lemma, if follows also that for each $N\geq 1$:

$$ \Li(x) = \li(x)-\li(2) = \sum_{n=0}^{N-1} \frac{n! x}{(\log x)^{n+1}} + N!\int_0^x\frac{dt}{(\log t)^{N+1}} $$ -->

The result above shows the logarithmic integral as equal to the asymptotic series' terms plus a constant and an integral remainder. In order to establish the asymptotic series, we must show the following for each value of $N$: 

$$ \Li(x) - \frac{x}{\log x}\sum_{n=0}^{N-1} \frac{n! }{(\log x)^{n}} = O\left( \frac{x}{(\log x)^{N+1}} \right) $$

Using the established result, we know that: 

$$ \Li(x) - \frac{x}{\log x}\sum_{n=0}^{N-1} \frac{n! }{(\log x)^{n}} =  C_{N}+ N!\int_2^x\frac{dt}{(\log t)^{N+1}} $$

We will show that the integral term is of the correct asymptotic order, and then absorb the constant into that error term of the correct order.

> #### Lemma
> 
> We have the following asymptotic equivalent for each $N\geq 1$:
> 
> $$ \int_2^x\frac{dt}{(\log t)^{N}} \sim \frac{x}{(\log x)^{N}} $$
>
> <details>
> <summary>Proof</summary>
> 
> The statement is equivalent to showing that the below limit evaluates to one. By making use of L'Hospital's rule (twice total), we observe:
>
> $$ \begin{align*}
>     \lim_{x\to\infty} \cfrac{ \int_2^x\cfrac{dt}{(\log t)^N} }{ \cfrac{x}{(\log x)^N} } 
>         &= \lim_{x\to\infty} \cfrac{ \frac{1}{(\log x)^N} }{ \cfrac{(\log x)^N - Nx(\log x)^{N-1}x^{-1} }{(\log x)^{2N}} } \\
>         &= \lim_{x\to\infty} \cfrac{ (\log x)^N }{ (\log x)^N - N(\log x)^{N-1}  } \\
>         &= \lim_{x\to\infty} \cfrac{\log x}{\log x -N} \\
>         &= 1
> \end{align*} $$
> 
> This proves the desired asymptotic equivalence. 
> <div style="text-align: right; margin:1vw">$ \blacksquare $</div>
> </details>

Next, since $x(\log x)^{-N}$ is increasing, we also have that the constant $C_N$ is of order $O(x(\log x)^{-N})$. Namely, because $N$ is fixed and $x(\log x)^{-N}$ is monotonically increasing, there exists an $x_0$ for which $x(\log x)^{-N} > C_N$ whenever $x>x_0$. In other words, the enitre right hand side of the expression just before the previous lemma is of order $O(x(\log x)^{-N})$. 

This proves the desired expansion for $\Li(x)$. In order to see that $\li(x)$ has the same expansion, we use the fact that $\li(x) = \Li(x) + \li(2)$ and the fact that the constant term is smaller than any asymptotic order $O(x(\log x)^{-N})$. As such, we may absorb the constant into each of the asymptotic error terms for any of the finite truncations, whereby establishing the full asymptotic expansion. 

This completes the proof of the theorem. 
<div style="text-align: right; margin:1vw">$ \blacksquare $</div>
