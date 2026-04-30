import { Module } from '@nestjs/common'
import { MBTIController } from '@/mbti.controller'

@Module({
  controllers: [MBTIController],
  providers: [],
  exports: []
})
export class MBTIModule {}
