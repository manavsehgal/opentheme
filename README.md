# OpenStart Semantic Jekyll Theme

Jekyll theme using Semantic UI for creating awesome websites on GitHub Pages.

## Design Goals

- Follow Jekyll and GitHub Pages best practices
- Showcase relevant Semantic UI capabilities
- Feature coverage for marketing, blogging, projects/portfolio scenarios
- Easy to fork and reuse for creating GitHub Pages

## Features
- **WIP.** Landing Page. See [Homepage](http://open-start.github.io/semantic-jekyll-theme/index.html).
- **TODO.** Blog page.
- **TODO.** Portfolio/project page.
- **TODO.** SASS with CSS asset pipeline. This will require Gulp or Grunt automation.
- **TODO.** Coffee with JS asset pipeline. This will require Gulp or Grunt automation.

## Design Approach

1. Reuse Jekyll generated boilerplate.
2. Add Semantic UI examples and structure css, js within Jekyll asset pipeline. Added [Kitchensink](http://open-start.github.io/semantic-jekyll-theme/kitchensink.html), [Feed](http://open-start.github.io/semantic-jekyll-theme/feed.html).
3. **TODO.** Split examples into reusable _includes, _layouts.

## File Structure

### Folders

- **js** add site specific JavaScript to custom.js. Vendor libraries are added as minified where available.
- **css** add site specific CSS to custom.css. Vendor libraries are added as minified where available. Contains folders for assets referenced by custom or vendor css.

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

- Semantic UI website
