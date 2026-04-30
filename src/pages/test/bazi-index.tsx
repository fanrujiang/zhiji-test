import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NavBar } from '@/components/ui/navbar'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react-taro'
import { calculateBazi, BaziResult, getZodiac, getNaYin, dayMasterStrength } from './bazi-data'

export default function BaziTest() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [gender, setGender] = useState<'男' | '女'>('男')
  const [showCalendar, setShowCalendar] = useState(false)
  const [calendarMode, setCalendarMode] = useState<'year' | 'month' | 'day'>('year')

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

    // 计算八字
    const bazi = calculateBazi(yearNum, monthNum, dayNum, hourNum)
    
    // 保存结果
    Taro.setStorageSync('bazi_result', bazi)
    Taro.setStorageSync('bazi_gender', gender)
    Taro.setStorageSync('bazi_birth', { year: yearNum, month: monthNum, day: dayNum, hour: hourNum })
    
    // 跳转到结果页
    Taro.navigateTo({ url: '/pages/result/index?type=bazi' })
  }

  const handleSelectYear = () => {
    setCalendarMode('year')
    setShowCalendar(true)
  }

  const handleSelectMonth = () => {
    setCalendarMode('month')
    setShowCalendar(true)
  }

  const handleSelectDay = () => {
    setCalendarMode('day')
    setShowCalendar(true)
  }

  const handleCalendarConfirm = (date: Date) => {
    if (calendarMode === 'year') {
      setYear(date.getFullYear().toString())
    } else if (calendarMode === 'month') {
      setMonth((date.getMonth() + 1).toString())
    } else {
      setDay(date.getDate().toString())
    }
    setShowCalendar(false)
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
      
      <View className="pt-16 pb-20">
        {/* 头部 */}
        <View className="px-4 pt-6 pb-4 text-center">
          <View className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-3">
            <Sparkles size={32} color="#D97706" />
          </View>
          <Text className="block text-xl font-semibold text-slate-800 mb-1">输入出生信息</Text>
          <Text className="block text-sm text-slate-500">根据您的出生时间计算八字命盘</Text>
        </View>

        {/* 输入表单 */}
        <View className="px-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              {/* 性别选择 */}
              <View className="mb-6">
                <Text className="block text-sm font-medium text-slate-700 mb-3">您的性别</Text>
                <View className="flex gap-3">
                  <View 
                    className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${
                      gender === '男' 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                    onClick={() => setGender('男')}
                  >
                    <Text className={`block text-base font-medium ${
                      gender === '男' ? 'text-amber-600' : 'text-slate-500'
                    }`}>♂ 男</Text>
                  </View>
                  <View 
                    className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${
                      gender === '女' 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                    onClick={() => setGender('女')}
                  >
                    <Text className={`block text-base font-medium ${
                      gender === '女' ? 'text-amber-600' : 'text-slate-500'
                    }`}>♀ 女</Text>
                  </View>
                </View>
              </View>

              {/* 年份 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">出生年份</Text>
                <View className="bg-slate-50 rounded-xl px-4 py-3">
                  <Input 
                    type="number"
                    placeholder="请输入4位年份，如1990"
                    value={year}
                    onChange={(e) => setYear(e.detail.value)}
                  />
                </View>
              </View>

              {/* 月份 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">出生月份</Text>
                <View className="bg-slate-50 rounded-xl px-4 py-3">
                  <Input 
                    type="number"
                    placeholder="请输入1-12"
                    value={month}
                    onChange={(e) => setMonth(e.detail.value)}
                  />
                </View>
              </View>

              {/* 日期 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">出生日期</Text>
                <View className="bg-slate-50 rounded-xl px-4 py-3">
                  <Input 
                    type="number"
                    placeholder="请输入1-31"
                    value={day}
                    onChange={(e) => setDay(e.detail.value)}
                  />
                </View>
              </View>

              {/* 时辰 */}
              <View className="mb-4">
                <Text className="block text-sm font-medium text-slate-700 mb-2">出生时辰（小时）</Text>
                <Text className="block text-xs text-slate-400 mb-2">输入0-23的数字（24小时制）</Text>
                <View className="bg-slate-50 rounded-xl px-4 py-3">
                  <Input 
                    type="number"
                    placeholder="请输入0-23，如14表示下午2点"
                    value={hour}
                    onChange={(e) => setHour(e.detail.value)}
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
        <View className="fixed bottom-0 left-0 right-0 bg-white px-4 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
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