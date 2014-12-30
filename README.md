# OpenTheme

Powerful theme using Semantic UI for rapidly creating awesome websites on GitHub Pages.

View live demo and docs at http://opentheme.co 

Collaborate on OpenTheme features and content design workflow at https://trello.com/b/Jm8UFV7p

<a href="https://travis-ci.org/open-start/opentheme"><img src="https://travis-ci.org/open-start/opentheme.svg" alt="Travis Build Status"></a>
<!-- <a href="https://codeclimate.com/github/open-start/opentheme"><img src="https://codeclimate.com/github/open-start/opentheme/badges/gpa.svg" /></a> -->

## Design Goals

- Follow Jekyll and GitHub Pages best practices
- Showcase relevant Semantic UI capabilities
- Feature coverage for marketing, blogging, projects/portfolio scenarios
- Easy to fork and reuse for creating GitHub Pages

## File Structure

### Folders Pre-processed by GitHub Pages / Jekyll

- **_includes** html partials reusable in layouts.
- **_layouts** html layouts reusable in pages. 
- **_posts** Post types organized by folder. **apps** contains single page apps. **blog** contains blog posts.
- **_data** Static data files including YAML Front Matter, CSV, JSON formats usable by GitHub Pages sites.

### Asset Folders

- **js** add site specific JavaScript to custom.js. Vendor libraries are added as minified where available.
- **css** add site specific CSS to custom.css. Vendor libraries are added as minified where available. Contains folders for assets referenced by custom or vendor css.
- **img** image assets.

### Development Automation

- **script** Automation shell scripts for development, testing. [TO DO] Replace with Gulp pipeline automation, E2E, Lint tests.

### Files

- **Gemfile** defines gems required for creating local Jekyll building and serving "like" how GitHub Pages would.

## Dependencies

- Semantic UI
- Jekyll

## Reference Projects

Study following projects for best practices.

### Jekyll built sites and themes

- [Jekyll website](http://jekyllrb.com/)
- GitHub Pages themes
- [Lanyon](https://github.com/poole/lanyon)
- [Jekyll Themes](http://jekyllthemes.org/)

### GitHub hosted sites

- [Semantic UI website](http://www.semantic-ui.com)
