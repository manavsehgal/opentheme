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

### Collaborative Data Driven Documents

Modern websites rely heavily on presenting structured data. 
As content authors, managing database servers, concurrency, performance, are concerns best handled by the platform.
We want the flexibility to easily define, manipulate, and present our data structure.

One of the ways to achieve this on static websites is by using structured data documents served from GitHub.

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