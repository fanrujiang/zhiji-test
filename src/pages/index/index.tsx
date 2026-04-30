import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Star, Moon, Sun, BookOpen, Users, Sparkles, ChevronRight } from 'lucide-react-taro'
import { mbtiQuestions } from '../test/data'

// 功能入口数据
const featureEntries = [
  {
    id: 'mbti',
    title: 'MBTI 性格测试',
    description: '探索你的性格特质，发现真实的自我',
    icon: <Brain size={24} color="#6366F1" />,
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-600',
    priority: 'high',
    action: () => {
      const initialAnswers = new Array(mbtiQuestions.length).fill(-1)
      Taro.setStorageSync('mbti_answers', initialAnswers)
      Taro.navigateTo({ url: '/pages/test/index' })
    }
  },
  {
    id: 'sbt',
    title: 'SBTI 测试',
    description: '专业的性格优势测评工具',
    icon: <Star size={24} color="#8B5CF6" />,
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600',
    priority: 'medium',
    action: () => Taro.showToast({ title: 'SBTI测试功能开发中', icon: 'none' })
  },
  {
    id: 'bazi',
    title: '八字命盘测算',
    description: '解析你的命运轨迹与人生走向',
    icon: <Moon size={24} color="#10B981" />,
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    priority: 'medium',
    action: () => Taro.showToast({ title: '八字命盘测算功能开发中', icon: 'none' })
  },
  {
    id: 'constellation',
    title: '星座运势查询',
    description: '每日星座运势与月度预测',
    icon: <Sun size={24} color="#F59E0B" />,
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
    priority: 'medium',
    action: () => Taro.showToast({ title: '星座运势查询功能开发中', icon: 'none' })
  },
  {
    id: 'liuren',
    title: '小六壬占卜',
    description: '传统占卜术，预测吉凶祸福',
    icon: <BookOpen size={24} color="#EF4444" />,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-600',
    priority: 'medium',
    action: () => Taro.showToast({ title: '小六壬占卜功能开发中', icon: 'none' })
  }
]

