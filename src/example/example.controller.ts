import { Controller, Get, Param, Query } from '@nestjs/common';
import { ClassAService } from 'src/class-a/class-a.service';
import { GetTokenBalanceForAddressParams } from '@/example/request.dto/params'
import { GetTokenBalanceForAddressQueryParams } from './request.dto/query.params';

@Controller('api/example')
export class ExampleController {
  constructor(private readonly classAService: ClassAService) { }

  @Get("/:chainId/address/:address/balance")
  private getTokenBalanceForAddress(
    @Param() params: GetTokenBalanceForAddressParams,
    @Query() queryParams: GetTokenBalanceForAddressQueryParams) {
    try {
      const response = this.classAService.getTokenBalanceForAddress(params, queryParams)
      return response
    } catch (e) {
      console.log(e)
    }
  }
}
