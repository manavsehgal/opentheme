# OpenTheme

Powerful new theme featuring Semantic UI for speedily creating amazing websites and mobile-hybrid apps on GitHub Pages.

## Getting Started

### Fork and Publish Direct from GitHub

1. Fork OpenTheme as your own repo
2. IMPORTANT: Edit _config.yml -> "API Keys" section to replace OpenTheme keys with your own
3. Edit and publish _posts, or _data, or pages directly from GitHub

### Local Setup

```
bundle install # Install Jekyll, Github Pages gems
npm install # Install Gulp and dependences
gulp # Build, test, serve and watch your local setup
```

IMPORTANT: Edit **_config.yml** -> "API Keys" section to replace OpenTheme keys with your own

Optionally edit **gulpfile.js** -> BrowserSync host, port to your local setup

Optionally, helper bash scripts available in **/scripts** folder. Use **shove.sh** to push changes to your repo. Use **clone.sh** to copy changes to GitHub Pages.

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
