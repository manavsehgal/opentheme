---
layout: post
author: Manav Sehgal
category: theme
title: Starter Post - Google Maps Embed
tags: maps embeds
image: /img/embed/map.png
---

You can embed Google maps using custom embed created for OpenTheme. 

Just provide the location in url escaped format. Specify custom height for the map viewer, otherwise site default is taken.

{% include embed-google-map.html location="The+Shard+London" %}

Map width adjusts responsively to container.

{% highlight liquid %}
{% raw  %}
  {% include embed-google-map.html location="The+Shard+London" height=768 %}
{% endraw %}
{% endhighlight %}

Use this code to embed Google Map with specific height in pixels. 
Remove the height attribute and site default is taken instead.

