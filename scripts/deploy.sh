#!/bin/bash
# deploy.sh — build and deploy Sakura Tour to VPS
set -e

VPS="root@38.244.60.72"
SSH_PORT="8765"
REMOTE="/var/www/sakura-tour"

echo "🌸 Building frontend..."
npm run build

echo "📦 Deploying frontend (preserving node_modules & server)..."
rsync -avz --delete \
  --exclude=node_modules \
  --exclude=package.json \
  --exclude=package-lock.json \
  --exclude=server \
  -e "ssh -p $SSH_PORT" \
  dist/ $VPS:$REMOTE/

echo "🔧 Deploying server files..."
rsync -avz \
  --exclude=sakura.db \
  --exclude=sakura.db-shm \
  --exclude=sakura.db-wal \
  -e "ssh -p $SSH_PORT" \
  server/ $VPS:$REMOTE/server/

echo "🔄 Restarting backend..."
ssh -p $SSH_PORT $VPS "pm2 restart sakura-api"

echo "✅ Deployed successfully!"
