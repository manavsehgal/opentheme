source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem "rake", "~> 10.1.1"
gem 'github-pages', versions['github-pages']