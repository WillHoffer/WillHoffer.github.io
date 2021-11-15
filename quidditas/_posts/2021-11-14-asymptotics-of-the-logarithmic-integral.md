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

> #### Proof
> 
> Integrating $\li(x)$ by parts, we find:
> 
> $$ \begin{align*} 
>     \li(x)  &= \int_0^x \frac{1}{\log t}dt \\
>             &= \left.\frac{t}{\log t}\right\vert_0^x - \int_0^x -\frac{1}{(\log t)^2}\frac{1}{t}tdt \\
>             &= \frac{x}{\log x} + \int_0^x \frac{dt}{(\log t)^2}
> \end{align*} $$
> 
> We have more generally that in fact:
> 
> $$ \int_0^x\frac{dt}{(\log t)^n} = \frac{x}{(\log x)^{n}} + n\int_0^x \frac{dt}{(\log t)^{n+1}} $$
> 
> Which follows from the same calculation:
> 
> $$ \begin{align*} 
>     \int_0^x\frac{dt}{(\log t)^n}  
>         &= \left.\frac{t}{(\log t)^n}\right\vert_0^x - \int_0^x \frac{-n}{(\log t)^{n+1}}\frac{1}{t}tdt \\
>         &= \frac{x}{(\log x)^n} + n\int_0^x \frac{dt}{(\log t)^{n+1}}
> \end{align*} $$
> 
> #### Lemma 
> Proceeding by induction, we will now establish the following for any $N\geq 1$:
> 
> $$ \li(x) = \sum_{n=0}^{N-1} \frac{n! x}{(\log x)^{n+1}} + N!\int_0^x\frac{dt}{(\log t)^{N+1}} $$
> 
> > #### Proof
> > The base case with $N=1$ is exactly the first integration by parts we have performed above. So, we may suppose that the formula holds for a given value of $N$ and seek to show that the proposition holds for the next value $N+1$. To that end, starting from the $N^{\text{th}}$ expression we assume to hold, we compute:
> > 
> > $$ \begin{align*} 
> >     \li(x) &= \sum_{n=0}^{N-1} \frac{n!\, x}{(\log x)^{n+1}} + N!\int_0^x\frac{dt}{(\log t)^{N+1}} \\
> >         &= \sum_{n=0}^{N-1} \frac{n!\, x}{(\log x)^{n+1}} + N!\left( \frac{x}{(\log x)^{N+1}} + (N+1)\int_0^x \frac{dt}{(\log t)^{N+2}}  \right) \\ 
> >         &= \sum_{n=0}^{N-1} \frac{n!\, x}{(\log x)^{n+1}} + \frac{N!\,x}{(\log x)^{N+1}} + (N+1)!\int_0^x \frac{dt}{(\log t)^{N+2}}  \\
> >         &= \sum_{n=0}^{N} \frac{n!\, x}{(\log x)^{n+1}} + (N+1)!\int_0^x \frac{dt}{(\log t)^{N+2}}
> > \end{align*} $$
> > 
> > Thus, the first expression holds, and whenever the $N^{\text{th}}$ expression holds, the $(N+1)^{\text{st}}$ expression holds as well. Thus by induction, the claim holds for any $N\geq 1$.
> > 
> > <div style="text-align: right; margin:1vw">$ \blacksquare $</div>
> 
> The result above shows the logarithmic integral as equal to the asymptotic series' terms plus an integral remainder. In order to establish the asymptotic series, we must show the following for each value of $N$: 
> 
> $$ \li(x) - \frac{x}{\log x}\sum_{n=0}^{N-2} \frac{n! }{(\log x)^{n}} = O\left( \frac{x}{(\log x)^{N}} \right) $$
> 
> Using the established result, we know that: 
> 
> $$ \li(x) - \frac{x}{\log x}\sum_{n=0}^{N-2} \frac{n! }{(\log x)^{n}} = \frac{(N-2)!\, x}{(\log x)^{N-1}} + \frac{(N-1)!\, x}{(\log x)^{N}} + N!\int_0^x\frac{dt}{(\log t)^{N+1}} $$
> 
> The first two terms of the right hand side are clearly of the correct order $O(x(\log x)^{-N})$, so it is the integral term that we must estimate. In particular, we compute their ratio to be: 
> 
> $$ \begin{align*}
>     \frac{(\log x)^N}{x}\int_0^x \frac{dt}{(\log t)^{N+1}} 
>         &= \frac{(\log x)^N}{x} \int_{-\infty}^{\log x} \frac{e^u}{u^{n+1}}du \\
>         &\leq  \frac{(\log x)^N}{x} \int_{-\infty}^{\log x} \frac{e^u}{(\log x)^{n+1}}du \\
>         &= \frac{1}{x\log x}\int_{-\infty}^{\log x} e^udu \\
>         &= \frac{1}{x\log x}\left.e^u\right\vert_{-\infty}^{\log x} \\
>         &= \frac{1}{\log x}
> \end{align*} $$
> 
> Where we have used the substitution $u=\log t$, $e^udu=dt$ and the fact that since $u\leq \log x$, $\frac{1}{\log x}\leq \frac{1}{u}$. As $x\to\infty$, this quantity approaches zero, which proves that $\int_0^x (\log t)^{-(N+1)}dt=O(x(\log x)^{-N})$. 
> 
> Thus, the asymptotic expansion is established for the logarithmic integral $\li(x)$. Since each of the asymptotic error terms $x(\log x)^{-N}$ is unbounded, we may absorb the constant $\li(2)$ into error term to express the asymptotics of $\Li(x)$:
> 
> $$ \begin{align*}
>     \Li(x) &= \li(x) - \li(2) \\
>         &=  \frac{x}{\log x}\sum_{n=0}^{N-2} \frac{n! }{(\log x)^{n}} -\li(2) + O\left( \frac{x}{(\log x)^{N}} \right) \\
>         &= \frac{x}{\log x}\sum_{n=0}^{N-2} \frac{n! }{(\log x)^{n}} + O\left( \frac{x}{(\log x)^{N}} \right)
> \end{align*} $$
> 
> <div>This could be seen, for instance, via the following argument: if $f(x)\to\infty$ as $x\to\infty$ and $|f(x)| \leq  C g(x)$, then $|f(x) - a|\leq 2|f(x)| \leq 2 C g(x) $ for all $x$ large enough so that $f(x)>a$.</div>
> 
> This completes the proof of the theorem. 
> <div style="text-align: right; margin:1vw">$ \blacksquare $</div>