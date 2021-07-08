import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { get } from 'lodash'
/**
 * Class B
 * endpoints that for a specific protocol on a blockchain, 
 * eg: AAVE is Ethereum-only and is not applicable to other blockchain networks.
 */
@Injectable()
export class ClassBService {
  private key = ""
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.key = this.configService.get("COVALENT_HQ_API_KEY")
  }

  //GET /v1/{chain_id}/address/{address}/stacks/aave_v2/balances/
  public async getAaveV2Addressbalances({ chainId, address }) {
    try {
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/aave_v2/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/{chain_id}/address/{address}/stacks/sushiswap/acts/
  public async getSushiswapAddressExchangeLiquidityTransactions({ chainId, address }, params) {
    try {
      let parameters = {
        "swaps": params.swaps,
        "quote-currency": params.quoteCurrency
      }
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/sushiswap/acts/?key=${this.key}`
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

  // GET {chain_id}/address/{address}/stacks/sushiswap/balances/
  public async getSushiswapAddressExchangeBalance({ chainId, address }, params) {
    try {
      let parameters = {
        "swaps": params.swaps,
        "quote-currency": params.quoteCurrency
      }
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/sushiswap/balances/?key=${this.key}`
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

  // GET {chain_id}/networks/aave_v2/assets/
  public async getAaveV2NetworkAssets({ chainId }) {
    try {
      const requestUrl = `/v1/${chainId}/networks/aave_v2/assets/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/networks/sushiswap/assets/
  public async getSushiswapNetworkAssets({ chainId }, params) {
    try {
      let parameters = {
        "tickers": params.tickers,
        "page-number": params.pageNumber,
        "page-size": params.pageSize
      }
      const requestUrl = `/v1/${chainId}/networks/sushiswap/assets/?key=${this.key}`
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

  //GET /v1/1/address/{address}/stacks/aave_v2/balances/
  public async getAaveV2AddressBalances({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/aave_v2/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/aave/balances/
  public async getAvaeAddressBalances({ chainId = 1, address }) {
    try {
      /**
      * Support only chain id 1
      */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/aave/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/balancer/balances/
  public async getBalancerExchangeAddressBalances({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/balancer/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/compound/acts/
  public async getCompoundAddressActivity({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/compound/acts/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/compound/balances/
  public async getCompoundAddressBalances({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/compound/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/curve/balances/
  public async getCurveAddressBalances({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/curve/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/farming/positions/
  public async getFarmingStats({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/farming/positions/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/uniswap_v1/balances/
  async getUniswapV1AddressExchangeBalances({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/uniswap_v1/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/uniswap_v2/acts/
  async getUniswapV2AddressExchangeLiquidityTransactions({ chainId = 1, address }, params) {
    try {
      /**
       * Support only chain id 1
       */
      let parameters = {
        "swaps": params.swaps
      }
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/uniswap_v2/acts/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/address/{address}/stacks/uniswap_v2/balances/
  async getUniswapV2AddressExchangeBalances({ chainId = 1, address }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/address/${address}/stacks/uniswap_v2/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/networks/aave/assets/
  async getAaveNetworkAssets({ chainId = 1 }) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/networks/aave/assets/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/networks/augur/affiliate_fee/
  async getAugurMarketAffiliateFeeDivisors({ chainId = 1 }, params) {
    try {
      let parameters = {
        "page-number": params.pageNumber,
        "page-size": params.pageSize
      }
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/networks/augur/affiliate_fee/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }
  //GET /v1/1/networks/compound/assets/
  async getCompoundNetworkAssets({ chainId = 1 }, params) {
    try {
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/networks/compound/assets/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/1/networks/uniswap_v2/assets/
  async getUniswapV2NetworkAssets({ chainId = 1 }, params) {
    try {
      let parameters = {
        "tickers": params.tickers,
        "page-number": params.pageNumber,
        "page-size": params.pageSize
      }
      /**
       * Support only chain id 1
       */
      const requestUrl = `/v1/${chainId}/networks/uniswap_v2/assets/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/56/address/{address}/stacks/pancakeswap_v2/balances/
  async getPancakeswapV2AddressExchangeBalances({ address }, params) {
    try {
      let parameters = {
        "quote-currency": params.quoteCurrency
      }
      /**
       * Support only chain id 56 (BSC)
       */
      const requestUrl = `/v1/56/address/${address}/stacks/pancakeswap_v2/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/56/address/{address}/stacks/pancakeswap/acts/
  async getPancakeswapAddressExchangeLiquidityTransactions({ address }, params) {
    try {
      let parameters = {
        "swaps": params.swaps,
        "quote-currency": params.quoteCurrency
      }
      /**
       * Support only chain id 56 (BSC)
       */
      const requestUrl = `/v1/56/address/${address}/stacks/pancakeswap/acts/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/56/address/{address}/stacks/pancakeswap/balances/
  async getPancakeswapAddressExchangeBalances(params) {
    try {
      let parameters = {
        "quote-currency": params.quoteCurrency
      }
      /**
       * Support only chain id 56 (BSC)
       */
      const requestUrl = `/v1/56/address/{address}/stacks/pancakeswap/balances/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/56/address/{address}/stacks/pancakeswap/balances/
  async getPancakeswapV2NetworkAssets(params) {
    try {
      let parameters = {
        "tickers": params.tickers,
        "contract-addresses": params.contractAddress,
        "page-number": params.pageNumber,
        "page-size": params.pageSize
      }
      /**
       * Support only chain id 56 (BSC)
       */
      const requestUrl = `/v1/56/networks/pancakeswap_v2/assets/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/56/address/{address}/stacks/pancakeswap/balances/
  async getPancakeswapV2NetworkAssetByAddress({ address }, params) {
    try {
      let parameters = {
        "page-number": params.pageNumber,
        "page-size": params.pageSize
      }
      /**
       * Support only chain id 56 (BSC)
       */
      const requestUrl = `/v1/56/networks/pancakeswap_v2/assets/${address}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  //GET /v1/56/networks/pancakeswap/assets/
  async getPancakeswapNetworkAssets(params) {
    try {
      let parameters = {
        "tickers": params.tickers,
        "page-number": params.pageNumber,
        "page-size": params.pageSize
      }
      /**
       * Support only chain id 56 (BSC)
       */
      const requestUrl = `/v1/56/networks/pancakeswap/assets/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }
}
