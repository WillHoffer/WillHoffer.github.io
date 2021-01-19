---
title: "On Higher Order Linear ODEs"
author: "Will Hoffer"
date: "January 12, 2021"  # DO NOT USE Sys.Date()
output:                    # DO NOT CHANGE
  prettydoc::html_pretty:  # DO NOT CHANGE
    theme: cayman          # DO NOT CHANGE
    highlight: github      # DO NOT CHANGE
header-includes: \usepackage{instrumenta}
---

## Introduction

Herein, we provide some Mathematica code examples for solving higher order linear ordinary differential equations. As written, these notebooks
solve a third order homogeneous linear ODE with constant coefficients using the characteristic equation. Click the bottom right menu and open 
on Wolfram Alpha's site to make your own copy and play around with the settings. The second of the two is the Mathematica notebook, and the first 
is a computable document file that requires only a free plugin. (Note the Mathematica is available to many university students, including
UCR students.)

<!--
<center>
  <button type="button">Rerun</button>
</center>


### Embedded CDF Notebook
<div id="notebookContainer"></div>
-->

[HighOrderLinearODEs.cdf](https://www.wolframcloud.com/obj/whoffer3/Published/HighOrderLinearODEs.cdf)

<iframe src="https://www.wolframcloud.com/obj/whoffer3/Published/HighOrderLinearODEs.cdf?_embed=iframe" width="800" height="1000"></iframe>

[HighOrderLinearODEs.nb](https://www.wolframcloud.com/obj/whoffer3/Published/HighOrderLinearODEs.nb)

<iframe src="https://www.wolframcloud.com/obj/whoffer3/Published/HighOrderLinearODEs.nb?_embed=iframe" width="800" height="1000"></iframe>

<!--
<script crossorigin src="https://unpkg.com/wolfram-notebook-embedder@0.1/dist/wolfram-notebook-embedder.min.js"></script>
<script>
  WolframNotebookEmbedder.embed(
    'https://www.wolframcloud.com/obj/whoffer3/Published/HighOrderLinearODEs.cdf',
    document.getElementById('notebookContainer')
  )
  
  embedding.then(function (nb) {
    // This will reset the DynamicModule variable diffEqOrder 
    // in the first cell of the notebook.
    
    return nb.getCells().then(function (cells){
      nb.setDynamicModuleVariable({
        cellId : cells[0].id,
        name : ' diffEqOrder', 
        value : 2
      });
    });
  })
  
</script>
-->