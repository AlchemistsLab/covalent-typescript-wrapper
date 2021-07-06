import { Controller, Get } from '@nestjs/common';
import { ClassAService } from './class-a.service';

@Controller('class-a')
export class ClassAController {
  constructor(private service: ClassAService) {
  }
  @Get()
  private async get() {
    return await this.service.getTokenBalanceForAddress({
      address: "0xb14Ba5edA515c66f56adbD1F6BdfC88E17F7b76D",
      chainId: 1
    }, { limit: 2 })
  }
}
