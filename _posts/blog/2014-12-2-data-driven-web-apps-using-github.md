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

### Collaborative Data Driven Documents

Simple, structured documents can be expressed in YAML or JSON. 
Creating such documents within _data folder enables access to YAML defined structure
as an object within Liquid markup.

OpenTheme demonstrates this feature to showcase custom plugins or reusable embeds.

You can see [Semantic UI Card view for these embeds here](/embeds/).
The data behind these embed is editable directly as a [GitHub YAML Frontmatter document here](https://github.com/open-start/opentheme/blob/master/_data/embeds.yml).

{% include embed-cards.html cards=1 %}

This is the code used in post to add the above card.

{% highlight liquid %}
{% raw  %}
  {% include embed-cards.html cards=1 %}
{% endraw %}
{% endhighlight %}

Adding a new card view with data from more than 10 structured key-value pairs is as easy as editing an outline-like text document.

GitHub Pages (Jekyll pre-processor) along with Semantic UI, take care of the front-end rendering auto-magically!