// 八字命盘基础数据

// 天干
export const heavenlyStems = [
  { name: '甲', element: '木', yinYang: '阳', number: 1 },
  { name: '乙', element: '木', yinYang: '阴', number: 2 },
  { name: '丙', element: '火', yinYang: '阳', number: 3 },
  { name: '丁', element: '火', yinYang: '阴', number: 4 },
  { name: '戊', element: '土', yinYang: '阳', number: 5 },
  { name: '己', element: '土', yinYang: '阴', number: 6 },
  { name: '庚', element: '金', yinYang: '阳', number: 7 },
  { name: '辛', element: '金', yinYang: '阴', number: 8 },
  { name: '壬', element: '水', yinYang: '阳', number: 9 },
  { name: '癸', element: '水', yinYang: '阴', number: 10 }
]

// 地支
export const earthlyBranches = [
  { name: '子', element: '水', yinYang: '阳', zodiac: '鼠', number: 1 },
  { name: '丑', element: '土', yinYang: '阴', zodiac: '牛', number: 2 },
  { name: '寅', element: '木', yinYang: '阳', zodiac: '虎', number: 3 },
  { name: '卯', element: '木', yinYang: '阴', zodiac: '兔', number: 4 },
  { name: '辰', element: '土', yinYang: '阳', zodiac: '龙', number: 5 },
  { name: '巳', element: '火', yinYang: '阴', zodiac: '蛇', number: 6 },
  { name: '午', element: '火', yinYang: '阳', zodiac: '马', number: 7 },
  { name: '未', element: '土', yinYang: '阴', zodiac: '羊', number: 8 },
  { name: '申', element: '金', yinYang: '阳', zodiac: '猴', number: 9 },
  { name: '酉', element: '金', yinYang: '阴', zodiac: '鸡', number: 10 },
  { name: '戌', element: '土', yinYang: '阳', zodiac: '狗', number: 11 },
  { name: '亥', element: '水', yinYang: '阴', zodiac: '猪', number: 12 }
]

// 五行
export const fiveElements = [
  { name: '木', color: '#4CAF50', direction: '东' },
  { name: '火', color: '#F44336', direction: '南' },
  { name: '土', color: '#795548', direction: '中' },
  { name: '金', color: '#FFC107', direction: '西' },
  { name: '水', color: '#2196F3', direction: '北' }
]

