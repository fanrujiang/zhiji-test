import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react-taro'
import { mbtiQuestions, calculateMBTI } from './data'
import { attachmentQuestions, attachmentScaleLabels, calculateAttachment } from './attachment-data'

type TestType = 'mbti' | 'attachment'

const testMeta = {
  mbti: {
    title: 'MBTI 性格测试',
    storageKey: 'mbti_answers',
    resultKey: 'mbti_result',
    questions: mbtiQuestions,
    accent: 'indigo',
    optionHint: '选择最符合你的选项'
  },
  attachment: {
    title: '依恋类型测试',
    storageKey: 'attachment_answers',
    resultKey: 'attachment_result',
    questions: attachmentQuestions,
    accent: 'pink',
    optionHint: '根据真实感受选择同意程度'
  }
} as const

const dimensionLabels: Record<string, string> = {
  EI: '能量获取',
  SN: '信息获取',
  TF: '决策方式',
  JP: '生活方式',
  anxiety: '亲密焦虑',
  avoidance: '亲密回避'
}

export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [testType, setTestType] = useState<TestType>('mbti')

  const meta = testMeta[testType]
  const currentQuestion = meta.questions[currentIndex]
  const progress = ((currentIndex + 1) / meta.questions.length) * 100
  const isAnswered = answers[currentIndex] !== -1
  const isAttachment = testType === 'attachment'
  const selectedAccent = meta.accent === 'pink'
    ? {
        bg: 'bg-pink-50',
        text: 'text-pink-600',
        border: 'border-pink-200',
        activeBorder: 'border-pink-500',
        activeBg: 'bg-pink-50',
        solid: 'bg-pink-500 hover:bg-pink-600',
        progress: '[&>div]:bg-pink-500'
      }
    : {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        activeBorder: 'border-indigo-500',
        activeBg: 'bg-indigo-50',
        solid: 'bg-indigo-500 hover:bg-indigo-600',
        progress: '[&>div]:bg-indigo-500'
      }

  useEffect(() => {
    const savedType = (Taro.getStorageSync('active_test_type') || 'mbti') as TestType
    const nextType = savedType === 'attachment' ? 'attachment' : 'mbti'
    const nextMeta = testMeta[nextType]
    const savedAnswers = Taro.getStorageSync(nextMeta.storageKey) || []

    setTestType(nextType)
    setAnswers(
      savedAnswers.length === nextMeta.questions.length
        ? savedAnswers
        : new Array(nextMeta.questions.length).fill(-1)
    )
  }, [])

  const handleSelect = (option: number) => {
    const newAnswers = [...answers]
    newAnswers[currentIndex] = option
    setAnswers(newAnswers)
    Taro.setStorageSync(meta.storageKey, newAnswers)
  }

  const handleNext = () => {
    if (currentIndex < meta.questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      return
    }

    if (testType === 'attachment') {
      const result = calculateAttachment(answers)
      Taro.setStorageSync(meta.resultKey, result)
      Taro.navigateTo({ url: '/pages/result/index?type=attachment' })
      return
    }

    const result = calculateMBTI(answers)
    Taro.setStorageSync(meta.resultKey, result)
    Taro.navigateTo({ url: '/pages/result/index?type=mbti' })
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      Taro.navigateBack()
    }
  }

  const handleRestart = () => {
    Taro.showModal({
      title: '重新开始',
      content: '确定要重新开始测试吗？',
      success: (res) => {
        if (res.confirm) {
          const newAnswers = new Array(meta.questions.length).fill(-1)
          setAnswers(newAnswers)
          setCurrentIndex(0)
          Taro.setStorageSync(meta.storageKey, newAnswers)
        }
      }
    })
  }

  if (!currentQuestion || answers.length === 0) {
    return (
      <View className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Text className="block text-slate-500">加载中...</Text>
      </View>
    )
  }

  return (
    <View className="min-h-screen bg-slate-50 flex flex-col">
      <View className="bg-white px-4 pt-4 pb-3 shadow-sm">
        <View className="flex items-center justify-between mb-2">
          <View>
            <Text className="block text-sm font-medium text-slate-700">{meta.title}</Text>
            <Text className="block text-xs text-slate-500">
              第 {currentIndex + 1} / {meta.questions.length} 题
            </Text>
          </View>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRestart}
            className="p-1 h-8"
          >
            <RefreshCcw size={16} color="#94A3B8" />
          </Button>
        </View>
        <Progress value={progress} className={`h-2 bg-slate-100 ${selectedAccent.progress}`} />

        <View className="flex items-center justify-center mt-3">
          <View className={`inline-flex items-center px-3 py-1 rounded-full ${selectedAccent.bg} border ${selectedAccent.border}`}>
            <Text className={`block text-xs font-medium ${selectedAccent.text}`}>
              {dimensionLabels[currentQuestion.dimension]}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-1 px-4 py-6">
        <Card className="shadow-md border-0">
          <CardContent className="p-6">
            <View className="flex items-center gap-2 mb-4">
              <View className={`flex items-center justify-center w-8 h-8 rounded-full ${selectedAccent.bg}`}>
                <Text className={`block text-sm font-semibold ${selectedAccent.text}`}>
                  {currentQuestion.id}
                </Text>
              </View>
              <Text className="block text-xs text-slate-400">{meta.optionHint}</Text>
            </View>

            {isAttachment ? (
              <>
                <Text className="block text-lg font-semibold text-slate-800 leading-relaxed mb-5">
                  {'text' in currentQuestion ? currentQuestion.text : ''}
                </Text>
                <View className="gap-3">
                  {attachmentScaleLabels.map((label, index) => (
                    <View
                      key={label}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        answers[currentIndex] === index
                          ? `${selectedAccent.activeBorder} ${selectedAccent.activeBg}`
                          : 'border-slate-200 bg-white hover:border-pink-300'
                      }`}
                      onClick={() => handleSelect(index)}
                    >
                      <View className="flex items-center justify-between">
                        <Text className="block text-base text-slate-800">{label}</Text>
                        <Text className={`block text-sm font-semibold ${
                          answers[currentIndex] === index ? selectedAccent.text : 'text-slate-400'
                        }`}>
                          {index + 1}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </>
            ) : (
              <>
                <View
                  className={`p-4 rounded-xl border-2 mb-3 transition-all ${
                    answers[currentIndex] === 0
                      ? `${selectedAccent.activeBorder} ${selectedAccent.activeBg}`
                      : 'border-slate-200 bg-white hover:border-indigo-300'
                  }`}
                  onClick={() => handleSelect(0)}
                >
                  <View className="flex items-start gap-3">
                    <View className={`flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                      answers[currentIndex] === 0
                        ? `${selectedAccent.activeBorder} bg-indigo-500`
                        : 'border-slate-300'
                    }`}
                    >
                      {answers[currentIndex] === 0 && (
                        <View className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </View>
                    <Text className="block text-base text-slate-800 leading-relaxed">
                      {'textA' in currentQuestion ? currentQuestion.textA : ''}
                    </Text>
                  </View>
                </View>

                <View className="flex items-center gap-3 my-4">
                  <View className="flex-1 h-px bg-slate-200" />
                  <Text className="block text-xs text-slate-400">或者</Text>
                  <View className="flex-1 h-px bg-slate-200" />
                </View>

                <View
                  className={`p-4 rounded-xl border-2 transition-all ${
                    answers[currentIndex] === 1
                      ? `${selectedAccent.activeBorder} ${selectedAccent.activeBg}`
                      : 'border-slate-200 bg-white hover:border-indigo-300'
                  }`}
                  onClick={() => handleSelect(1)}
                >
                  <View className="flex items-start gap-3">
                    <View className={`flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                      answers[currentIndex] === 1
                        ? `${selectedAccent.activeBorder} bg-indigo-500`
                        : 'border-slate-300'
                    }`}
                    >
                      {answers[currentIndex] === 1 && (
                        <View className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </View>
                    <Text className="block text-base text-slate-800 leading-relaxed">
                      {'textB' in currentQuestion ? currentQuestion.textB : ''}
                    </Text>
                  </View>
                </View>
              </>
            )}
          </CardContent>
        </Card>
      </View>

      <View className="bg-white px-4 py-4 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <View className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 h-12 rounded-xl border-slate-200"
            onClick={handlePrev}
          >
            <View className="flex items-center gap-1">
              <ArrowLeft size={18} color="#475569" />
              <Text className="block text-sm text-slate-600 font-medium">
                {currentIndex === 0 ? '返回' : '上一题'}
              </Text>
            </View>
          </Button>

          <Button
            className={`flex-1 h-12 rounded-xl ${
              isAnswered ? selectedAccent.solid : 'bg-slate-200 hover:bg-slate-300'
            }`}
            onClick={handleNext}
            disabled={!isAnswered}
          >
            <View className="flex items-center gap-1">
              <Text
                className={`block text-sm font-medium ${
                  isAnswered ? 'text-white' : 'text-slate-500'
                }`}
              >
                {currentIndex === meta.questions.length - 1 ? '查看结果' : '下一题'}
              </Text>
              {currentIndex < meta.questions.length - 1 && (
                <ArrowRight size={18} color="#FFFFFF" />
              )}
            </View>
          </Button>
        </View>
      </View>
    </View>
  )
}