// 热门测算结果
const hotResults = [
  {
    id: 1,
    type: 'INTJ',
    name: '建筑师',
    desc: '富有想象力和战略性的思想家',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20INTJ%20personality%20type%2C%20thoughtful%2C%20strategic%2C%20confident&image_size=square'
  },
  {
    id: 2,
    type: 'ENFP',
    name: '竞选者',
    desc: '热情洋溢、富有想象力的创意者',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20ENFP%20personality%20type%2C%20energetic%2C%20creative%2C%20enthusiastic&image_size=square'
  },
  {
    id: 3,
    type: 'ISFJ',
    name: '守护者',
    desc: '非常专注和热情的朋友',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20ISFJ%20personality%20type%2C%20caring%2C%20dedicated%2C%20reliable&image_size=square'
  }
]

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <View className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <View className="flex flex-col items-center gap-3">
          <View className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center animate-pulse">
            <Brain size={32} color="#6366F1" />
          </View>
          <Text className="block text-slate-600">加载中...</Text>
        </View>
      </View>
    )
  }

  return (
    <View className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 顶部区域 */}
      <View className="px-4 pt-12 pb-8">
        <View className="flex items-center justify-between mb-8">
          <View className="flex items-center gap-2">
            <View className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600">
              <Brain size={24} color="#FFFFFF" />
            </View>
            <View>
              <Text className="block text-2xl font-bold text-slate-800">知命</Text>
              <Text className="block text-xs text-slate-500">了解自我，探索命运</Text>
            </View>
          </View>
          <View className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="p-2">
              <Users size={20} color="#64748B" />
            </Button>
          </View>
        </View>
      </View>

      {/* 核心功能区 */}
      <View className="px-4 mb-10">
        <Text className="block text-xl font-bold text-slate-800 mb-4">核心测算</Text>
        
        {/* MBTI测试（突出显示） */}
        <View className="mb-4">
          <Card className="border-indigo-200 overflow-hidden">
            <CardContent className="p-0">
              <View className="bg-gradient-to-r from-indigo-500 to-violet-600 p-6">
                <View className="flex items-start justify-between">
                  <View>
                    <Text className="block text-white text-lg font-semibold mb-2">MBTI 性格测试</Text>
                    <Text className="block text-indigo-100 text-sm mb-4">
                      探索你的性格特质，发现真实的自我
                    </Text>
                    <Button 
                      className="bg-white text-indigo-600 hover:bg-indigo-50 h-10 px-4"
                      onClick={featureEntries[0].action}
                    >
                      开始测试
                    </Button>
                  </View>
                  <View className="bg-white/20 rounded-full p-3">
                    <Brain size={32} color="#FFFFFF" />
                  </View>
                </View>
              </View>
              <View className="p-4 bg-white">
                <View className="flex items-center gap-2 text-xs text-slate-500">
                  <Sparkles size={14} color="#6366F1" />
                  <Text className="block">包含 16 种人格类型分析</Text>
                  <Text className="block">·</Text>
                  <Text className="block">约需 8-10 分钟</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* 其他功能入口 */}
        <View className="grid grid-cols-2 gap-3">
          {featureEntries.slice(1).map((feature) => (
            <Card 
              key={feature.id} 
              className={`${feature.borderColor} hover:shadow-md transition-shadow`}
              onClick={feature.action}
            >
              <CardContent className="p-4">
                <View className="flex items-start justify-between mb-3">
                  <View className={`${feature.bgColor} p-2 rounded-lg`}>
                    {feature.icon}
                  </View>
                  <ChevronRight size={16} color="#94A3B8" />
                </View>
                <Text className="block text-base font-semibold text-slate-800 mb-1">
                  {feature.title}
                </Text>
                <Text className="block text-xs text-slate-500">
                  {feature.description}
                </Text>
              </CardContent>
            </Card>
          ))}
        </View>
      </View>

      {/* 辅助内容区 */}
      <View className="px-4 mb-10">
        <Text className="block text-xl font-bold text-slate-800 mb-4">热门测算</Text>
        <View className="flex gap-3 overflow-x-auto pb-2">
          {hotResults.map((result) => (
            <Card key={result.id} className="flex-shrink-0 w-48 border-slate-200">
              <CardContent className="p-4">
                <View className="flex justify-center mb-3">
                  <Image 
                    src={result.avatar} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </View>
                <Text className="block text-center text-base font-semibold text-slate-800 mb-1">
                  {result.type}
                </Text>
                <Text className="block text-center text-sm text-slate-600 mb-1">
                  {result.name}
                </Text>
                <Text className="block text-center text-xs text-slate-500">
                  {result.desc}
                </Text>
              </CardContent>
            </Card>
          ))}
        </View>
      </View>

      <View className="px-4 mb-10">
        <Text className="block text-xl font-bold text-slate-800 mb-4">测算知识</Text>
        <Card className="border-slate-200">
          <CardContent className="p-4">
            <View className="flex items-start gap-3">
              <View className="bg-slate-100 p-2 rounded-lg">
                <BookOpen size={20} color="#64748B" />
              </View>
              <View>
                <Text className="block text-base font-semibold text-slate-800 mb-2">
                  什么是 MBTI 性格测试？
                </Text>
                <Text className="block text-sm text-slate-600 leading-relaxed">
                  MBTI（Myers-Briggs Type Indicator）是一种自我报告式的人格测评工具，
                  用以衡量和描述人们在获取信息、作出决策、对待生活等方面的心理活动规律。
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>

      {/* 底部区域 */}
      <View className="px-4 pb-8">
        <View className="border-t border-slate-200 pt-6">
          <Text className="block text-center text-xs text-slate-500 mb-2">
            © 2026 知命平台 版权所有
          </Text>
          <View className="flex items-center justify-center gap-4">
            <Text className="block text-xs text-slate-500">使用条款</Text>
            <Text className="block text-xs text-slate-500">隐私政策</Text>
            <Text className="block text-xs text-slate-500">关于我们</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