// 纳音五行（六十甲子对应的纳音）
export const naYin = [
  { stem: '甲', branch: '子', naYin: '海中金', element: '金' },
  { stem: '乙', branch: '丑', naYin: '海中金', element: '金' },
  { stem: '丙', branch: '寅', naYin: '炉中火', element: '火' },
  { stem: '丁', branch: '卯', naYin: '炉中火', element: '火' },
  { stem: '戊', branch: '辰', naYin: '大林木', element: '木' },
  { stem: '己', branch: '巳', naYin: '大林木', element: '木' },
  { stem: '庚', branch: '午', naYin: '路旁土', element: '土' },
  { stem: '辛', branch: '未', naYin: '路旁土', element: '土' },
  { stem: '壬', branch: '申', naYin: '剑锋金', element: '金' },
  { stem: '癸', branch: '酉', naYin: '剑锋金', element: '金' },
  { stem: '甲', branch: '戌', naYin: '山头火', element: '火' },
  { stem: '乙', branch: '亥', naYin: '山头火', element: '火' },
  { stem: '丙', branch: '子', naYin: '涧下水', element: '水' },
  { stem: '丁', branch: '丑', naYin: '涧下水', element: '水' },
  { stem: '戊', branch: '寅', naYin: '城头土', element: '土' },
  { stem: '己', branch: '卯', naYin: '城头土', element: '土' },
  { stem: '庚', branch: '辰', naYin: '白蜡金', element: '金' },
  { stem: '辛', branch: '巳', naYin: '白蜡金', element: '金' },
  { stem: '壬', branch: '午', naYin: '杨柳木', element: '木' },
  { stem: '癸', branch: '未', naYin: '杨柳木', element: '木' },
  { stem: '甲', branch: '申', naYin: '井泉水', element: '水' },
  { stem: '乙', branch: '酉', naYin: '井泉水', element: '水' },
  { stem: '丙', branch: '戌', naYin: '屋上土', element: '土' },
  { stem: '丁', branch: '亥', naYin: '屋上土', element: '土' },
  { stem: '戊', branch: '子', naYin: '霹雳火', element: '火' },
  { stem: '己', branch: '丑', naYin: '霹雳火', element: '火' },
  { stem: '庚', branch: '寅', naYin: '松柏木', element: '木' },
  { stem: '辛', branch: '卯', naYin: '松柏木', element: '木' },
  { stem: '壬', branch: '辰', naYin: '长流水', element: '水' },
  { stem: '癸', branch: '巳', naYin: '长流水', element: '水' },
  { stem: '甲', branch: '午', naYin: '砂石金', element: '金' },
  { stem: '乙', branch: '未', naYin: '砂石金', element: '金' },
  { stem: '丙', branch: '申', naYin: '山下火', element: '火' },
  { stem: '丁', branch: '酉', naYin: '山下火', element: '火' },
  { stem: '戊', branch: '戌', naYin: '平地木', element: '木' },
  { stem: '己', branch: '亥', naYin: '平地木', element: '木' },
  { stem: '庚', branch: '子', naYin: '壁上土', element: '土' },
  { stem: '辛', branch: '丑', naYin: '壁上土', element: '土' },
  { stem: '壬', branch: '寅', naYin: '金箔金', element: '金' },
  { stem: '癸', branch: '卯', naYin: '金箔金', element: '金' },
  { stem: '甲', branch: '辰', naYin: '覆灯火', element: '火' },
  { stem: '乙', branch: '巳', naYin: '覆灯火', element: '火' },
  { stem: '丙', branch: '午', naYin: '天河水', element: '水' },
  { stem: '丁', branch: '未', naYin: '天河水', element: '水' },
  { stem: '戊', branch: '申', naYin: '大驿土', element: '土' },
  { stem: '己', branch: '酉', naYin: '大驿土', element: '土' },
  { stem: '庚', branch: '戌', naYin: '钗钏金', element: '金' },
  { stem: '辛', branch: '亥', naYin: '钗钏金', element: '金' },
  { stem: '壬', branch: '子', naYin: '桑柘木', element: '木' },
  { stem: '癸', branch: '丑', naYin: '桑柘木', element: '木' },
  { stem: '甲', branch: '寅', naYin: '大溪水', element: '水' },
  { stem: '乙', branch: '卯', naYin: '大溪水', element: '水' },
  { stem: '丙', branch: '辰', naYin: '砂石土', element: '土' },
  { stem: '丁', branch: '巳', naYin: '砂石土', element: '土' },
  { stem: '戊', branch: '午', naYin: '天上火', element: '火' },
  { stem: '己', branch: '未', naYin: '天上火', element: '火' },
  { stem: '庚', branch: '申', naYin: '石榴木', element: '木' },
  { stem: '辛', branch: '酉', naYin: '石榴木', element: '木' },
  { stem: '壬', branch: '戌', naYin: '大海水', element: '水' },
  { stem: '癸', branch: '亥', naYin: '大海水', element: '水' }
]

// 日主（天干）强弱分析
export const dayMasterStrength: Record<string, { name: string; description: string }> = {
  '甲': { name: '木', description: '甲木为阳木，如参天大树，生于春夏旺，生于秋冬衰' },
  '乙': { name: '木', description: '乙木为阴木，如花草藤蔓，喜水润生扶' },
  '丙': { name: '火', description: '丙火为阳火，如太阳之火，喜木生扶' },
  '丁': { name: '火', description: '丁火为阴火，如灯烛之火，喜甲木生' },
  '戊': { name: '土', description: '戊土为阳土，如高山厚土，喜丙丁火生' },
  '己': { name: '土', description: '己土为阴土，如田园沃土，喜丙火生' },
  '庚': { name: '金', description: '庚金为阳金，如刀斧矿石，喜丁火锻炼' },
  '辛': { name: '金', description: '辛金为阴金，如珠玉首饰，喜土生' },
  '壬': { name: '水', description: '壬水为阳水，如江河湖海，喜金生' },
  '癸': { name: '水', description: '癸水为阴水，如雨露泉流，喜金生' }
}

