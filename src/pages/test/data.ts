// MBTI 测试题目数据
export interface Question {
  id: number
  dimension: 'EI' | 'SN' | 'TF' | 'JP' // 对应的维度
  textA: string  // 选项A
  textB: string  // 选项B
  scoreA: number // 选项A得分(偏向第一个字母)
  scoreB: number // 选项B得分(偏向第二个字母)
}

export const mbtiQuestions: Question[] = [
  {
    id: 1,
    dimension: 'EI',
    textA: '主动和许多人打招呼，快速进入状态',
    textB: '先观察氛围，和熟悉的人慢慢聊起来',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 2,
    dimension: 'EI',
    textA: '把想法说出来，在交流中理清思路',
    textB: '先在脑中想清楚，再表达观点',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 3,
    dimension: 'EI',
    textA: '周末更想约朋友出门活动',
    textB: '周末更想独处休息、做自己的事',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 4,
    dimension: 'EI',
    textA: '长时间社交后仍然精神充沛',
    textB: '长时间社交后需要独处恢复能量',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 5,
    dimension: 'EI',
    textA: '遇到问题时会先找人讨论',
    textB: '遇到问题时会先自己分析',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 6,
    dimension: 'EI',
    textA: '更习惯边做边说边调整',
    textB: '更习惯先想后做并保持节奏',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 7,
    dimension: 'EI',
    textA: '在团队讨论中经常率先发言',
    textB: '在团队讨论中先听完再补充关键观点',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 8,
    dimension: 'EI',
    textA: '认识新朋友会感到兴奋',
    textB: '认识新朋友需要先建立安全感',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 9,
    dimension: 'EI',
    textA: '喜欢成为话题推动者',
    textB: '喜欢作为倾听者和回应者',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 10,
    dimension: 'EI',
    textA: '临时被邀约时通常会答应试试',
    textB: '临时被邀约时通常会先评估状态再决定',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 11,
    dimension: 'SN',
    textA: '更关注事实细节与现实可行性',
    textB: '更关注整体趋势与潜在可能性',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 12,
    dimension: 'SN',
    textA: '学习新知识时偏好先掌握具体步骤',
    textB: '学习新知识时偏好先理解背后原理',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 13,
    dimension: 'SN',
    textA: '描述事情时常引用真实经历',
    textB: '描述事情时常用比喻和想象场景',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 14,
    dimension: 'SN',
    textA: '更擅长发现现有流程中的具体问题',
    textB: '更擅长提出全新的方向和概念',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 15,
    dimension: 'SN',
    textA: '更信任已经被验证的方法',
    textB: '更愿意尝试尚未验证的新方法',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 16,
    dimension: 'SN',
    textA: '做决定更依赖可量化的信息',
    textB: '做决定更依赖对未来图景的判断',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 17,
    dimension: 'SN',
    textA: '阅读说明书时会按步骤逐条执行',
    textB: '阅读说明书时会先浏览框架再灵活尝试',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 18,
    dimension: 'SN',
    textA: '回顾一天时会记得具体做了什么',
    textB: '回顾一天时会想到这一天意味着什么',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 19,
    dimension: 'SN',
    textA: '面对新项目时先确认资源和边界',
    textB: '面对新项目时先想象理想成果',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 20,
    dimension: 'SN',
    textA: '你更喜欢稳定可预测的工作方式',
    textB: '你更喜欢探索变化和创新的工作方式',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 21,
    dimension: 'TF',
    textA: '做决定时优先考虑客观标准',
    textB: '做决定时优先考虑相关人的感受',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 22,
    dimension: 'TF',
    textA: '给同事反馈时会直接指出问题',
    textB: '给同事反馈时会先照顾情绪再提建议',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 23,
    dimension: 'TF',
    textA: '你更认同规则应一致适用于所有人',
    textB: '你更认同规则应根据个体情况调整',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 24,
    dimension: 'TF',
    textA: '争论中更在意观点是否严谨',
    textB: '争论中更在意关系是否和谐',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 25,
    dimension: 'TF',
    textA: '评价方案时先看效率和结果',
    textB: '评价方案时先看价值和人性化',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 26,
    dimension: 'TF',
    textA: '面对冲突时倾向于理性分析原因',
    textB: '面对冲突时倾向于先安抚彼此情绪',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 27,
    dimension: 'TF',
    textA: '更容易被逻辑论证说服',
    textB: '更容易被真实故事和情感打动',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 28,
    dimension: 'TF',
    textA: '评估表现时更重视是否达标',
    textB: '评估表现时更重视是否尽力',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 29,
    dimension: 'TF',
    textA: '在团队中常担任问题解决者',
    textB: '在团队中常担任关系协调者',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 30,
    dimension: 'TF',
    textA: '你认为公平比体谅更优先',
    textB: '你认为体谅比公平更优先',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 31,
    dimension: 'JP',
    textA: '你喜欢提前规划并按计划执行',
    textB: '你喜欢保留弹性并根据情况调整',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 32,
    dimension: 'JP',
    textA: '工作台通常保持整洁有序',
    textB: '工作台通常是动态变化但自己清楚',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 33,
    dimension: 'JP',
    textA: '旅行前会把行程安排得很细',
    textB: '旅行前只定大方向，现场再探索',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 34,
    dimension: 'JP',
    textA: '你喜欢尽早完成任务获得确定感',
    textB: '你喜欢临近截止时集中冲刺',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 35,
    dimension: 'JP',
    textA: '更偏好明确规则和清晰分工',
    textB: '更偏好开放协作和自由探索',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 36,
    dimension: 'JP',
    textA: '遇到变化会先想如何恢复秩序',
    textB: '遇到变化会先想如何利用机会',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 37,
    dimension: 'JP',
    textA: '做清单并打勾会让你有满足感',
    textB: '随灵感推进任务会让你更有动力',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 38,
    dimension: 'JP',
    textA: '你更喜欢事情有明确结论',
    textB: '你更喜欢事情保留更多可能',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 39,
    dimension: 'JP',
    textA: '收到任务时会先排期再动手',
    textB: '收到任务时会先尝试再逐步定计划',
    scoreA: 1,
    scoreB: 0
  },
  {
    id: 40,
    dimension: 'JP',
    textA: '你更偏好可预见的节奏',
    textB: '你更偏好灵活多变的节奏',
    scoreA: 1,
    scoreB: 0
  }
]

