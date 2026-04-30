#!/usr/bin/env bash
set -euo pipefail

# 基于脚本位置定位项目根目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

# 显式声明关键环境变量
export PORT=5000

# 清理 5000 端口残留进程（幂等性保证）
fuser -k 5000/tcp 2>/dev/null || true
sleep 1

# 清理 3000 端口残留进程（后端）
fuser -k 3000/tcp 2>/dev/null || true
sleep 1

# 启动完整的开发环境（H5 前端 + NestJS 后端）
# Vite H5 配置了 /api 代理到 localhost:3000
exec pnpm dev
