#!/bin/bash

echo "🚀 Building for GitHub Pages..."
npm run build
npm run export

echo "📦 Preparing deployment..."
mkdir -p dist
cp -r out/* dist/

echo "✅ Build complete! Contents in ./dist/"
echo "Push ./dist to gh-pages branch or configure GitHub Pages to use it."