// 生肖性格描述
export const zodiacDescriptions: Record<string, { personality: string; lucky: string; compatible: string }> = {
  '鼠': { personality: '聪明机警、灵活多变、适应力强', lucky: '数字3、6、9', compatible: '龙、猴、牛' },
  '牛': { personality: '踏实勤劳、稳重可靠、有责任感', lucky: '数字1、9', compatible: '蛇、鸡、猴' },
  '虎': { personality: '勇敢自信、领导力强、富有冒险精神', lucky: '数字1、3、4', compatible: '马、狗、兔' },
  '兔': { personality: '温柔善良、细腻敏感、追求和谐', lucky: '数字3、6、9', compatible: '狗、猪、羊' },
  '龙': { personality: '充满活力、理想远大、善于创新', lucky: '数字1、6、7', compatible: '猴、鸡、鼠' },
  '蛇': { personality: '神秘智慧、直觉敏锐、善于思考', lucky: '数字2、8、9', compatible: '猴、鸡、牛' },
  '马': { personality: '热情奔放、自由奔放、追求成功', lucky: '数字2、3、7', compatible: '虎、羊、狗' },
  '羊': { personality: '温柔和善、艺术气质、富有同情心', lucky: '数字3、9', compatible: '兔、马、猪' },
  '猴': { personality: '聪明机智、幽默风趣、善于社交', lucky: '数字1、7、8', compatible: '龙、鼠、蛇' },
  '鸡': { personality: '勤奋认真、注重细节、有追求', lucky: '数字5、7、8', compatible: '龙、蛇、牛' },
  '狗': { personality: '忠诚可靠、正义感强、富有爱心', lucky: '数字3、7、9', compatible: '虎、兔、马' },
  '猪': { personality: '真诚善良、宽容大度、热爱生活', lucky: '数字2、5、8', compatible: '兔、羊、虎' }
}

// 八字格局
export const patterns: Record<string, { name: string; description: string }> = {
  '正官': { name: '正官格', description: '为人正直、事业有成、适合公职' },
  '七杀': { name: '七杀格', description: '个性刚强、事业心强、有领导力' },
  '正财': { name: '正财格', description: '理财有道、物质丰富、适合商业' },
  '偏财': { name: '偏财格', description: '理财高手、善于投资、财运亨通' },
  '正印': { name: '正印格', description: '学业有成、智慧渊博、适合教育' },
  '偏印': { name: '偏印格', description: '独特思维、创意丰富、适合研究' },
  '食神': { name: '食神格', description: '口才流利、善于表达、适合文艺' },
  '伤官': { name: '伤官格', description: '才华横溢、敢于创新、适合艺术' },
  '比肩': { name: '比肩格', description: '自信独立、竞争意识强、适合创业' },
  '劫财': { name: '劫财格', description: '热情冲动、社交能力强、适合外交' }
}

// 计算天干
export function getHeavenlyStem(year: number): string {
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
  return stems[(year - 4) % 10]
}

// 计算地支
export function getEarthlyBranch(year: number): string {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
  return branches[(year - 4) % 12]
}

// 计算纳音
export function getNaYin(stem: string, branch: string): string {
  const item = naYin.find(n => n.stem === stem && n.branch === branch)
  return item?.naYin || ''
}

// 计算生肖
export function getZodiac(year: number): string {
  const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
  return zodiacs[(year - 4) % 12]
}

// 计算八字
export interface BaziResult {
  year: { stem: string; branch: string; naYin: string }
  month: { stem: string; branch: string; naYin: string }
  day: { stem: string; branch: string; naYin: string }
  hour: { stem: string; branch: string; naYin: string }
  zodiac: string
  dayMaster: string
  dayMasterElement: string
  dayMasterDescription: string
}

