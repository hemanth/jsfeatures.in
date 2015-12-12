#!/usr/bin/env bash
echo "Building..."
NODE_ENV=production
browserify app/main.js | uglifyjs -cm > public/bundle.js
cp app/index.html public/index.html
cp app/manifest.json public/mainfest.json
cp app/manifest.webapp public/mainfest.webapp
cp app/service-worker.js public/service-worker.js
cp app/sitemap.xml public/sitemap.xml
cp -r app/scripts public/scripts
echo "Done!"
