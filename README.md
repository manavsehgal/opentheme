# OpenStart Semantic Jekyll Theme

Jekyll theme using Semantic UI for creating awesome websites on GitHub Pages.

## Design Goals

- Follow Jekyll and GitHub Pages best practices
- Showcase relevant Semantic UI capabilities
- Feature coverage for marketing, blogging, projects/portfolio scenarios
- Easy to fork and reuse for creating GitHub Pages

## Features

### Page Templates

- Landing Page. See [Homepage](http://open-start.github.io/semantic-jekyll-theme/index.html).
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
- Add Semantic UI examples and structure css, js within Jekyll asset pipeline. Added [Kitchensink](http://open-start.github.io/semantic-jekyll-theme/kitchensink.html), [Feed](http://open-start.github.io/semantic-jekyll-theme/feed.html).
- Homepage example enhanced as basic Landing page template.
- Sidebar and floating menu added.
- Split Landing page into reusable Jekyll folder structure.
- **TODO.** Design Blog post page.

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
