---
layout: post
title:  "Design Goals for OpenTheme"
date:   2014-11-29 12:00:00
author: Manav Sehgal
tags: best-practices
category: design
---

Rapid, Responsive, Reactive, Reusable. Convention over Configuration over Coding.

### Responsive

OpenTheme blog works well on multiple screen sizes. 
Scaling content and features to Mobile, Tablet, Desktop form factors, 
with zero to minimal effort on your part.

### Rapid

We have a goal to achieve the *One Minute Content Workflow* from creating a post to going live.
This one minute should take care of asset pipeline incluing HTML, JS, CSS, image pre-processing,
testing your web app where tests are included, optimizing your assets where required,
including features that you designed for, saving a version of GitHub, publishing to live.

### Reusable

Every feature on OpenTheme templates is designed with reusability in mind.
OpenTheme's growing list of _includes contains reusable partials
for tag lists, category lists, recent posts, top menu, post side bar, page bar, 
header, footer, and featured post.

### Reactive

[TODO]

### Convention over Configuration over Coding

We favor conventions, like all partials go into _includes folder in Jekyll.
Conventions are favored over configuration where these are popular, and well
known patterns. Configuration in _config.yml and frontmatter is used where 
it adds to ease of content creation and design. Coding follows best practices
from top GitHub libraries like Semantic UI and projects like Jekyll that 
OpenTheme has as dependencies.

