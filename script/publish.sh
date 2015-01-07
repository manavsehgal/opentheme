#!/usr/bin/env bash
set -e # halt script on error

git add --all
git commit -m "Quick Publish"
git push origin master
# Clone
git checkout gh-pages && git rebase master && git push origin gh-pages && git checkout master