// 计算八字主元
export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hour: number
): BaziResult {
  // 年柱天干：年份尾数对应天干（4=甲，5=乙，6=丙，7=丁，8=戊，9=己，0=庚，1=辛，2=壬，3=癸）
  const yearStemNum = (year - 4) % 10
  const yearBranchNum = (year - 4) % 12
  
  // 月柱天干：年天干对应月干（甲己年起丙月...）
  const monthStemBase: Record<number, number> = { 0: 2, 1: 4, 2: 6, 3: 8, 4: 0, 5: 2, 6: 4, 7: 6, 8: 8, 9: 0 }
  const monthStemNum = (monthStemBase[yearStemNum] + month - 1) % 10
  const monthBranchNum = (month - 1) % 12
  
  // 日柱：使用蔡勒公式计算
  const y = year
  const m = month
  let d = day
  if (m < 3) {
    y = year - 1
    d = month + 12
  }
  const c = Math.floor(y / 100)
  const y2 = y % 100
  const dayOfWeek = (Math.floor(c / 4) - 2 * c + y2 + Math.floor(y2 / 4) + Math.floor(13 * (d + 1) / 5) + d - 1) % 10
  const dayStemNum = (dayOfWeek + 10) % 10
  const dayBranchNum = (dayOfWeek + 6) % 12
  
  // 时柱天干：日干对应时干（甲己日子时...）
  const hourStemBase: Record<number, number> = { 0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 0, 6: 2, 7: 4, 8: 6, 9: 8 }
  const hourStemNum = (hourStemBase[dayStemNum] + Math.floor(hour / 2)) % 10
  const hourBranchNum = hour % 12
  
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
  
  const yearStem = stems[yearStemNum]
  const yearBranch = branches[yearBranchNum]
  const monthStem = stems[monthStemNum]
  const monthBranch = branches[monthBranchNum]
  const dayStem = stems[dayStemNum]
  const dayBranch = branches[dayBranchNum]
  const hourStem = stems[hourStemNum]
  const hourBranch = branches[hourBranchNum]
  
  const dayMasterInfo = dayMasterStrength[dayStem] || { name: '', description: '' }
  
  return {
    year: { stem: yearStem, branch: yearBranch, naYin: getNaYin(yearStem, yearBranch) },
    month: { stem: monthStem, branch: monthBranch, naYin: getNaYin(monthStem, monthBranch) },
    day: { stem: dayStem, branch: dayBranch, naYin: getNaYin(dayStem, dayBranch) },
    hour: { stem: hourStem, branch: hourBranch, naYin: getNaYin(hourStem, hourBranch) },
    zodiac: getZodiac(year),
    dayMaster: dayStem,
    dayMasterElement: dayMasterInfo.name,
    dayMasterDescription: dayMasterInfo.description
  }
}

// 计算大运
export interface DaYun {
  age: number
  stem: string
  branch: string
  naYin: string
}

export function calculateDaYun(bazi: BaziResult, gender: '男' | '女'): DaYun[] {
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
  
  // 简化版大运计算（以月柱为起点）
  const dayStemIndex = stems.indexOf(bazi.day.stem)
  const dayBranchIndex = branches.indexOf(bazi.day.branch)
  
  const daYuns: DaYun[] = []
  let startAge = 0
  
  // 根据性别和日干确定大运顺逆
  const forward = (gender === '男' && dayStemIndex % 2 === 0) || (gender === '女' && dayStemIndex % 2 === 1)
  
  for (let i = 0; i < 8; i++) {
    const stemIndex = forward 
      ? (dayStemIndex + i + 1) % 10 
      : (dayStemIndex - i - 1 + 10) % 10
    const branchIndex = forward
      ? (dayBranchIndex + i + 1) % 12
      : (dayBranchIndex - i - 1 + 12) % 12
    
    daYuns.push({
      age: startAge + i * 10,
      stem: stems[stemIndex],
      branch: branches[branchIndex],
      naYin: getNaYin(stems[stemIndex], branches[branchIndex])
    })
  }
  
  return daYuns
}

// 测试题目
export interface Question {
  id: number
  dimension: '年份' | '月份' | '日期' | '时辰'
  textA: string
  textB: string
  valueA: number
  valueB: number
}

export const baziQuestions: Question[] = [
  {
    id: 1,
    dimension: '年份',
    textA: '您的出生年份（公历）',
    textB: '请在下方输入具体年份',
    valueA: 0,
    valueB: 0
  },
  {
    id: 2,
    dimension: '月份',
    textA: '您的出生月份（公历）',
    textB: '请在下方输入具体月份',
    valueA: 0,
    valueB: 0
  },
  {
    id: 3,
    dimension: '日期',
    textA: '您的出生日期（公历）',
    textB: '请在下方输入具体日期',
    valueA: 0,
    valueB: 0
  },
  {
    id: 4,
    dimension: '时辰',
    textA: '您的出生时辰（小时）',
    textB: '请在下方输入具体时辰',
    valueA: 0,
    valueB: 0
  }
]