#!/usr/bin/env bash
set -euo pipefail

# 基于脚本位置定位项目根目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

# 显式声明端口
export PORT=5000
export SERVER_PORT=3000

# 清理端口残留
fuser -k 5000/tcp 2>/dev/null || true
fuser -k 3000/tcp 2>/dev/null || true
sleep 1

# 启动后端服务（后台）
cd "$PROJECT_DIR/server/dist"
node ./main.js -p 3000 &
BACKEND_PID=$!
echo "Backend started with PID: $BACKEND_PID"

# 启动前端静态文件服务器（使用内置的 Vite preview）
cd "$PROJECT_DIR/dist-web"
# Vite preview 不支持 API 代理，使用 http-server + 配置代理
# 先用 http-server 提供静态文件
pnpm exec http-server . -p 5000 -c-1 --proxy "http://localhost:3000?" &
FRONTEND_PID=$!
echo "Frontend server started with PID: $FRONTEND_PID"

# 等待服务就绪
sleep 3

# 验证服务
if curl -s -o /dev/null -w '%{http_code}' http://localhost:5000 | grep -q "200"; then
    echo "Service is ready on port 5000"
else
    echo "Warning: Service may not be ready"
fi

# 保持进程运行
wait
