---
layout: post
author: Manav Sehgal
category: theme
title:  "Starter Post"              # Title used in HTML Meta, Post Header, Recent Posts list
tags: blog jekyll                   # Tags to relate multiple topics to a post
---

This is a starter post which you can duplicate to create your own. It demonstrates Markdown syntax, Liquid tags, and GitHub whitelisted HTML.

**Note.** Read this post as Markdown source to see the easy to 
write [syntax](https://raw.githubusercontent.com/open-start/opentheme/master/_posts/blog/2014-12-1-starter-post.md) 
for creating this HTML page.

### Markdown

#### This is a level four heading. Use hash symbol and repeat for levels.

Dividers can separate sections with three dashes or minus symbols. Not to be confused with the three dashes fencing the YAML frontmatter on top of the post.

Code blocks can be fenced with three back-apostrophe characters like so.

{% highlight javascript linenos %}
{% raw  %}
  var some_variable = "Hello";
  if (some_variable == "Hello") {
    // Do something...
  }
{% endraw  %}
{% endhighlight %}


Text formatting can include **bold text**, and *emphasized text*.

> Block quotes start with a greater than symbol.

Normal text can be written like in any editor.

New line or ENTER twice to start on next line.


### Liquid Tags and Jekyll Variables

You can use Liquid Tags to reference other posts. Here is one on [design goals for OpenTheme]({% post_url /blog/2014-11-29-design-goals-for-opentheme %}).

Site variables can be used as well. Here is the tagline for OpenTheme as descibed in a site variable - **{{ site.tagline }}**.
Page variables are also available. Title for this post is **{{ page.title }}** and it uses **{{ page.layout }}** template.

### References

- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a good place to start for Markdown syntax.
- [GitHub Whitelisted HTML](https://github.com/github/markup#html-sanitization) lists valid HTML tags that GitHub allows in your posts.
- [Jekyll Variables](http://jekyllrb.com/docs/variables/)
- [Template Use Cases for Jekyll Variables](http://jekyllrb.com/docs/templates/)
- [Liquid Tags](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
