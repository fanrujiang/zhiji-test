export type AttachmentDimension = 'anxiety' | 'avoidance'
export type AttachmentType = 'secure' | 'anxious' | 'avoidant' | 'fearful'

export interface AttachmentQuestion {
  id: number
  dimension: AttachmentDimension
  text: string
  reverse?: boolean
}

export interface AttachmentScores {
  anxiety: number
  avoidance: number
}

export interface AttachmentResult {
  type: AttachmentType
  title: string
  subtitle: string
  description: string
  scores: AttachmentScores
  strengths: string[]
  growthTips: string[]
  relationshipTips: string[]
}

export const attachmentQuestions: AttachmentQuestion[] = [
  { id: 1, dimension: 'anxiety', text: '当重要的人没有及时回复消息时，我容易反复猜测对方是不是不在乎我。' },
  { id: 2, dimension: 'avoidance', text: '当关系变得很亲密时，我会本能地想保留更多个人空间。' },
  { id: 3, dimension: 'anxiety', text: '我常常需要通过对方的回应来确认自己在关系中的位置。' },
  { id: 4, dimension: 'avoidance', text: '我不太习惯把脆弱、害怕或依赖的一面展示给别人。' },
  { id: 5, dimension: 'anxiety', text: '如果对方情绪变冷，我会很快联想到关系可能出现问题。' },
  { id: 6, dimension: 'avoidance', text: '遇到压力时，我更倾向于自己消化，而不是向亲近的人求助。' },
  { id: 7, dimension: 'anxiety', text: '我会担心自己付出的感情比对方更多。' },
  { id: 8, dimension: 'avoidance', text: '别人过度关心我时，我有时会觉得被束缚。' },
  { id: 9, dimension: 'anxiety', text: '我希望亲密关系里能经常得到明确的承诺和安抚。' },
  { id: 10, dimension: 'avoidance', text: '我倾向于避免谈论太深的情绪问题。' },
  { id: 11, dimension: 'anxiety', text: '我会因为对方的一句随口评价而反复琢磨很久。' },
  { id: 12, dimension: 'avoidance', text: '我觉得保持独立比频繁分享感受更重要。' },
  { id: 13, dimension: 'anxiety', text: '当关系进展顺利时，我也会担心这种稳定会不会突然消失。' },
  { id: 14, dimension: 'avoidance', text: '如果对方期待我更多表达爱意，我可能会感到压力。' },
  { id: 15, dimension: 'anxiety', text: '我很在意自己是否是对方最重要的人之一。' },
  { id: 16, dimension: 'avoidance', text: '我不喜欢别人太快进入我的私人生活。' },
  { id: 17, dimension: 'anxiety', text: '争执之后，如果没有立刻和好，我会很难安心做别的事。' },
  { id: 18, dimension: 'avoidance', text: '当关系出现矛盾时，我会想先拉开距离冷静一段时间。' },
  { id: 19, dimension: 'anxiety', text: '我会担心自己不够好，因此被亲近的人放弃。' },
  { id: 20, dimension: 'avoidance', text: '我更习惯用行动解决问题，而不是长时间谈感受。' },
  { id: 21, dimension: 'anxiety', text: '即使对方没有明显变化，我也可能担心自己正在失去吸引力。' },
  { id: 22, dimension: 'avoidance', text: '我觉得亲密关系不应该影响个人节奏和边界。' },
  { id: 23, dimension: 'anxiety', text: '我希望对方能主动察觉我的不安，而不是每次都要我说出口。' },
  { id: 24, dimension: 'avoidance', text: '如果有人太依赖我，我会想后退一点。' },
  { id: 25, dimension: 'anxiety', text: '我容易把关系中的小变化理解成对方态度改变。' },
  { id: 26, dimension: 'avoidance', text: '我很少主动请求陪伴、安慰或支持。' },
  { id: 27, dimension: 'anxiety', text: '我会通过反复确认来缓解关系里的不确定感。' },
  { id: 28, dimension: 'avoidance', text: '当别人想更了解我时，我有时会下意识转移话题。' },
  { id: 29, dimension: 'anxiety', text: '我害怕亲近的人发现真实的我之后会失望。' },
  { id: 30, dimension: 'avoidance', text: '我认为很多情绪问题最终还是只能靠自己处理。' },
  { id: 31, dimension: 'anxiety', text: '我能相信亲近的人在乎我，不需要频繁确认。', reverse: true },
  { id: 32, dimension: 'avoidance', text: '在安全的关系里，我愿意自然地表达需要和依赖。', reverse: true },
  { id: 33, dimension: 'anxiety', text: '关系里短暂的距离不会让我立刻感到被抛下。', reverse: true },
  { id: 34, dimension: 'avoidance', text: '我愿意让重要的人参与我的真实生活和情绪。', reverse: true },
  { id: 35, dimension: 'anxiety', text: '当对方需要独处时，我通常能理解这不代表关系变差。', reverse: true },
  { id: 36, dimension: 'avoidance', text: '我能比较自在地接受别人的照顾和支持。', reverse: true },
  { id: 37, dimension: 'anxiety', text: '我相信关系中的问题可以沟通修复，而不是马上失控。', reverse: true },
  { id: 38, dimension: 'avoidance', text: '我可以在保持独立的同时，也允许关系变得亲密。', reverse: true },
  { id: 39, dimension: 'anxiety', text: '我对自己的关系价值有基本稳定的信心。', reverse: true },
  { id: 40, dimension: 'avoidance', text: '谈论内心感受对我来说并不总是困难的事。', reverse: true }
]

