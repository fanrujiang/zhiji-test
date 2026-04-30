# MBTI 性格测试小程序 - 设计指南

## 1. 品牌定位

- **应用定位**：趣味性格测试工具，帮助用户发现自我
- **设计风格**：温暖亲切、专业可信、现代简约
- **目标用户**：18-35 岁年轻人群，职场人士和学生
- **情感调性**：探索自我、轻松有趣、深度洞察

## 2. 配色方案

### 主色调
- **Primary**: `#6366F1` (Indigo-500) - 主按钮、强调色
- **Primary Light**: `#818CF8` (Indigo-400) - 渐变色、hover 状态
- **Primary Dark**: `#4F46E5` (Indigo-600) - 按压状态

### 功能色
- **Success**: `#10B981` (Emerald-500) - E/I 维度标识
- **Warning**: `#F59E0B` (Amber-500) - S/N 维度标识
- **Info**: `#3B82F6` (Blue-500) - T/F 维度标识
- **Purple**: `#8B5CF6` (Violet-500) - J/P 维度标识

### 中性色
- **Background**: `#F8FAFC` (Slate-50) - 页面背景
- **Card Background**: `#FFFFFF` - 卡片背景
- **Text Primary**: `#1E293B` (Slate-800) - 主要文字
- **Text Secondary**: `#64748B` (Slate-500) - 次要文字
- **Border**: `#E2E8F0` (Slate-200) - 边框色

## 3. 字体规范

- **标题 H1**: text-2xl font-bold
- **标题 H2**: text-xl font-semibold
- **正文**: text-base
- **辅助文字**: text-sm text-secondary

## 4. 间距系统

- **页面边距**: px-4 (16px)
- **卡片内边距**: p-4 (16px)
- **元素间距**: gap-3 到 gap-4
- **底部安全区**: pb-20 (TabBar + 安全区)

## 5. 组件使用原则

- **通用组件**: 按钮(Button)、卡片(Card)、进度条(Progress)、单选组(RadioGroup)、对话框(Dialog)优先使用 `@/components/ui/*`
- **禁用手搓**: 禁止用 View/Text 手搓按钮、输入框、卡片等通用 UI

## 6. 页面结构

### TabBar 页面
1. **首页** (`pages/index/index`) - 开始测试入口
2. **测试页** (`pages/test/index`) - 答题页面
3. **结果页** (`pages/result/index`) - 性格分析结果

### 页面流程
```
首页 → 测试页(第1题) → ... → 测试页(第16题) → 结果页 → 分享
```

## 7. MBTI 测试题设计

### 维度说明
- **E/I**: 外向/内向 - 获取能量方式
- **S/N**: 感觉/直觉 - 获取信息方式
- **T/F**: 思考/情感 - 做决定方式
- **J/P**: 判断/知觉 - 生活方式

### 题目数量
- 16 道题目，每题 2 个选项
- 每题对应一个维度的得分

## 8. 小程序约束

- TabBar 图标需使用本地 PNG
- 页面栈控制在 5 层以内
- 图片资源需上传 TOS（除 TabBar 图标）
