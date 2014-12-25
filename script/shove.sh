#!/usr/bin/env bash
set -e # halt script on error

if [ -z "$1" ]
  then
    echo "Add Commit Message"
    exit 1
fi
git add --all
git commit -m "$1"
git push origin master