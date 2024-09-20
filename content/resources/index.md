---
title: Resources from Quidditas
author: Will Hoffer
description: Useful Links & References
---

## Written Tutorials

These are tutorials that I have written and published. Topics include how I build and edit my website or other tasks such as installing certain programs.
<!-- <details> -->
<!-- <summary>Click to View.</summary> --> 
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
		{% if tagName == "tutorial" %}
				<ul>
				{% for post in site.categories['quidditas'] %}
					{% if post.tags contains tagName %}
						<li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
					{% endif %}
				{% endfor %}
				</ul>
		{% endif %}
	{% endfor %}
</div>
<!-- </details> -->

## Resource Compilations

I have compiled a lot of utilities, references, and links in my blog. Here are all the posts tagged as resources.

<!-- <details> -->
<!-- <summary>Click to View.</summary> -->
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
		{% if tagName == "resource" %}
				<ul>
				{% for post in site.categories['quidditas'] %}
					{% if post.tags contains tagName %}
						<li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
					{% endif %}
				{% endfor %}
				</ul>
		{% endif %}
	{% endfor %}
</div>
<!-- </details> -->