export const attachmentScaleLabels = ['很不同意', '不同意', '不确定', '同意', '很同意']

const attachmentDescriptions: Record<AttachmentType, Omit<AttachmentResult, 'scores' | 'type'>> = {
  secure: {
    title: '安全型依恋',
    subtitle: '亲密与独立都能自然存在',
    description: '你通常能在关系中保持信任、表达需求，也能尊重彼此边界。你不太需要频繁确认关系，也不会因为亲密而明显退缩。',
    strengths: ['信任感稳定', '沟通较直接', '边界感健康', '修复能力较好'],
    growthTips: ['继续保持清晰表达，不把体贴变成过度承担。', '遇到关系压力时，优先讨论事实、感受和具体请求。', '允许自己偶尔不安，安全型也不代表永远稳定。'],
    relationshipTips: ['适合建立节奏稳定、能互相回应的关系。', '你可以成为关系里的稳定力量，但也要让对方承担自己的部分。']
  },
  anxious: {
    title: '焦虑型依恋',
    subtitle: '很重视连接，也容易害怕失去',
    description: '你对关系中的回应和承诺比较敏感，容易在不确定时反复确认。你的在乎很真切，但有时会被不安推着走。',
    strengths: ['情感感知敏锐', '投入度高', '重视承诺', '愿意经营关系'],
    growthTips: ['把“确认我是否重要”改写成更具体的请求，例如约定回复节奏。', '不安升高时先暂停推演，区分事实、猜测和需求。', '练习把注意力放回自己的生活节奏，而不只盯着对方反应。'],
    relationshipTips: ['适合回应稳定、愿意沟通的人。', '关系中可以提前约定冲突后的修复方式，减少反复猜测。']
  },
  avoidant: {
    title: '回避型依恋',
    subtitle: '很重视自主，也容易和亲密保持距离',
    description: '你习惯独立处理压力，关系越靠近时越需要空间。你并非不在乎，只是表达需要和脆弱对你来说成本较高。',
    strengths: ['独立性强', '边界清晰', '情绪自控', '解决问题务实'],
    growthTips: ['尝试用低压力方式表达感受，例如先说“我需要一点时间，但我没有要离开”。', '把亲密理解为可协商的距离，而不是失去自由。', '练习接受支持，不必所有事情都独自完成。'],
    relationshipTips: ['适合尊重边界、沟通节奏温和的人。', '关系中可以明确独处时间，也明确回来沟通的时间。']
  },
  fearful: {
    title: '恐惧/混乱型依恋',
    subtitle: '既渴望靠近，也担心靠近后受伤',
    description: '你可能同时有较强的不安和防御：一方面渴望被坚定选择，另一方面又会在关系靠近时害怕失控或受伤。',
    strengths: ['洞察力强', '保护意识高', '情感深度高', '对关系变化敏感'],
    growthTips: ['先识别当下是“想靠近”还是“想保护自己”，不要急着做最终决定。', '建立稳定的自我安抚流程，再进入重要沟通。', '如果旧经历反复触发强烈反应，可以考虑寻求专业支持。'],
    relationshipTips: ['适合稳定、耐心、边界清楚的人。', '关系里需要把安全感拆成可执行约定，而不是只靠情绪确认。']
  }
}

export function calculateAttachment(answers: number[]): AttachmentResult {
  const totals: Record<AttachmentDimension, number> = { anxiety: 0, avoidance: 0 }
  const counts: Record<AttachmentDimension, number> = { anxiety: 0, avoidance: 0 }

  attachmentQuestions.forEach((question, index) => {
    const rawScore = answers[index] >= 0 ? answers[index] + 1 : 3
    const score = question.reverse ? 6 - rawScore : rawScore
    totals[question.dimension] += score
    counts[question.dimension] += 1
  })

  const scores = {
    anxiety: Number((totals.anxiety / counts.anxiety).toFixed(1)),
    avoidance: Number((totals.avoidance / counts.avoidance).toFixed(1))
  }

  const highAnxiety = scores.anxiety >= 3.2
  const highAvoidance = scores.avoidance >= 3.2
  let type: AttachmentType = 'secure'

  if (highAnxiety && highAvoidance) {
    type = 'fearful'
  } else if (highAnxiety) {
    type = 'anxious'
  } else if (highAvoidance) {
    type = 'avoidant'
  }

  return {
    type,
    scores,
    ...attachmentDescriptions[type]
  }
}
