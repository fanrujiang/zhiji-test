#!/usr/bin/env bash
set -euo pipefail

# 基于脚本位置定位项目根目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

# 1. 构建前端（H5）
echo "Building H5 frontend..."
pnpm build:web

# 2. 构建后端（NestJS）
echo "Building NestJS backend..."
pnpm build:server

echo "Build completed successfully!"
