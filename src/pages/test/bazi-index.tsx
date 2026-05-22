import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NavBar } from '@/components/ui/navbar'
import { Input } from '@/components/ui/input'
import { CalendarDays, Clock, Sparkles, UserRound } from 'lucide-react-taro'
import { calculateBazi } from './bazi-data'

export default function BaziTest() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [gender, setGender] = useState<'男' | '女'>('男')
  const isComplete = year && month && day && hour

  const handleCalculate = () => {
    if (!isComplete) {
      Taro.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    const yearNum = parseInt(year)
    const monthNum = parseInt(month)
    const dayNum = parseInt(day)
    const hourNum = parseInt(hour)

    if (yearNum < 1900 || yearNum > 2100) {
      Taro.showToast({
        title: '请输入1900-2100年间',
        icon: 'none'
      })
      return
    }

    if (monthNum < 1 || monthNum > 12) {
      Taro.showToast({
        title: '月份请输入1-12',
        icon: 'none'
      })
      return
    }

    if (dayNum < 1 || dayNum > 31) {
      Taro.showToast({
        title: '日期请输入1-31',
        icon: 'none'
      })
      return
    }

    if (hourNum < 0 || hourNum > 23) {
      Taro.showToast({
        title: '时辰请输入0-23',
        icon: 'none'
      })
      return
    }

    const bazi = calculateBazi(yearNum, monthNum, dayNum, hourNum)

    Taro.setStorageSync('bazi_result', bazi)
    Taro.setStorageSync('bazi_gender', gender)
    Taro.setStorageSync('bazi_birth', { year: yearNum, month: monthNum, day: dayNum, hour: hourNum })
    Taro.setStorageSync('active_test_type', 'bazi')

    Taro.navigateTo({ url: '/pages/result/index?type=bazi' })
  }

  // 时辰选项
  const timeSlots = [
    { label: '子时 (23:00-01:00)', value: 23 },
    { label: '丑时 (01:00-03:00)', value: 1 },
    { label: '寅时 (03:00-05:00)', value: 3 },
    { label: '卯时 (05:00-07:00)', value: 5 },
    { label: '辰时 (07:00-09:00)', value: 7 },
    { label: '巳时 (09:00-11:00)', value: 9 },
    { label: '午时 (11:00-13:00)', value: 11 },
    { label: '未时 (13:00-15:00)', value: 13 },
    { label: '申时 (15:00-17:00)', value: 15 },
    { label: '酉时 (17:00-19:00)', value: 17 },
    { label: '戌时 (19:00-21:00)', value: 19 },
    { label: '亥时 (21:00-23:00)', value: 21 }
  ]

  return (
    <View className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white">
      <NavBar title="八字命盘" showBack />
      
      <View className="pb-28">
        {/* 头部 */}
        <View className="px-4 pt-6 pb-4 text-center">
          <View className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-3">
            <Sparkles size={32} color="#D97706" />
          </View>
          <Text className="block text-xl font-semibold text-slate-800 mb-1">输入出生信息</Text>
          <Text className="block text-sm text-slate-500">根据您的出生时间计算八字命盘</Text>
        </View>

        <View className="px-4 mb-4">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <Text className="block text-sm font-medium text-amber-800 mb-1">填写说明</Text>
              <Text className="block text-xs text-amber-700 leading-relaxed">
                请使用公历出生日期。时辰按 24 小时填写，23 点会按子时计算。
              </Text>
            </CardContent>
          </Card>
        </View>

        {/* 输入表单 */}
        <View className="px-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              {/* 性别选择 */}
              <View className="mb-6">
                <View className="flex items-center gap-2 mb-3">
                  <UserRound size={16} color="#D97706" />
                  <Text className="block text-sm font-medium text-slate-700">您的性别</Text>
                </View>
                <View className="flex gap-3">
                  <View 
                    className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${
                      gender === '男' 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                    onClick={() => setGender('男')}
                  >
                    <Text
                      className={`block text-base font-medium ${
                        gender === '男' ? 'text-amber-600' : 'text-slate-500'
                      }`}
                    >
                      ♂ 男
                    </Text>
                  </View>
                  <View 
                    className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${
                      gender === '女' 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                    onClick={() => setGender('女')}
                  >
                    <Text
                      className={`block text-base font-medium ${
                        gender === '女' ? 'text-amber-600' : 'text-slate-500'
                      }`}
                    >
                      ♀ 女
                    </Text>
                  </View>
                </View>
              </View>

              {/* 年份 */}
              <View className="mb-4">
                <View className="flex items-center gap-2 mb-2">
                  <CalendarDays size={16} color="#D97706" />
                  <Text className="block text-sm font-medium text-slate-700">出生年份</Text>
                </View>
                <View>
                  <Input 
                    type="number"
                    placeholder="请输入4位年份，如1990"
                    value={year}
                    onInput={(e) => setYear(e.detail.value)}
                  />
                </View>
              </View>

              {/* 月份 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">出生月份</Text>
                <View>
                  <Input 
                    type="number"
                    placeholder="请输入1-12"
                    value={month}
                    onInput={(e) => setMonth(e.detail.value)}
                  />
                </View>
              </View>

              {/* 日期 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">出生日期</Text>
                <View>
                  <Input 
                    type="number"
                    placeholder="请输入1-31"
                    value={day}
                    onInput={(e) => setDay(e.detail.value)}
                  />
                </View>
              </View>

              {/* 时辰 */}
              <View className="mb-4">
                <View className="flex items-center gap-2 mb-2">
                  <Clock size={16} color="#D97706" />
                  <Text className="block text-sm font-medium text-slate-700">出生时辰（小时）</Text>
                </View>
                <Text className="block text-xs text-slate-400 mb-2">输入0-23的数字（24小时制）</Text>
                <View>
                  <Input 
                    type="number"
                    placeholder="请输入0-23，如14表示下午2点"
                    value={hour}
                    onInput={(e) => setHour(e.detail.value)}
                  />
                </View>
              </View>

              {/* 快速选择时辰 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">快速选择时辰</Text>
                <View className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <View 
                      key={slot.value}
                      className={`py-2 px-1 rounded-lg text-center text-xs transition-all ${
                        parseInt(hour) === slot.value
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                      onClick={() => setHour(slot.value.toString())}
                    >
                      <Text className="block">{slot.label.split(' ')[0]}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* 底部按钮 */}
        <View
          className="bg-white px-4 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
          style={{ position: 'fixed', display: 'flex', left: 0, right: 0, bottom: 0, zIndex: 40 }}
        >
          <Button 
            className={`w-full h-12 rounded-xl ${
              isComplete 
                ? 'bg-amber-500 text-white hover:bg-amber-600' 
                : 'bg-slate-200 text-slate-400'
            }`}
            disabled={!isComplete}
            onClick={handleCalculate}
          >
            <Text className="block text-base font-medium">开始分析</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}
