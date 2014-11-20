# OpenStart Semantic Jekyll Theme

Jekyll theme using Semantic UI for creating awesome websites on GitHub Pages.

## Design Goals

- Follow Jekyll and GitHub Pages best practices
- Showcase relevant Semantic UI capabilities
- Feature coverage for marketing, blogging, projects/portfolio scenarios
- Easy to fork and reuse for creating GitHub Pages

## Wish List
- Blog
- Portfolio
- Landing Page

## Design Approach

1. Reuse Jekyll generated boilerplate
2. Add relevant features from Semantic UI demos

## File Structure

### Folders

- **public** includes css, js, img, font, and icon assets. Good candidates are third party libraries like Semantic UI. These are not processed by Jekyll and served as-is. Where available both minified and well-formatted css, js are included.
- **css** contains main.scss with landing page specific styles defined here. main.scss imports layout specific styles from **_sass**.

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
