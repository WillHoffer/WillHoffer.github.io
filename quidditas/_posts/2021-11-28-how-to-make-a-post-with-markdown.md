---
title: "How to Make a Post with Markdown"

tags:
- website
---

## Introduction

This article is a simplified version of a previous post about using R Markdown. While R Markdown is useful for adding code snippets or interactivity to an article, it is not strictly necessary. Regular markdown posts are far easier to create.


## How To Make a Text Post

Make a new file in a directory on your website such as `yourGitHubRepoName.io/posts` and save it as a markdown file, say `YYYY-MM-DD-title.md`. 

Add the following text to the new file:

```
---
title: "Your Title Here"
description: "Your name or a short description here"
---

Your post text here.

```

That's it. To access the post, you can make a list of all posts somewhere on your website. An automatic way to do so with Liquid is the following code. You can add this to any visible webpage on your site, for instance in a file such as `yourGitHubRepoName.io/posts/index.html` or `yourGitHubRepoName.io/posts/index.md`. Note that if you change the folder name from `posts` you must also change it in the code below where it says `if post.path contains 'FOLDER_NAME_HERE'`.

```
{% raw %}
<h2>List of Posts:</h2>
<ul class="posts">
{% for post in site.posts %} {% if post.path contains 'posts' %}
  <li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>
{% endraw %}
```

For example, this would produce the following on my website:
<h2>List of Posts:</h2>
<ul class="posts">
{% for post in site.posts %} {% if post.path contains 'quidditas' %}
  <li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>


## How to Add $\LaTeX$ Support

MathJax is a script which compiles and displays $\LaTeX$. You should add the following to the beginning of any webpages if you want this script to run:

```
<!-- Begin MathJax Script -->
<script>
  MathJax = {
    tex: {
      inlineMath: [
        [ '$', '$' ],
        [ '\\(', '\\)' ]
      ],
      displayMath: [
        [ '\\[', '\\]' ],
        [ '$$', '$$' ]
      ],
      processEscapes: true, // Use \$ for dollar sign
    }
  }
</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<!-- End MathJax Script -->
```
You can also find the most up-to-date MathJax script include info from [this website](https://www.mathjax.org/#gettingstarted) directly.

This code adds MathJax, as well as some custom settings to enable the following syntax: `$ $` or `\( \)` for inline $\LaTeX$ and `\[ \]` or `$$ $$` for larger displayed math. The differences are usually small, but matter for things like limits on a sum, e.g. $\sum_{n=1}^\infty \frac1n=\infty$ versus:

$$\sum_{n=1}^\infty \frac1n=\infty$$

Notably, using display math syntax such as `$$ $$` inside a paragraph automatically can get switched to inline math, and has been useful if the `$ $` syntax does not work. For example, `$\{x\}$` should display a singleton set, but inline it only displays "$\{x\}$" when it should be $$\{x\}$$. The latter is made using the code `$$\{x\}$$` inline. (Escaping the slashes `\` does work, though: `\\( \\{x\\} \\)` or `$\\{x\\}$` produces \\( \\{x\\} \\) and $\\{x\\}$, respectively.)


#### Automatic $\LaTeX$ Support
Notably, there is a much nicer way to include this on any page automatically using layouts/includes. 

Create a file `yourGitHubRepoName.io/_layouts/default.html`-- see for instance the following [documentation](https://jekyllrb.com/docs/step-by-step/04-layouts/) on Jekyll's site.

Add the following code to your new page (optional, if you are using `default`):
```
---
title: "Your Title Here"
description: "Your name or a short description here"

layout: default
---

Your post text here.

```

In the layout page, add the MathJax script:
```
{% raw %}
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
    <!-- Begin MathJax Script -->
    <script>
    MathJax = {
        tex: {
        inlineMath: [
            [ '$', '$' ],
            [ '\\(', '\\)' ]
        ],
        displayMath: [
            [ '\\[', '\\]' ],
            [ '$$', '$$' ]
        ],
        processEscapes: true, // Use \$ for dollar sign
        }
    }
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <!-- End MathJax Script -->
  </head>
  <body>
    {{ content }}
  </body>
</html>
{% endraw %}
```

If you have `_includes` set up, you may also put the script there in a file that is added to the header. This makes the file easier to find, and on can more easily be added to other layouts. 
