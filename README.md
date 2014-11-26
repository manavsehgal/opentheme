# OpenTheme Semantic Jekyll Theme

An open source theme using Jekyll and Semantic UI for creating awesome websites on GitHub.

## Design Goals

- Follow Jekyll and GitHub Pages best practices
- Showcase relevant Semantic UI capabilities
- Feature coverage for marketing, blogging, projects/portfolio scenarios
- Easy to fork and reuse for creating GitHub Pages

## Features

### Page Templates

- Landing Page. See [Homepage](http://opentheme.co/index.html).
- **TODO.** Blog Post.
- **TODO.** Project.
- **TODO.** Portfolio.

### Pre-processing

- Simple CSS, JS, IMG asset pipeline.
- Landing page reusable _includes - head, masthead, menu, sidebar, footer.
- Landing page layout *landing.html*.
- **TODO.** SASS with CSS asset pipeline. This will require Gulp or Grunt automation.
- **TODO.** Coffee with JS asset pipeline. This will require Gulp or Grunt automation.

## Design Log

- Uses latest Semantic UI 1.0.0 release.
- Reuse Jekyll generated boilerplate.
- Add Semantic UI examples and structure css, js within Jekyll asset pipeline. Added [Kitchensink](http://opentheme.co/kitchensink.html), [Feed](http://opentheme.co/feed.html).
- Homepage example enhanced as basic Landing page template.
- Sidebar and floating menu added.
- Split Landing page into reusable Jekyll folder structure.
- **TODO.** Design Blog post page.
 
## When to use posts, pages, collections?

Jekyll has several ways to create content. Each is suitable for certain use cases.

**Posts.** We will use posts for frequently created, chronological content.

**Pages.** Typical use cases are lists of posts, single page content like a landing page.

## How to design a blog in Jekyll?

### Target Features

- A typical blog has a collection of chronological posts. 
- A component listing recent posts to display on home page. 
- A pagination component to leaf through posts in chronological order.
- A post has an image, a thumbnail, summary, title, permalink, and content.
- Each post has tags classifying related posts.

## How to design pages in Jekyll?

### Target Features

- Pages are normally static or less frequently updated.
- Can contain collection or list of posts.

### Patterns

**Clean URLs.** Achieve clean URLs by using folder by page name and index.html within folder for the page. 
See [Jekyll Pages docs](http://jekyllrb.com/docs/pages/#named-folders-containing-index-html-files) on clean URLs.


## File Structure

### Folders

- **_includes** html partials reusable in layouts.
- **_layouts** html layouts reusable in pages. 
- **js** add site specific JavaScript to custom.js. Vendor libraries are added as minified where available.
- **css** add site specific CSS to custom.css. Vendor libraries are added as minified where available. Contains folders for assets referenced by custom or vendor css.
- **img** image assets.

### Files

- **Gemfile** defines gems required for creating local Jekyll building and serving "like" how GitHub Pages would.

## Reference Projects

Study following projects for best practices.

### Jekyll built sites and themes

- [Jekyll website](http://jekyllrb.com/)
- GitHub Pages themes
- [Lanyon](https://github.com/poole/lanyon)
- [Jekyll Themes](http://jekyllthemes.org/)

### GitHub hosted sites

- [Semantic UI website](http://www.semantic-ui.com)
