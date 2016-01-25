#!/usr/bin/env bash
echo "Building..."
NODE_ENV=production
rm -rf public
mkdir public
browserify app/main.js app/scripts/main.js | uglifyjs -cm > public/bundle.js
cp app/index.html public/index.html
cp app/manifest.json public/mainfest.json
cp app/manifest.webapp public/mainfest.webapp
cp app/service-worker.js public/service-worker.js
cp app/sitemap.xml public/sitemap.xml
echo "Done!"
