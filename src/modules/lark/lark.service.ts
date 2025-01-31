/*
https://docs.nestjs.com/providers#services
*/

import * as Lark from '@larksuiteoapi/node-sdk';
import { Injectable } from '@nestjs/common';

// 飞书配置类型
interface LarkConfig {
    appId: string;
    appSecret: string;
  }
  
  // 默认配置（从环境变量获取）
  const defaultLarkConfig = (): LarkConfig => ({
    appId: process.env.LARK_APP_ID,
    appSecret: process.env.LARK_APP_SECRET,
  });

@Injectable()
export class LarkService {
  private wsClient: any;
  getHello(): string {
    return 'Hello World!!!!';
  }

  constructor() {
    this.wsClient = new Lark.WSClient({
      appId: defaultLarkConfig().appId,
      appSecret: defaultLarkConfig().appSecret
    });

    // 启动 WebSocket 连接
    this.wsClient.start({ 
      eventDispatcher: this.createEventDispatcher() 
    });
    console.log('UserService constructor');
  }

  private createEventDispatcher() {
    return new Lark.EventDispatcher({})
      .register({
        "card.action.trigger": (data:any) => {
          console.log(data);
          return {
            toast: {
              type: "success",
              content: "卡片交互成功",
              i18n: {
                zh_cn: "卡片交互成功",
                en_us: "card action success",
              },
            },
          };
        }
      });
  }

  // private async handleCardAction(data: any) {
  //   console.log('Received card action:', data);
  //   return {
  //     toast: {
  //       type: "success",
  //       content: "卡片交互成功",
  //       i18n: {
  //         zh_cn: "卡片交互成功",
  //         en_us: "card action success",
  //       },
  //     },
  //   };
  // }
}