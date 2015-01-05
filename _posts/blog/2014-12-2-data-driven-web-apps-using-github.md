---
layout: post
author: Manav Sehgal
category: theme
title:  "Data Driven Web Apps Using GitHub"      
tags: data analytics
---

GitHub Pages can use JSON, YAML, CSV, Cloud stores like Fusion Tables, and Real-time databases like Firebase.

- Using YAML to create simple, collaborative data driven documents.
- Using CSV in GitHub Pages
- Using JSON
- Integrating Firebase
- Integrating Fusion Tables

### YAML Data For Embed Plugins

Simple, structured documents can be expressed in YAML or JSON. 
Creating such documents within _data folder enables access to YAML defined structure
as an object within Liquid markup.

OpenTheme uses one simple YAML data file to describe Embed plugins with 12 distinct structured attributes.

{% highlight yaml %}
{% raw  %}
  # Official name of embed
- name: Embedded Tweets
  # Description of embed
  about: An Embedded Tweet...
  # Social, News, Doc, RSS, Video, Photo...
  group: Social    
  # Image used in card view
  image: /img/embed/twitter-bird.jpg
  # Icon used in table view.
  icon: twitter            
  # Site, Layout, Post configurable.
  scope: None     
  # true/false = Is the embed UI responsive
  responsive: true
  # Does the embed work well on Github Pages
  jekyll_friendly: true
  # Rating based on popularity, features
  rating: 3                 
  # Link to to create embed
  create: https://twitter.com/              
  # Link to embed docs
  docs: https://dev.twitter.com/web/               
  # URL to usecase
  usecase: /theme/2014/11/29/starter-post/
{% endraw %}
{% endhighlight %}
  

Semantic UI Cards are used to represent a compact, snackable view of each embed.

{% include embed-cards.html cards=1 %}

Here is an example of a card displayed using following embed code.

{% highlight liquid %}
{% raw  %}
  # Include cards based on site.recent_items default
  {% include embed-cards.html %}

  # Include cards specifying count of cards
  {% include embed-cards.html cards=1 %}
{% endraw %}
{% endhighlight %}


Best part of describing content in YAML? It can be edited using GitHub directly.
Eases pull requests for content, when you are collaborating with the community.

You can view [OpenTheme embed YAML file on GitHub](https://github.com/open-start/opentheme/blob/master/_data/embeds.yml).

This structure can be further "relaxed" by handling default behaviour in the respective views. 
This way only minimal number values are specified for each document (record).

