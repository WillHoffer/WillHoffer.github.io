---
title: "Quantum Statistical Physics"
tags: 
    - mathphys
---

## Introduction

The other day I ran into a very odd conundrum, regarding the difference between quantum superposition and statistical mixtures. I am tempted to describe the difference as two different kinds of "randomness," but I wanted to make this more precise. This post is my work at elucidating the difference.

## Pure and Mixed States

First, let's establish two types of states: pure and mixed. As a preliminary definition, we say that a pure state is an exact description of a state, and that a mixed state is a convex combination of pure states. (By "convex combination," we mean that the sum over pure states is weighted with two conditions: the weights are each nonnegative, and the sum of the weights adds up to one.)

### Ordinary Statistical Physics

For now, we can stay within the realm of ordinary statistical physics, and for concreteness let's supposed we have a box filled with an ideal gas. A pure state, say for a given gas particle, might be an exact description of its momentum and energy. A (pure) state of the overall system might be the explicit description of this data for every single particle within the box. However, for a large box filled with Avagadro's number of particles, we cannot hope to know all of the particles' momenta and energies. Instead, we might use other quantities to describe the box. Average (translational) kinetic energy, for instance, would be one such metric. Via the equipartition theorem, if our ideal mixture is in thermal equilibrium, then this average kinetic energy is proportional to the thermodynamic temperature. So, we might have a box of gas with a thermometer to measure its temperature, and then we could deduce the average kinetic energy of the gas from looking at the termometer.

Which particles in our box have that exact amount of kinetic energy? Certainly, it need not be all of them. Most of the time, we might expect our gas particles to be colliding (elastically) with each other, and at myriad different angles. In such collisions, the particles can afterwards have different kinetic energies from their initial values. So, even if our particles all started with that exact amount of kinetic energy, when collisions at arbitrary incident directions occur, we would expect that changes can occur and that this would cease to be the case. (The notion of entropy more precisely describes how this all-the-same configuration is different from another mixture. According to the second law of thermodynamics,  ) Instead, it would be more reasonable to guess that our system has a distribution of kinetic energies, where some are higher than average, and some less than average. We cannot hope to know the exact energy of each particle, though.

Instead, we might describe our system as a statistical mixture of different (pure) states. One possibility is that every particle has the exact same kinetic energy. Another possibility is that the energies are distributed roughly according to a Gaussian distribution centered at the average kinetic energy. The former is far more unlikely, considering that collisions will often leave particles with difference kinetic energies, so we can weight it with a probability to represent the qualitative "unlikeliness." In other words, we can build a probability space by listing out every possible state in which our system could be, and then our statistical mixture is a weighted sum of possible states based on the probability of that state occurring coming from our probability space. 

## Work in Progress

The article is a work in progress. The next topic is statistical ensembles, and collections of identitcal systems on which we can perform the experiment multiple times to determine such probabilities for the mixture. Once we understand how to build a statistical mixture, then we will discuss a quantum system. In particular, quantum systems may contain superpositions. The novel feature of quantum superpositions is that the individual pieces may interfere with each other, which will affect the probabilities for measuring certain outcomes. Lastly, we talk about how to combine these two aspects of physics, creating statistical mixtures of quantum systems.


## Further Reading

- [Hyperphysics: Kinetic Temperature](http://hyperphysics.phy-astr.gsu.edu/hbase/Kinetic/kintem.html)
- [Wikipedia: Equipartition Theorem](https://en.wikipedia.org/wiki/Equipartition_theorem)
- [Steven J. van Enk, U. Oregon: Mixed States and Pure States](https://pages.uoregon.edu/svanenk/solutions/Mixed_states.pdf)
- [Marianne Breinig, U. Tennessee: Statistical Mixtures of States](http://electron6.phys.utk.edu/qm1/modules/m7/statistical.htm)