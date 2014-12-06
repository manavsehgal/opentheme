---
layout: post                # Name of the _layouts template used by this post
title:  "Starter Post"      # Title used in HTML Meta, Post Header, Recent Posts list
date:   2014-12-1 12:00:00  # Date is picked up for Post Header, Recent Posts list
author: Manav Sehgal        # Post author
tags: sample blog jekyll    # Tags to relate multiple topics to a post
category: theme             # Only use one category. Multiple categories will duplicate content. Not good for SEO.
---

This is a starter post which you can duplicate to create your own. It demonstrates Markdown syntax, Liquid tags, and GitHub whitelisted HTML.

**Note.** Read this post as Markdown source to see the easy to 
write [syntax](https://raw.githubusercontent.com/open-start/opentheme/master/_posts/blog/2014-12-1-starter-post.md) 
for creating this HTML page.

### Markdown

#### This is a level four heading. Use hash symbol and repeat for levels.

Dividers can separate sections with three dashes or minus symbols. Not to be confused with the three dashes fencing the YAML frontmatter on top of the post.

Code blocks can be fenced with three back-apostrophe characters like so.

```
var some_variable = true;
```

Text formatting can include **bold text**, and *emphasized text*.

> Block quotes start with a greater than symbol.

Normal text can be written like in any editor.

New line or ENTER twice to start on next line.


### Liquid Tags and Jekyll Variables

You can use Liquid Tags to reference other posts. Here is one on [design goals for OpenTheme]({% post_url /blog/2014-11-29-design-goals-for-opentheme %}).

Site variables can be used as well. Here is the tagline for OpenTheme as descibed in a site variable - **{{ site.tagline }}**.
Page variables are also available. Title for this post is **{{ page.title }}** and it uses **{{ page.layout }}** template.

### <a name="twitter"></a>Social Embeds

You can add social media content as embeds. Here is an example of Twitter post announcing OpenTheme.

<blockquote class="twitter-tweet" lang="en"><p>Create Awesome Websites on GitHub for Free! <a href="http://t.co/tXj8H17vZE">http://t.co/tXj8H17vZE</a> <a href="http://t.co/2VCbLf0KrL">pic.twitter.com/2VCbLf0KrL</a></p>&mdash; Manav Sehgal (@manavsehgal) <a href="https://twitter.com/manavsehgal/status/539376525720977410">December 1, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### <a name="youtube"></a>Media Embeds

Here is an example of a custom embed available as a configurable _include with OpenTheme.
The size is parametrized as per theme. So if you turn on post bar then size is small, otherwise large. 
Features like player controls are configurable at site level, within _config.yml.
To embed a YouTube video you just need to copy the unique video id at the end of the video url.
OpenTheme takes care of the rest!

{% include embed-youtube.html video="eRsGyueVLvQ" %}

### <a name="map"></a>Embed Google Maps

You can embed Google maps using custom embed created for OpenTheme. Just provide the location in url escaped format. 
Specify custom height for the map viewer, otherwise site default is taken. Width adjusts responsively to container.

{% include embed-google-map.html location="The+Shard+London" height=450 %}

### References

- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a good place to start for Markdown syntax.
- [GitHub Whitelisted HTML](https://github.com/github/markup#html-sanitization) lists valid HTML tags that GitHub allows in your posts.
- [Jekyll Variables](http://jekyllrb.com/docs/variables/)
- [Template Use Cases for Jekyll Variables](http://jekyllrb.com/docs/templates/)
- [Liquid Tags](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
