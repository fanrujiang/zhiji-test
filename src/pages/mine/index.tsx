import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { HeartHandshake, Brain, RefreshCcw, UserRound } from 'lucide-react-taro'

const historyItems = [
  {
    key: 'mbti_result',
    title: 'MBTI 性格测试',
    icon: <Brain size={20} color="#6366F1" />,
    emptyText: '暂无 MBTI 结果'
  },
  {
    key: 'attachment_result',
    title: '依恋类型测试',
    icon: <HeartHandshake size={20} color="#EC4899" />,
    emptyText: '暂无依恋测试结果'
  },
  {
    key: 'bazi_result',
    title: '八字命盘测算',
    icon: <Brain size={20} color="#D97706" />,
    emptyText: '暂无八字命盘'
  }
]

export default function Mine() {
  const handleClear = () => {
    Taro.showModal({
      title: '清除记录',
      content: '确定清除本机保存的测试记录吗？',
      success: (res) => {
        if (!res.confirm) return

        Taro.removeStorageSync('mbti_answers')
        Taro.removeStorageSync('mbti_result')
        Taro.removeStorageSync('attachment_answers')
        Taro.removeStorageSync('attachment_result')
        Taro.removeStorageSync('bazi_result')
        Taro.removeStorageSync('bazi_gender')
        Taro.removeStorageSync('bazi_birth')
        Taro.showToast({ title: '已清除', icon: 'success' })
      }
    })
  }

  const getResultText = (key: string) => {
    const value = Taro.getStorageSync(key)

    if (!value) return ''
    if (key === 'attachment_result') return value.title || ''
    if (key === 'bazi_result') {
      return `${value.year.stem}${value.year.branch} ${value.month.stem}${value.month.branch} ${value.day.stem}${value.day.branch} ${value.hour.stem}${value.hour.branch}`
    }
    return value
  }

  return (
    <View className="min-h-screen bg-slate-50 px-4 pt-8 pb-24">
      <View className="flex items-center gap-3 mb-6">
        <View className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center">
          <UserRound size={28} color="#475569" />
        </View>
        <View>
          <Text className="block text-xl font-bold text-slate-800">我的测算</Text>
          <Text className="block text-sm text-slate-500">本机保存最近一次测试结果</Text>
        </View>
      </View>

      <View className="gap-3 mb-6">
        {historyItems.map((item) => {
          const resultText = getResultText(item.key)

          return (
            <Card key={item.key} className="border-slate-200">
              <CardContent className="p-4">
                <View className="flex items-center justify-between">
                  <View className="flex items-center gap-3">
                    <View className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      {item.icon}
                    </View>
                    <View>
                      <Text className="block text-base font-semibold text-slate-800">{item.title}</Text>
                      <Text className="block text-sm text-slate-500">
                        {resultText || item.emptyText}
                      </Text>
                    </View>
                  </View>
                </View>
              </CardContent>
            </Card>
          )
        })}
      </View>

      <Button
        variant="outline"
        className="w-full h-12 rounded-xl border-slate-200 bg-white"
        onClick={handleClear}
      >
        <View className="flex items-center gap-2">
          <RefreshCcw size={18} color="#475569" />
          <Text className="block text-sm font-medium text-slate-600">清除本机记录</Text>
        </View>
      </Button>
    </View>
  )
}
