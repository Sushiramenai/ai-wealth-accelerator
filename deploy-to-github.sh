#!/bin/bash

echo "🚀 Deploying AI Wealth Accelerator to GitHub Pages..."
echo ""

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding all files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy AI Wealth Accelerator - Stop Building Someone Else's Dream"

# Create gh-pages branch if it doesn't exist
echo "🌿 Setting up GitHub Pages branch..."
git branch -M main

echo ""
echo "✅ Local repository ready!"
echo ""
echo "Now follow these steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'ai-wealth-accelerator'"
echo "3. Make it public (for free GitHub Pages hosting)"
echo "4. Don't initialize with README (we already have files)"
echo "5. Copy the commands GitHub shows you for 'push an existing repository'"
echo ""
echo "It will look something like:"
echo "git remote add origin https://github.com/YOUR-USERNAME/ai-wealth-accelerator.git"
echo "git push -u origin main"
echo ""
echo "After pushing, go to Settings → Pages → Deploy from branch → main → / (root)"
echo "Your site will be live at: https://YOUR-USERNAME.github.io/ai-wealth-accelerator/"