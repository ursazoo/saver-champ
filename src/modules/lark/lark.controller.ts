/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { LarkService } from './lark.service';

@Controller('lark')
export class LarkController {
  constructor(private readonly larkService: LarkService) {}

  @Get('get-hello')
  getHello(): string {
    return this.larkService.getHello();
  }
}