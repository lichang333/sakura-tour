#!/bin/bash
set -euo pipefail

VPS="${VPS:-root@38.59.225.79}"
SSH_PORT="${SSH_PORT:-8765}"
REMOTE="${REMOTE:-/var/www/sakura-tour}"

echo "🌸 Building frontend bundle..."
./scripts/build_frontend.sh

echo "📦 Uploading frontend bundle..."
ssh -p "$SSH_PORT" -o StrictHostKeyChecking=accept-new "$VPS" "mkdir -p '$REMOTE'"
rsync -avz --delete \
  -e "ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new" \
  dist/ "$VPS:$REMOTE/"

echo "🔧 Deploying backend API..."
BACKEND_VPS="$VPS" SSH_PORT="$SSH_PORT" REMOTE_DIR="$REMOTE" ./scripts/deploy_backend.sh

echo "✅ Deployment finished."