// MBTI 类型描述
export interface MBTIResult {
  type: string
  name: string
  description: string
  strengths: string[]
  career: string[]
  compatible: string[]
}

export const mbtiDescriptions: Record<string, MBTIResult> = {
  'INTJ': {
    type: 'INTJ',
    name: '建筑师',
    description: '富有想象力和战略性的思想家，一切都在他们的计划之中。',
    strengths: ['独立思考', '战略眼光', '追求完美', '逻辑清晰'],
    career: ['战略规划', '金融分析', '科研人员', '管理咨询'],
    compatible: ['INTP', 'ENTP', 'INFJ']
  },
  'INTP': {
    type: 'INTP',
    name: '逻辑学家',
    description: '用创新精神解决难题的创造者，对知识充满渴望。',
    strengths: ['创新思维', '分析能力', '求知欲强', '逻辑严密'],
    career: ['数据科学', '哲学研究', '软件开发', '学术研究'],
    compatible: ['INTJ', 'ENTJ', 'INFJ']
  },
  'ENTJ': {
    type: 'ENTJ',
    name: '指挥官',
    description: '大胆、富有想象力的领导者，总是能找到解决问题的方法。',
    strengths: ['领导能力', '决策果断', '自信坚定', '战略思维'],
    career: ['企业高管', '律师', '创业者', '投资银行'],
    compatible: ['INTP', 'ENTP', 'INTJ']
  },
  'ENTP': {
    type: 'ENTP',
    name: '辩论家',
    description: '聪明好奇的思考者，善于将一切转化为头脑风暴。',
    strengths: ['机智聪明', '思维敏捷', '善于沟通', '创新精神'],
    career: ['律师', '企业家', '公共关系', '营销策划'],
    compatible: ['INTJ', 'INFJ', 'ENFJ']
  },
  'INFJ': {
    type: 'INFJ',
    name: '提倡者',
    description: '安静而神秘，鼓舞人心且不知疲倦地追求理想。',
    strengths: ['同理心强', '理想主义', '创造力', '洞察力'],
    career: ['心理咨询', '社会工作', '艺术创作', '人力资源'],
    compatible: ['INFP', 'ENFP', 'INTP']
  },
  'INFP': {
    type: 'INFP',
    name: '调停者',
    description: '诗意、善良的利他主义者，总是热情地为他人提供帮助。',
    strengths: ['同理心', '创意无限', '理想主义', '适应力强'],
    career: ['写作', '心理咨询', '艺术设计', '教育研究'],
    compatible: ['INFJ', 'ENFP', 'INTP']
  },
  'ENFJ': {
    type: 'ENFJ',
    name: '主人公',
    description: '充满魅力、鼓舞人心的领导者，天生的领导者。',
    strengths: ['感染力强', '领导才能', '同理心', '沟通能力'],
    career: ['管理培训', '公关', '人力资源', '教师'],
    compatible: ['INFP', 'ENFP', 'ISFP']
  },
  'ENFP': {
    type: 'ENFP',
    name: '竞选者',
    description: '热情洋溢、富有想象力的创意者，对世界充满好奇。',
    strengths: ['热情活力', '创意无限', '适应力强', '沟通能力'],
    career: ['市场营销', '广告创意', '旅游策划', '活动策划'],
    compatible: ['INFJ', 'INTJ', 'ENFJ']
  },
  'ISTJ': {
    type: 'ISTJ',
    name: '物流师',
    description: '值得信赖的现实主义者，注重事实和逻辑。',
    strengths: ['责任感强', '诚实可靠', '专注务实', '有条理'],
    career: ['会计', '审计', '法律', '行政管理'],
    compatible: ['ESFJ', 'ESTJ', 'ISFJ']
  },
  'ISFJ': {
    type: 'ISFJ',
    name: '守护者',
    description: '非常专注和热情的朋友，忠于自己的职责。',
    strengths: ['忠诚可靠', '细心周到', '责任感强', '善于照顾他人'],
    career: ['护理', '行政管理', '社会服务', '人力资源'],
    compatible: ['ESFP', 'ISTP', 'ESTJ']
  },
  'ESTJ': {
    type: 'ESTJ',
    name: '总经理',
    description: '优秀的管理者，在任何事情上都表现得出类拔萃。',
    strengths: ['执行力强', '管理能力', '正直诚实', '务实可靠'],
    career: ['企业管理', '金融', '执法', '军事'],
    compatible: ['ISTJ', 'ISFJ', 'ESTP']
  },
  'ESFJ': {
    type: 'ESFJ',
    name: '执政官',
    description: '细心、周到的照顾者，热衷于让身边的人快乐。',
    strengths: ['善于社交', '乐于助人', '有责任感', '忠诚可靠'],
    career: ['护理', '教育', '人力资源', '客户服务'],
    compatible: ['ISTJ', 'ISFJ', 'ESTP']
  },
  'ISTP': {
    type: 'ISTP',
    name: '鉴赏家',
    description: '大胆而实际的冒险家，熟练掌握各种工具。',
    strengths: ['动手能力强', '理性冷静', '适应力强', '分析能力'],
    career: ['工程', '技术维修', '执法', '金融分析'],
    compatible: ['ESFP', 'ESTP', 'ISFP']
  },
  'ISFP': {
    type: 'ISFP',
    name: '探险家',
    description: '灵活、迷人的艺术家，时刻准备探索新事物。',
    strengths: ['艺术气质', '观察力强', '适应力强', '追求美感'],
    career: ['艺术设计', '时尚', '摄影', '烹饪'],
    compatible: ['ESFP', 'ENFP', 'ESTP']
  },
  'ESTP': {
    type: 'ESTP',
    name: '企业家',
    description: '聪明、精力充沛的冒险者，擅长即兴发挥。',
    strengths: ['适应力强', '执行力强', '善于社交', '务实'],
    career: ['企业家', '销售', '金融', '房地产'],
    compatible: ['ISFP', 'ISTP', 'ESFJ']
  },
  'ESFP': {
    type: 'ESFP',
    name: '表演者',
    description: '自发的、精力充沛的表演者，喜欢成为关注的焦点。',
    strengths: ['活泼开朗', '社交能力强', '艺术天赋', '热爱生活'],
    career: ['演艺', '销售', '旅游', '活动主持'],
    compatible: ['ISFP', 'ISTP', 'ESTJ']
  }
}

