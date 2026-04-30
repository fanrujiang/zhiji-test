import { Controller, Get, Post, Body, Query } from '@nestjs/common'

interface MBTIResult {
  id?: number
  mbtiType: string
  answers: number[]
  createTime: string
}

@Controller('mbti')
export class MBTIController {
  private results: MBTIResult[] = []

  @Post('results')
  saveResult(@Body() body: { mbtiType: string; answers: number[]; createTime: string }) {
    const result: MBTIResult = {
      id: this.results.length + 1,
      mbtiType: body.mbtiType,
      answers: body.answers,
      createTime: body.createTime || new Date().toISOString()
    }
    this.results.push(result)
    
    console.log('[MBTI] 保存结果:', {
      url: '/api/mbti/results',
      method: 'POST',
      body: body,
      response: { code: 200, msg: 'success', data: result }
    })

    return {
      code: 200,
      msg: 'success',
      data: result
    }
  }

  @Get('results')
  getResults(@Query('userId') userId?: string) {
    const userResults = userId 
      ? this.results.filter(r => r.id?.toString() === userId)
      : this.results

    console.log('[MBTI] 获取结果列表:', {
      url: '/api/mbti/results',
      method: 'GET',
      query: { userId },
      response: { code: 200, msg: 'success', data: userResults }
    })

    return {
      code: 200,
      msg: 'success',
      data: userResults
    }
  }

  @Get('results/latest')
  getLatestResult() {
    const latest = this.results[this.results.length - 1]

    console.log('[MBTI] 获取最新结果:', {
      url: '/api/mbti/results/latest',
      method: 'GET',
      response: { code: 200, msg: 'success', data: latest }
    })

    return {
      code: 200,
      msg: 'success',
      data: latest
    }
  }

  @Get('types')
  getTypes() {
    const types = [
      { type: 'INTJ', name: '建筑师', description: '富有想象力和战略性的思想家' },
      { type: 'INTP', name: '逻辑学家', description: '用创新精神解决难题的创造者' },
      { type: 'ENTJ', name: '指挥官', description: '大胆、富有想象力的领导者' },
      { type: 'ENTP', name: '辩论家', description: '聪明好奇的思考者' },
      { type: 'INFJ', name: '提倡者', description: '安静而神秘的理想主义者' },
      { type: 'INFP', name: '调停者', description: '诗意、善良的利他主义者' },
      { type: 'ENFJ', name: '主人公', description: '充满魅力的鼓舞者' },
      { type: 'ENFP', name: '竞选者', description: '热情洋溢的创意者' },
      { type: 'ISTJ', name: '物流师', description: '值得信赖的现实主义者' },
      { type: 'ISFJ', name: '守护者', description: '专注热情的照顾者' },
      { type: 'ESTJ', name: '总经理', description: '优秀的管理者' },
      { type: 'ESFJ', name: '执政官', description: '细心周到的照顾者' },
      { type: 'ISTP', name: '鉴赏家', description: '大胆而实际的冒险家' },
      { type: 'ISFP', name: '探险家', description: '灵活迷人的艺术家' },
      { type: 'ESTP', name: '企业家', description: '聪明精力的冒险者' },
      { type: 'ESFP', name: '表演者', description: '自发的表演者' }
    ]

    console.log('[MBTI] 获取类型列表:', {
      url: '/api/mbti/types',
      method: 'GET',
      response: { code: 200, msg: 'success', data: types }
    })

    return {
      code: 200,
      msg: 'success',
      data: types
    }
  }
}
