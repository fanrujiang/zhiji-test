# 知己测

知己测是一个开源的多端心理与命理测评应用，基于 Taro 4 + React + NestJS 构建，支持 H5、微信小程序、抖音小程序等多端构建。当前内置 MBTI 性格测试、依恋类型测试、八字命盘测算，并提供统一的结果页、底部 TabBar、二级页面返回导航栏等基础体验。

项目适合作为 Taro 跨端应用、测评类小程序、前后端一体化项目的参考实现。

## 功能特性

- MBTI 性格测试：40 道二选一题，输出 16 型人格结果与解析。
- 依恋类型测试：40 道五级量表题，输出安全型、焦虑型、回避型、恐惧/混乱型等关系模式。
- 八字命盘测算：根据公历出生年月日时计算四柱、日主、生肖提示与大运简表。
- 多端导航体验：首页 / 我的 TabBar，二级页面统一 NavBar 返回上一级。
- 本地结果记录：在「我的」页查看最近一次测评结果。
- 前后端分离：前端通过 `Network` 请求封装访问 NestJS API。
- 跨端 UI：Taro 原生组件 + 项目内置 `@/components/ui` 组件库 + Tailwind CSS。

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 前端框架 | Taro 4.1.9 |
| UI 渲染 | React 18 |
| 开发语言 | TypeScript |
| 样式方案 | Tailwind CSS 4 + weapp-tailwindcss |
| UI 组件 | `src/components/ui` 内置组件库 |
| 图标 | lucide-react-taro |
| 状态/存储 | Taro Storage，预装 Zustand |
| 构建工具 | Vite / Taro CLI |
| 后端 | NestJS 10 |
| 包管理器 | pnpm |

## 目录结构

```text
.
├── config/                   # Taro 构建配置
├── server/                   # NestJS 后端服务
│   └── src/
│       ├── main.ts           # 后端入口，配置 /api 全局前缀
│       ├── app.module.ts
│       └── mbti.controller.ts
├── src/
│   ├── app.config.ts         # 页面、TabBar、全局窗口配置
│   ├── app.tsx               # 应用入口
│   ├── components/ui/        # Taro 版 shadcn 风格 UI 组件
│   ├── network.ts            # 网络请求封装
│   ├── pages/
│   │   ├── index/            # 首页
│   │   ├── mine/             # 我的 / 本地结果记录
│   │   ├── result/           # MBTI / 依恋 / 八字统一结果页
│   │   └── test/             # 测试页与测试数据
│   └── presets/              # H5 容器、导航栏等预设能力
├── types/                    # 类型声明
├── pnpm-lock.yaml
└── package.json
```

## 快速开始

本项目必须使用 pnpm。

```bash
pnpm install
```

启动 H5 前端和 NestJS 后端：

```bash
pnpm dev
```

默认端口：

- H5 前端：http://localhost:5000
- 后端 API：http://localhost:3000

也可以单独启动：

```bash
pnpm dev:web
pnpm dev:weapp
pnpm dev:tt
pnpm dev:server
```

## 构建命令

```bash
pnpm build        # 构建 H5、小程序与后端
pnpm build:web    # 构建 H5，输出 dist-web
pnpm build:weapp  # 构建微信小程序，输出 dist
pnpm build:tt     # 构建抖音小程序
pnpm build:server # 构建 NestJS 后端
```

质量检查：

```bash
pnpm validate
pnpm lint
pnpm tsc
```

## 页面与路由

页面在 `src/app.config.ts` 中注册：

```ts
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/test/index',
    'pages/test/bazi-index',
    'pages/result/index'
  ]
})
```

TabBar 页面使用 `Taro.switchTab` 跳转，普通二级页面使用 `Taro.navigateTo`：

```ts
Taro.switchTab({ url: '/pages/index/index' })
Taro.navigateTo({ url: '/pages/test/index' })
```

二级页面建议使用项目内置导航栏：

```tsx
import { NavBar } from '@/components/ui/navbar'

<NavBar title="测试结果" showBack />
```

## UI 与样式约定

通用 UI 优先使用 `@/components/ui`：

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
```

基础布局仍使用 Taro 原生组件：

```tsx
import { View, Text } from '@tarojs/components'
```

样式优先使用 Tailwind 类名：

```tsx
<View className="min-h-screen bg-slate-50 px-4 py-6">
  <Text className="block text-xl font-bold text-slate-800">知己测</Text>
</View>
```

图标使用 `lucide-react-taro`：

```tsx
import { Brain, HeartHandshake } from 'lucide-react-taro'

<Brain size={24} color="#6366F1" />
<HeartHandshake size={24} color="#EC4899" />
```

## 网络请求

前端请求统一使用 `Network`，不要直接调用 `Taro.request`：

```ts
import { Network } from '@/network'

const res = await Network.request({
  url: '/api/mbti/results',
  method: 'POST',
  data: {
    mbtiType: 'INTJ',
    answers: [],
    createTime: new Date().toISOString()
  }
})
```

后端在 `server/src/main.ts` 中配置了全局 `/api` 前缀，Controller 不需要再手动写 `api`。

## 后端说明

后端位于 `server/`，基于 NestJS：

```bash
pnpm dev:server
pnpm build:server
```

当前示例接口主要用于保存和读取 MBTI 测试结果：

- `POST /api/mbti/results`
- `GET /api/mbti/results`
- `GET /api/mbti/results/latest`
- `GET /api/mbti/types`

## 开源使用

欢迎基于知己测二次开发测评、小程序工具、个人成长类产品或 Taro 学习项目。提交代码前建议先运行：

```bash
pnpm validate
pnpm build:web
```

如果你扩展新的测试类型，推荐按现有结构新增：

- 测试数据：`src/pages/test/*-data.ts`
- 测试入口：首页 `featureEntries`
- 测试过程：复用或扩展 `src/pages/test/index.tsx`
- 结果展示：扩展 `src/pages/result/index.tsx`

## License

本项目允许学习、参考和二次开发。

如基于本项目进行二次修改、分发、发布或用于公开项目，请在项目说明、README、关于页面或其他显著位置注明原作者及原项目来源。

禁止移除原作者署名后将本项目或二次修改版本声明为完全原创。
