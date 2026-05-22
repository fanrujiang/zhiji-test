import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { ChevronLeft, House } from 'lucide-react-taro'
import { cn } from '@/lib/utils'

interface NavBarProps {
  title: string
  showBack?: boolean
  className?: string
}

export function NavBar({ title, showBack = true, className }: NavBarProps) {
  const pages = Taro.getCurrentPages()
  const canGoBack = pages.length > 1

  const handleBack = () => {
    if (canGoBack) {
      Taro.navigateBack()
      return
    }

    Taro.switchTab({ url: '/pages/index/index' })
  }

  return (
    <>
      <View
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-12 bg-white border-b border-slate-100 flex items-center justify-center px-4',
          className
        )}
        style={{ position: 'fixed', display: 'flex' }}
      >
        {showBack && (
          <View
            className="absolute left-3 top-0 h-12 w-10 flex items-center justify-center"
            onClick={handleBack}
          >
            {canGoBack ? (
              <ChevronLeft size={24} color="#334155" />
            ) : (
              <House size={22} color="#334155" />
            )}
          </View>
        )}
        <Text className="block max-w-3/5 truncate text-base font-semibold text-slate-800">
          {title}
        </Text>
      </View>
      <View className="h-12" />
    </>
  )
}
