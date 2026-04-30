import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button as MiniButton } from '@tarojs/components'
import { Network } from '@/network'
import { Button as UiButton } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Share2, RefreshCcw, Heart, Briefcase, Users, Sparkles } from 'lucide-react-taro'
import { mbtiDescriptions, defaultResult, MBTIResult } from '../test/data'

export default function Result() {
  const [result, setResult] = useState<MBTIResult | null>(null)
  const [mbtiType, setMbtiType] = useState('')
  const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP

  useEffect(() => {
    const type = Taro.getStorageSync('mbti_result') as string
    setMbtiType(type)
    
    const description = mbtiDescriptions[type] || defaultResult
    setResult(description)

    // 保存到服务器
    saveResult(type)
  }, [])

  const saveResult = async (type: string) => {
    try {
      const res = await Network.request({
        url: '/api/mbti/results',
        method: 'POST',
        data: {
          mbtiType: type,
          answers: Taro.getStorageSync('mbti_answers') || [],
          createTime: new Date().toISOString()
        }
      })
      console.log('结果保存成功', res)
    } catch (error) {
      console.log('保存结果失败', error)
    }
  }

  const handleRetest = () => {
    Taro.showModal({
      title: '重新测试',
      content: '确定要重新开始测试吗？',
      success: (res) => {
        if (res.confirm) {
          Taro.removeStorageSync('mbti_answers')
          Taro.removeStorageSync('mbti_result')
          Taro.redirectTo({ url: '/pages/index/index' })
        }
      }
    })
  }

  if (!result) {
    return (
      <View className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Text className="block text-slate-500">加载中...</Text>
      </View>
    )
  }

  return (
    <View className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white pb-8">
      {/* 头部结果展示 */}
      <View className="px-4 pt-10 pb-8 text-center">
        <Text className="block text-sm text-slate-500 mb-4">你的 MBTI 人格类型</Text>
        
        {/* MBTI 类型大展示 */}
        <View className="inline-flex flex-col items-center mb-4">
          <View className="flex items-center gap-1 mb-2">
            {mbtiType.split('').map((char, index) => {
              const colors = ['text-emerald-500', 'text-amber-500', 'text-blue-500', 'text-violet-500']
              return (
                <Text key={index} className={`block text-5xl font-bold ${colors[index]}`}>
                  {char}
                </Text>
              )
            })}
          </View>
          <Text className="block text-xl font-semibold text-slate-800">{result.name}</Text>
        </View>

        {/* 标签 */}
        <View className="flex items-center justify-center gap-2 flex-wrap">
          {result.strengths.slice(0, 3).map((item, index) => (
            <View key={index} className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
              <Text className="block text-xs text-indigo-600">{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 性格描述 */}
      <View className="px-4 mb-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-5">
            <View className="flex items-center gap-2 mb-3">
              <Sparkles size={18} color="#6366F1" />
              <Text className="block text-base font-semibold text-slate-800">性格解析</Text>
            </View>
            <Text className="block text-sm text-slate-600 leading-relaxed">
              {result.description}
            </Text>
          </CardContent>
        </Card>
      </View>

      {/* 优势特点 */}
      <View className="px-4 mb-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-5">
            <View className="flex items-center gap-2 mb-3">
              <Heart size={18} color="#10B981" />
              <Text className="block text-base font-semibold text-slate-800">核心优势</Text>
            </View>
            <View className="flex flex-wrap gap-2">
              {result.strengths.map((item, index) => (
                <View key={index} className="px-3 py-2 rounded-lg bg-emerald-50">
                  <Text className="block text-sm text-emerald-700">{item}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      </View>

      {/* 适合职业 */}
      <View className="px-4 mb-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-5">
            <View className="flex items-center gap-2 mb-3">
              <Briefcase size={18} color="#3B82F6" />
              <Text className="block text-base font-semibold text-slate-800">适合职业</Text>
            </View>
            <View className="flex flex-wrap gap-2">
              {result.career.map((item, index) => (
                <View key={index} className="px-3 py-2 rounded-lg bg-blue-50">
                  <Text className="block text-sm text-blue-700">{item}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      </View>

      {/* 最佳搭档 */}
      {result.compatible.length > 0 && (
        <View className="px-4 mb-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-3">
                <Users size={18} color="#8B5CF6" />
                <Text className="block text-base font-semibold text-slate-800">最佳搭档</Text>
              </View>
              <View className="flex flex-wrap gap-2">
                {result.compatible.map((item, index) => (
                  <View key={index} className="px-3 py-2 rounded-lg bg-violet-50">
                    <Text className="block text-sm text-violet-700">{item}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>
      )}

      {/* 操作按钮 */}
      <View className="px-4 pb-8">
        <View className="flex gap-3 mb-3">
          {isWeapp ? (
            <MiniButton
              openType="share"
              className="flex-1 h-12 rounded-xl bg-indigo-500"
            >
              <View className="flex h-full items-center justify-center gap-2 px-4">
                <Share2 size={18} color="#FFFFFF" />
                <Text className="block text-sm text-white font-medium">分享结果</Text>
              </View>
            </MiniButton>
          ) : (
            <UiButton
              className="flex-1 h-12 bg-indigo-500 hover:bg-indigo-600 rounded-xl"
              onClick={() => {
                Taro.showToast({
                  title: '请在微信小程序中使用分享功能',
                  icon: 'none',
                  duration: 1500
                })
              }}
            >
              <View className="flex items-center gap-2">
                <Share2 size={18} color="#FFFFFF" />
                <Text className="block text-sm text-white font-medium">分享结果</Text>
              </View>
            </UiButton>
          )}
          <UiButton
            variant="outline"
            className="flex-1 h-12 border-indigo-200 rounded-xl"
            onClick={handleRetest}
          >
            <View className="flex items-center gap-2">
              <RefreshCcw size={18} color="#6366F1" />
              <Text className="block text-sm text-indigo-500 font-medium">重新测试</Text>
            </View>
          </UiButton>
        </View>
      </View>

      {/* 分享引导 */}
      <View className="px-4">
        <Card className="bg-gradient-to-r from-indigo-500 to-violet-500 border-0">
          <CardContent className="p-4 text-center">
            <Text className="block text-sm text-white font-medium mb-1">
              你的 {mbtiType} 人格是怎样的？
            </Text>
            <Text className="block text-xs text-indigo-100">
              快来测试一下，发现你的性格特质！
            </Text>
          </CardContent>
        </Card>
      </View>
    </View>
  )
}

export function onShareAppMessage() {
  const type = Taro.getStorageSync('mbti_result') as string
  const title = type
    ? `我刚做完 MBTI 测试，结果是 ${type}，你也来测一测！`
    : '我刚做完 MBTI 测试，你也来测一测！'

  return {
    title,
    path: '/pages/result/index'
  }
}
