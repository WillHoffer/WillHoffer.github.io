---
layout: default
title: Quidditas
description: My Personal Blog
---
<h2>Navigation</h2>
<ul>
  <li><a href="#Sorted-Chronologically">Posts sorted chronologically</a></li>
  <li><a href="#Sorted-by-Topic">Posts sorted by topic</a></li>
</ul>

<h2>About Quidditas</h2>
<p>Quidditas is the name I've given to my personal blog. My main goal is to post about interesting topics, create educational material, and talk about my current research. Additionally, you can also find tutorials and references that I've written; see the navigation link for the compilation of these posts. </p>

<p>The word “quidditas” itself is Latin, with a rather odd definition: <i>quidditas</i> is the answer to the question, “What is the thing?” From <a href="https://latin-words.com/">William Whitaker's Words</a>:
<pre>
quidditas            N      3 1 NOM S F                 
quidditas            N      3 1 VOC S F                 
quidditas, quidditatis  N (3rd) F   [FEXCF]    Medieval
quiddity, what a thing is, essence of a thing; (answers question quid est res);
</pre>
The title is an homage to a seminar at my alma mater entitled the <i>What is...? Seminar</i>. You can even find my old talk notes from 2018 <a href="https://math.osu.edu/whatis_previous">on their webpage</a>. </p>

<h2 id="Sorted-Chronologically">Sorted Chronologically</h2>
<details>
<summary>Click to View.</summary>
<div style="overflow:auto; max-height: 75vh">
	<ul class="posts">
		{% for post in site.posts %} {% if post.path contains 'quidditas' %}
			<li>
				<span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
			</li>
		{% endif %}{% endfor %}
	</ul>
</div>
</details>
	
<h2 id="Sorted-by-Topic">All Pages, Sorted by Tag</h2>
Here is a list of all pages, but sorted by topics. The topic names are in alphabetical order.
<details>
<summary>Click to View Tags.</summary>
<div style="overflow:auto; max-height: 75vh">
	<!-- Create a list "tagList" of all tags restricted to posts in this category -->
	<!--    (Iterates over all posts in the category, and removes duplicate tags) -->
	{%- capture list -%}
		{%- for post in site.categories['quidditas'] -%}
			{%- for tag in post.tags -%}
				^{{ tag }}
			{%- endfor -%}
		{%- endfor -%}
	{%- endcapture -%}
	{% assign tagList = list | remove_first: "^" | split: "^" | uniq | sort %}
	<!-- For each tag with posts in the category, list the corresponding posts in the category -->
	{% for tagName in tagList %}
	<li><span class="tag">{{ tagName }}</span>
		<ul>
		{% for post in site.categories['quidditas'] %}
			{% if post.tags contains tagName %}
				<li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
			{% endif %}
		{% endfor %}
		</ul>
	</li>
	{% endfor %}
</div>
</details>

## Teaching Notes
See <a href="/content/teaching">this page</a> for posts regarding course I have taught.