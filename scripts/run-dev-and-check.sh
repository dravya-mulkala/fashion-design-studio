#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3000}"
HOST="${2:-0.0.0.0}"

if [[ ! -d node_modules ]]; then
  echo "Dependencies are missing. Run: npm install"
  exit 1
fi

npm run dev -- --hostname "$HOST" --port "$PORT" &
DEV_PID=$!
trap 'kill $DEV_PID >/dev/null 2>&1 || true' EXIT

for _ in {1..60}; do
  if curl -fsS "http://127.0.0.1:${PORT}" >/dev/null 2>&1; then
    echo "Dev server is ready on http://127.0.0.1:${PORT}"
    wait $DEV_PID
    exit 0
  fi
  sleep 1
done

echo "Dev server did not become ready in time."
exit 1
