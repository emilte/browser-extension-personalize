#!/bin/bash
set -e

git co firefox
git pm
git merge master
git co master