import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { get } from 'lodash'
@Injectable()
export class PricingService {
  private key = ""
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.key = this.configService.get("COVALENT_HQ_API_KEY")
  }

  //GET /v1/pricing/historical_by_addresses_v2/{chain_id}/{quote_currency}/{contract_addresses}/
  async getHistoricalPricesByAddressesV2({ chainId, quoteCurrency, contractAddresses }, params) {
    try {
      let parameters = {
        "from": params.from,
        "to": params.to,
        "prices-at-asc": params.pricesAtAsc,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "format": params.format
      }
      const requestUrl = `/v1/pricing/historical_by_addresses_v2/${chainId}/${quoteCurrency}/${contractAddresses}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, {
          params: { ...parameters }
        })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/pricing/historical/{quote_currency}/{ticker_symbol}/
  async getHistoricalPricesByTickerSymbol({ quoteCurrency, tickerSymbol }, params) {
    try {
      let parameters = {
        "from": params.from,
        "to": params.to,
        "prices-at-asc": params.pricesAtAsc,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "format": params.format
      }
      const requestUrl = `/v1/pricing/historical/${quoteCurrency}/${tickerSymbol}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, {
          params: { ...parameters }
        })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/pricing/tickers/
  async getSpotPrice(params) {
    try {
      let parameters = {
        "tickers": params.tickers,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "format": params.format
      }
      const requestUrl = `/v1/pricing/tickers/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, {
          params: { ...parameters }
        })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/pricing/volatility/
  async getPriceVolatility(params) {
    try {
      let parameters = {
        "tickers": params.tickers,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "format": params.format
      }
      const requestUrl = `/v1/pricing/volatility/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, {
          params: { ...parameters }
        })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }
}
