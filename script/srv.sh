#!/usr/bin/env bash
set -e # halt script on error

# bundle exec jekyll build
# bundle exec htmlproof ./_site
bundle exec jekyll serve --port 8080 --host 0.0.0.0 --safe --baseurl ''