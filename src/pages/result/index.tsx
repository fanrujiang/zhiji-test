import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button as MiniButton } from '@tarojs/components'
import { Network } from '@/network'
import { Button as UiButton } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Share2, RefreshCcw, Heart, Briefcase, Users, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react-taro'
import { mbtiDescriptions, defaultResult, MBTIResult } from '../test/data'
import { AttachmentResult } from '../test/attachment-data'

type ResultType = 'mbti' | 'attachment'

export default function Result() {
  const [resultType, setResultType] = useState<ResultType>('mbti')
  const [mbtiResult, setMbtiResult] = useState<MBTIResult | null>(null)
  const [attachmentResult, setAttachmentResult] = useState<AttachmentResult | null>(null)
  const [mbtiType, setMbtiType] = useState('')
  const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP

  useEffect(() => {
    const routerType = Taro.getCurrentInstance().router?.params?.type
    const savedType = Taro.getStorageSync('active_test_type')
    const nextType = routerType === 'attachment' || savedType === 'attachment' ? 'attachment' : 'mbti'
    setResultType(nextType)

    if (nextType === 'attachment') {
      const savedResult = Taro.getStorageSync('attachment_result') as AttachmentResult | ''
      if (savedResult) {
        setAttachmentResult(savedResult)
      }
      return
    }

    const type = Taro.getStorageSync('mbti_result') as string
    setMbtiType(type)

    const description = mbtiDescriptions[type] || defaultResult
    setMbtiResult(description)
    saveMBTIResult(type)
  }, [])

  const saveMBTIResult = async (type: string) => {
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
          if (resultType === 'attachment') {
            Taro.removeStorageSync('attachment_answers')
            Taro.removeStorageSync('attachment_result')
          } else {
            Taro.removeStorageSync('mbti_answers')
            Taro.removeStorageSync('mbti_result')
          }
          Taro.redirectTo({ url: '/pages/index/index' })
        }
      }
    })
  }

  if (resultType === 'attachment') {
    if (!attachmentResult) {
      return (
        <View className="min-h-screen bg-slate-50 flex items-center justify-center">
          <Text className="block text-slate-500">加载中...</Text>
        </View>
      )
    }

    const anxietyPercent = attachmentResult.scores.anxiety * 20
    const avoidancePercent = attachmentResult.scores.avoidance * 20

    return (
      <View className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white pb-8">
        <View className="px-4 pt-10 pb-8 text-center">
          <View className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
            <HeartHandshake size={32} color="#EC4899" />
          </View>
          <Text className="block text-sm text-slate-500 mb-2">你的依恋类型</Text>
          <Text className="block text-3xl font-bold text-pink-600 mb-2">{attachmentResult.title}</Text>
          <Text className="block text-base text-slate-600">{attachmentResult.subtitle}</Text>
        </View>

        <View className="px-4 mb-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-3">
                <Sparkles size={18} color="#EC4899" />
                <Text className="block text-base font-semibold text-slate-800">关系模式解析</Text>
              </View>
              <Text className="block text-sm text-slate-600 leading-relaxed">
                {attachmentResult.description}
              </Text>
            </CardContent>
          </Card>
        </View>

        <View className="px-4 mb-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} color="#10B981" />
                <Text className="block text-base font-semibold text-slate-800">维度分数</Text>
              </View>
              <View className="mb-4">
                <View className="flex items-center justify-between mb-2">
                  <Text className="block text-sm text-slate-600">亲密焦虑</Text>
                  <Text className="block text-sm font-semibold text-pink-600">{attachmentResult.scores.anxiety} / 5</Text>
                </View>
                <Progress value={anxietyPercent} className="h-2 bg-slate-100 [&>div]:bg-pink-500" />
              </View>
              <View>
                <View className="flex items-center justify-between mb-2">
                  <Text className="block text-sm text-slate-600">亲密回避</Text>
                  <Text className="block text-sm font-semibold text-violet-600">{attachmentResult.scores.avoidance} / 5</Text>
                </View>
                <Progress value={avoidancePercent} className="h-2 bg-slate-100 [&>div]:bg-violet-500" />
              </View>
            </CardContent>
          </Card>
        </View>

        <View className="px-4 mb-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-3">
                <Heart size={18} color="#10B981" />
                <Text className="block text-base font-semibold text-slate-800">你的关系优势</Text>
              </View>
              <View className="flex flex-wrap gap-2">
                {attachmentResult.strengths.map((item) => (
                  <View key={item} className="px-3 py-2 rounded-lg bg-emerald-50">
                    <Text className="block text-sm text-emerald-700">{item}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        <View className="px-4 mb-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-3">
                <Briefcase size={18} color="#3B82F6" />
                <Text className="block text-base font-semibold text-slate-800">成长建议</Text>
              </View>
              <View className="gap-3">
                {attachmentResult.growthTips.map((item, index) => (
                  <View key={item} className="flex items-start gap-3">
                    <Text className="block text-sm font-semibold text-blue-500">{index + 1}</Text>
                    <Text className="block flex-1 text-sm text-slate-600 leading-relaxed">{item}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        <View className="px-4 mb-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-3">
                <Users size={18} color="#8B5CF6" />
                <Text className="block text-base font-semibold text-slate-800">关系提示</Text>
              </View>
              <View className="gap-3">
                {attachmentResult.relationshipTips.map((item) => (
                  <Text key={item} className="block text-sm text-slate-600 leading-relaxed">{item}</Text>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        <ResultActions isWeapp={isWeapp} onRetest={handleRetest} shareTitle="分享结果" retestTitle="重新测试" />
      </View>
    )
  }

  if (!mbtiResult) {
    return (
      <View className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Text className="block text-slate-500">加载中...</Text>
      </View>
    )
  }

  return (
    <View className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white pb-8">
      <View className="px-4 pt-10 pb-8 text-center">
        <Text className="block text-sm text-slate-500 mb-4">你的 MBTI 人格类型</Text>

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
          <Text className="block text-xl font-semibold text-slate-800">{mbtiResult.name}</Text>
        </View>

        <View className="flex items-center justify-center gap-2 flex-wrap">
          {mbtiResult.strengths.slice(0, 3).map((item) => (
            <View key={item} className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
              <Text className="block text-xs text-indigo-600">{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="px-4 mb-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-5">
            <View className="flex items-center gap-2 mb-3">
              <Sparkles size={18} color="#6366F1" />
              <Text className="block text-base font-semibold text-slate-800">性格解析</Text>
            </View>
            <Text className="block text-sm text-slate-600 leading-relaxed">
              {mbtiResult.description}
            </Text>
          </CardContent>
        </Card>
      </View>

      <View className="px-4 mb-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-5">
            <View className="flex items-center gap-2 mb-3">
              <Heart size={18} color="#10B981" />
              <Text className="block text-base font-semibold text-slate-800">核心优势</Text>
            </View>
            <View className="flex flex-wrap gap-2">
              {mbtiResult.strengths.map((item) => (
                <View key={item} className="px-3 py-2 rounded-lg bg-emerald-50">
                  <Text className="block text-sm text-emerald-700">{item}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      </View>

      <View className="px-4 mb-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-5">
            <View className="flex items-center gap-2 mb-3">
              <Briefcase size={18} color="#3B82F6" />
              <Text className="block text-base font-semibold text-slate-800">适合职业</Text>
            </View>
            <View className="flex flex-wrap gap-2">
              {mbtiResult.career.map((item) => (
                <View key={item} className="px-3 py-2 rounded-lg bg-blue-50">
                  <Text className="block text-sm text-blue-700">{item}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      </View>

      {mbtiResult.compatible.length > 0 && (
        <View className="px-4 mb-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-5">
              <View className="flex items-center gap-2 mb-3">
                <Users size={18} color="#8B5CF6" />
                <Text className="block text-base font-semibold text-slate-800">最佳搭档</Text>
              </View>
              <View className="flex flex-wrap gap-2">
                {mbtiResult.compatible.map((item) => (
                  <View key={item} className="px-3 py-2 rounded-lg bg-violet-50">
                    <Text className="block text-sm text-violet-700">{item}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>
      )}

      <ResultActions isWeapp={isWeapp} onRetest={handleRetest} shareTitle="分享结果" retestTitle="重新测试" />

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

function ResultActions({
  isWeapp,
  onRetest,
  shareTitle,
  retestTitle
}: {
  isWeapp: boolean
  onRetest: () => void
  shareTitle: string
  retestTitle: string
}) {
  return (
    <View className="px-4 pb-8">
      <View className="flex gap-3 mb-3">
        {isWeapp ? (
          <MiniButton
            openType="share"
            className="flex-1 h-12 rounded-xl bg-indigo-500"
          >
            <View className="flex h-full items-center justify-center gap-2 px-4">
              <Share2 size={18} color="#FFFFFF" />
              <Text className="block text-sm text-white font-medium">{shareTitle}</Text>
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
              <Text className="block text-sm text-white font-medium">{shareTitle}</Text>
            </View>
          </UiButton>
        )}
        <UiButton
          variant="outline"
          className="flex-1 h-12 border-indigo-200 rounded-xl"
          onClick={onRetest}
        >
          <View className="flex items-center gap-2">
            <RefreshCcw size={18} color="#6366F1" />
            <Text className="block text-sm text-indigo-500 font-medium">{retestTitle}</Text>
          </View>
        </UiButton>
      </View>
    </View>
  )
}

export function onShareAppMessage() {
  const activeType = Taro.getStorageSync('active_test_type')

  if (activeType === 'attachment') {
    const result = Taro.getStorageSync('attachment_result') as AttachmentResult | ''
    return {
      title: result
        ? `我的依恋类型是${result.title}，你也来测一测吧！`
        : '来测一测你的依恋类型吧！',
      path: '/pages/index/index'
    }
  }

  const type = Taro.getStorageSync('mbti_result') as string
  const title = type
    ? `我刚做完 MBTI 测试，结果是 ${type}，你也来测一测！`
    : '我刚做完 MBTI 测试，你也来测一测！'

  return {
    title,
    path: '/pages/result/index'
  }
}
