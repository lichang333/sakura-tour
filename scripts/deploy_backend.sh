#!/bin/bash
set -euo pipefail

BACKEND_VPS="${BACKEND_VPS:-root@38.59.225.79}"
SSH_PORT="${SSH_PORT:-8765}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/sakura-tour}"

ssh -p "$SSH_PORT" -o StrictHostKeyChecking=accept-new "$BACKEND_VPS" "mkdir -p '$REMOTE_DIR/server'"

rsync -avz \
  -e "ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new" \
  package.json \
  package-lock.json \
  "$BACKEND_VPS:$REMOTE_DIR/"

rsync -avz --delete \
  --exclude=sakura.db \
  --exclude=sakura.db-shm \
  --exclude=sakura.db-wal \
  -e "ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new" \
  server/ \
  "$BACKEND_VPS:$REMOTE_DIR/server/"

ssh -p "$SSH_PORT" -o StrictHostKeyChecking=accept-new "$BACKEND_VPS" "
  set -e
  cd '$REMOTE_DIR'
  npm install --omit=dev
  if pm2 describe sakura-api >/dev/null 2>&1; then
    pm2 restart sakura-api --update-env
  else
    pm2 start server/index.js --name sakura-api
  fi
  pm2 save
"
