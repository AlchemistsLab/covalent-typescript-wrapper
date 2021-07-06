import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { get } from 'lodash'
@Injectable()
export class ClassAService {
  private key = ""
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.key = this.configService.get("COVALENT_HQ_API_KEY")
  }
  // GET {chain_id}/address/{address}/balances_v2/
  public async getTokenBalanceForAddress(
    args: { chainId, address },
    params
  ) {
    try {
      const requestUrl = `/${args.chainId}/address/${args.address}/balances_v2/?key=${this.key}`
      const response = await this.httpService.
        get(requestUrl, { params }).toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }
}
