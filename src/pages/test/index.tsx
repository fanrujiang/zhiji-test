import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react-taro'
import { mbtiQuestions, calculateMBTI } from './data'

export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  useEffect(() => {
    // 加载保存的答案
    const savedAnswers = Taro.getStorageSync('mbti_answers') || []
    if (savedAnswers.length === 0) {
      setAnswers(new Array(mbtiQuestions.length).fill(-1))
    } else {
      setAnswers(savedAnswers)
    }
  }, [])

  const currentQuestion = mbtiQuestions[currentIndex]
  const progress = ((currentIndex + 1) / mbtiQuestions.length) * 100
  const isAnswered = answers[currentIndex] !== -1

  const handleSelect = (option: number) => {
    const newAnswers = [...answers]
    newAnswers[currentIndex] = option
    setAnswers(newAnswers)
    Taro.setStorageSync('mbti_answers', newAnswers)
  }

  const handleNext = () => {
    if (currentIndex < mbtiQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // 完成测试，跳转到结果页
      const result = calculateMBTI(answers)
      Taro.setStorageSync('mbti_result', result)
      Taro.navigateTo({ url: '/pages/result/index' })
    }
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
          const newAnswers = new Array(mbtiQuestions.length).fill(-1)
          setAnswers(newAnswers)
          setCurrentIndex(0)
          Taro.setStorageSync('mbti_answers', newAnswers)
        }
      }
    })
  }

  // 维度颜色映射
  const dimensionColors: Record<string, { bg: string; text: string; border: string }> = {
    'EI': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
    'SN': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
    'TF': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    'JP': { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' }
  }

  const colors = dimensionColors[currentQuestion.dimension] || dimensionColors['EI']

  return (
    <View className="min-h-screen bg-slate-50 flex flex-col">
      {/* 顶部进度 */}
      <View className="bg-white px-4 pt-4 pb-3 shadow-sm">
        <View className="flex items-center justify-between mb-2">
          <Text className="block text-sm text-slate-500">
            第 {currentIndex + 1} / {mbtiQuestions.length} 题
          </Text>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRestart}
            className="p-1 h-8"
          >
            <RefreshCcw size={16} color="#94A3B8" />
          </Button>
        </View>
        <Progress value={progress} className="h-2 bg-slate-100 [&>div]:bg-indigo-500" />
        
        {/* 维度标签 */}
        <View className="flex items-center justify-center mt-3">
          <View className={`inline-flex items-center px-3 py-1 rounded-full ${colors.bg} border ${colors.border}`}>
            <Text className={`block text-xs font-medium ${colors.text}`}>
              {currentQuestion.dimension === 'EI' && '能量获取'}
              {currentQuestion.dimension === 'SN' && '信息获取'}
              {currentQuestion.dimension === 'TF' && '决策方式'}
              {currentQuestion.dimension === 'JP' && '生活方式'}
            </Text>
          </View>
        </View>
      </View>

      {/* 题目内容 */}
      <View className="flex-1 px-4 py-6">
        <Card className="shadow-md border-0">
          <CardContent className="p-6">
            {/* 题号 */}
            <View className="flex items-center gap-2 mb-4">
              <View className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
                <Text className="block text-sm font-semibold text-indigo-600">
                  {currentQuestion.id}
                </Text>
              </View>
              <Text className="block text-xs text-slate-400">
                选择最符合你的选项
              </Text>
            </View>

            {/* 选项 A */}
            <View 
              className={`p-4 rounded-xl border-2 mb-3 transition-all ${
                answers[currentIndex] === 0 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-slate-200 bg-white hover:border-indigo-300'
              }`}
              onClick={() => handleSelect(0)}
            >
              <View className="flex items-start gap-3">
                <View className={`flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                  answers[currentIndex] === 0 
                    ? 'border-indigo-500 bg-indigo-500' 
                    : 'border-slate-300'
                }`}
                >
                  {answers[currentIndex] === 0 && (
                    <View className="w-2 h-2 rounded-full bg-white" />
                  )}
                </View>
                <Text className="block text-base text-slate-800 leading-relaxed">
                  {currentQuestion.textA}
                </Text>
              </View>
            </View>

            {/* 分隔线 */}
            <View className="flex items-center gap-3 my-4">
              <View className="flex-1 h-px bg-slate-200" />
              <Text className="block text-xs text-slate-400">或者</Text>
              <View className="flex-1 h-px bg-slate-200" />
            </View>

            {/* 选项 B */}
            <View 
              className={`p-4 rounded-xl border-2 transition-all ${
                answers[currentIndex] === 1 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-slate-200 bg-white hover:border-indigo-300'
              }`}
              onClick={() => handleSelect(1)}
            >
              <View className="flex items-start gap-3">
                <View className={`flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                  answers[currentIndex] === 1 
                    ? 'border-indigo-500 bg-indigo-500' 
                    : 'border-slate-300'
                }`}
                >
                  {answers[currentIndex] === 1 && (
                    <View className="w-2 h-2 rounded-full bg-white" />
                  )}
                </View>
                <Text className="block text-base text-slate-800 leading-relaxed">
                  {currentQuestion.textB}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>

      {/* 底部导航 */}
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
              isAnswered 
                ? 'bg-indigo-500 hover:bg-indigo-600' 
                : 'bg-slate-200 hover:bg-slate-300'
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
                {currentIndex === mbtiQuestions.length - 1 ? '查看结果' : '下一题'}
              </Text>
              {currentIndex < mbtiQuestions.length - 1 && (
                <ArrowRight size={18} color="#FFFFFF" />
              )}
            </View>
          </Button>
        </View>
      </View>
    </View>
  )
}