// 默认描述（用于未知组合）
export const defaultResult: MBTIResult = {
  type: 'UNKNOWN',
  name: '未知类型',
  description: '您的性格特点比较均衡，请重新测试以获得更准确的结果。',
  strengths: ['平衡发展', '适应力强', '灵活变通'],
  career: ['管理', '协调', '综合类工作'],
  compatible: []
}

// 计算 MBTI 结果
export function calculateMBTI(answers: number[]): string {
  const firstLetterScore: Record<'EI' | 'SN' | 'TF' | 'JP', number> = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  }
  const questionCountByDimension: Record<'EI' | 'SN' | 'TF' | 'JP', number> = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  }

  mbtiQuestions.forEach((question, index) => {
    const answer = answers[index]
    questionCountByDimension[question.dimension] += 1

    if (answer === 0) {
      firstLetterScore[question.dimension] += question.scoreA
    } else if (answer === 1) {
      firstLetterScore[question.dimension] += question.scoreB
    }
  })

  const eOrI = firstLetterScore.EI >= questionCountByDimension.EI / 2 ? 'E' : 'I'
  const sOrN = firstLetterScore.SN >= questionCountByDimension.SN / 2 ? 'S' : 'N'
  const tOrF = firstLetterScore.TF >= questionCountByDimension.TF / 2 ? 'T' : 'F'
  const jOrP = firstLetterScore.JP >= questionCountByDimension.JP / 2 ? 'J' : 'P'

  return `${eOrI}${sOrN}${tOrF}${jOrP}`
}
