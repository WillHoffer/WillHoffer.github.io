---
layout: default
title:  "Teaching Content"
author: "Will Hoffer"
description: Online Class Resources
---

## Overview
Here, you can find some teaching materials I've made for courses, online interactive tools, and some explanatory posts on important topics.

If you are a current student, go to the course Canvas page. Nowadays, I post information there directly instead of using this website.


<h2 id="Sorted-by-Topic">All Pages, Sorted by Tag</h2>
<details>
<summary>Click to View Tags.</summary>
<div style="overflow:auto; max-height: 75vh">
	<!-- Create a list "tagList" of all tags restricted to posts in this category -->
	<!--    (Iterates over all posts in the category, and removes duplicate tags) -->
	{%- capture list -%}
		{%- for post in site.categories['teaching'] -%}
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
		{% for post in site.categories['teaching'] %}
			{% if post.tags contains tagName %}
				<li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
			{% endif %}
		{% endfor %}
		</ul>
	</li>
	{% endfor %}
</div>
</details>


<h2 id="Sorted-Chronologically">All Pages, Sorted Chronologically</h2>
<details>
<summary>Click to View.</summary>
<div style="overflow:auto; max-height: 75vh">
<ul class="posts">
{% for post in site.posts %} {% if post.path contains 'teaching' %}
  <li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>
</div>
</details>