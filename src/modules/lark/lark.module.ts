import { LarkController } from './lark.controller'
import { LarkService } from './lark.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [LarkController],
  providers: [LarkService],
})
export class LarkModule {}
