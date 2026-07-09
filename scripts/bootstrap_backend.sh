#!/bin/bash
set -euo pipefail

BACKEND_VPS="${BACKEND_VPS:-root@38.59.225.79}"
SSH_PORT="${SSH_PORT:-8765}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/sakura-tour}"

ssh -p "$SSH_PORT" -o StrictHostKeyChecking=accept-new "$BACKEND_VPS" "
  set -e
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs npm build-essential rsync
  npm install -g pm2
  mkdir -p '$REMOTE_DIR/server'
"
