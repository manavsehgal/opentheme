---
layout: post
author: Manav Sehgal
category: theme
title: Content Strategy For Startup Websites
tags: feature content
image: /img/opentheme-workflow.png
---

How important is your website's content strategy for your startup or small team?

OpenTheme content strategy can be a good starting point for your website. It promotes a product - a modern theme.
The website addresses an active and vibrant target audience - GitHub community. 
OpenTheme showcases user experience best practices - [Semantic UI](http://semantic-ui.com/). 
Websites built with OpenTheme use latest content workflow tool-chain including Jekyll and GitHub.

OpenTheme Content Strategy can be summarized as the 6-S guiding principles and the [6-R design goals]({% post_url /blog/2014-11-29-design-goals-for-opentheme %}).

### The 6-S Guiding Principles

**Snackable.** Provide easy, quick views for your content.

**Shareworthy.** Design content that audience wants to reuse, share.

**Semantic.** Add structure and meaning to content. Allow humans and software to understand your content in the same way.

**Speedy.** Content publishing and presentation speedy and high performance.

**Simple.** Keep things simple. Authoring content should be intuitive, easy, and efficient.

**Scalable.** Scaling cost-effectively for bandwidth, compute, storage, and concurrency.

### Blog Posts Used For Theme Tutorials

Long form theme tutorials or articles like this one are created using Markdown and rendered as blog posts. 
You can add following features by adding *name: value* pairs in the front of post content.

**layout** Change the layout of the post using one from *_layouts* folder.

**image** Add a post image. Recommend 640x300 size image which works well resized to thumbnail and when social sharing.

**tags** Add tags for posts related to a certain topic.

**category** Further classify post. This is also picked up as a folder hierarchy for creating SEO friendly urls.

**author** Post author name.

**title** Post title is picked up from here. Added to HTML meta and post masthead.

#### Conventions For Blog Posts

**date** Publish date for the post is now picked from file name following YYYY-MM-DD-Title-Of-Blog-Post convention. Also decides the folder hierarchy for pretty permalinks.

**_config defaults** You can set/change defaults for category, layout, author based on type and folder of post/pages.

### YAML Data For Embed Plugins

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

{% include embed-cards.html cards=2 %}

Here is an example of first two cards displayed using following embed code.

{% highlight liquid %}
{% raw  %}
  # Include cards based on site.recent_items default
  {% include embed-cards.html %}

  # Include cards specifying count of cards
  {% include embed-cards.html cards=2 %}
{% endraw %}
{% endhighlight %}


Best part of describing content in YAML? It can be edited using GitHub directly.
Eases pull requests for content, when you are collaborating with the community.

You can view [OpenTheme embed YAML file on GitHub](https://github.com/open-start/opentheme/blob/master/_data/embeds.yml).

This structure can be further "relaxed" by handling default behaviour in the respective views. 
This way only minimal number values are specified for each document (record).