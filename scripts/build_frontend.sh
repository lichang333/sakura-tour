#!/bin/bash
set -euo pipefail

export VITE_API_BASE_URL="${VITE_API_BASE_URL:-http://38.59.225.79:3001}"

node -e 'import("vite").then(({ build }) => build()).catch((err) => { console.error(err); process.exit(1) })'
