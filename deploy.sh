#!/usr/bin/env bash

# abort on errors
set -e

# build
wasm-pack build
cd www
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lex/falling-sand-game-wasm.git master:gh-pages

cd -

