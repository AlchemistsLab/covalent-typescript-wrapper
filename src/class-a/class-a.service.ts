import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { get } from 'lodash'

/**
 * Class A 
 * endpoints that return enriched blockchain data applicable to all blockchain networks, 
 * eg: balances, transactions, log events, etc.
 */
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
  public async getTokenBalanceForAddress({ chainId, address }, params) {
    try {
      let parameters = {
        "nft": params.nft ? params.nft : false,
        "no-nft-fetch": params.noNftFetch ? params.noNftFetch : false,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/${chainId}/address/${address}/balances_v2/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/address/{address}/portfolio_v2/
  public async getHistoricalPortfolioValueOverTime({ chainId, address }, params) {
    try {
      let parameters = {
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/address/${address}/portfolio_v2/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/address/{address}/transactions_v2/
  public async getTransactions({ chainId, address }, params) {
    try {
      let parameters = {
        "block-signed-at-asc": params.blockSignedAtAsc,
        "no-logs": params.noLogs,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/address/${address}/transactions_v2/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/address/{address}/transfers_v2/
  public async getERC20Transfers({ chainId, address }, params) {
    try {
      let parameters = {
        "contract-address": params.contractAddress,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/address/${address}/transfers_v2/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/block_v2/{block_height}/
  public async getBlock({ chainId, blockHeight }, params) {
    try {
      let parameters = {
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/block_v2/${blockHeight}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/block_v2/{start_date}/{end_date}/
  public async getBlockHeight({ chainId, startDate, endDate }, params) {
    try {
      let parameters = {
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/block_v2/${startDate}/${endDate}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/events/address/{address}/
  public async getLogEventsByContractAddress({ chainId, address }, params) {
    try {
      let parameters = {
        "starting-block": params.startingBlock,
        "ending-block": params.endingBlock,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/events/address/${address}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/events/topics/{topic}/
  public async getLogEventsByTopicHashes({ chainId, topic }, params) {
    try {
      let parameters = {
        "secondary-topics": params.secondaryTopics,
        "starting-block": params.startingBlock,
        "ending-block": params.endingBlock,
        "sender-address": params.senderAddress,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/events/topics/${topic}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  public async getChangesInTokenholdersBetweenTwoBlockHeights({ chainId, address }, params) {
    try {
      let parameters = {
        "starting-block": params.secondaryTopics,
        "ending-block": params.endingBlock,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/tokens/${address}/token_holders_changes/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/tokens/{address}/nft_metadata/{token_id}/
  public async getExternalNFTMetadata({ chainId, contractAddress, tokenId }, params) {
    try {
      let parameters = {
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/tokens/{address}/nft_token_ids/
  public async getNFTTokensIDs({ chainId, contractAddress }, params) {
    try {
      let parameters = {
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/tokens/${contractAddress}/nft_token_ids/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/tokens/{address}/nft_transactions/{token_id}/
  public async getNFTTransactions({ chainId, contractAddress, tokenId }, params) {
    try {
      let parameters = {
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/tokens/${contractAddress}/nft_transactions/${tokenId}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/tokens/tokenlists/{id}/
  public async getAllContractMetaData({ chainId, id }, params) {
    try {
      let parameters = {
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/tokens/tokenlists/${id}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/transaction_v2/{tx_hash}/
  public async getTransaction({ chainId, txHash }, params) {
    try {
      let parameters = {
        "no-logs": params.noLogs,
        "page-number": params.pageNumber,
        "page-size": params.pageSize,
        "quote-currency": params.quoteCurrency,
        "format": params.format,
        "primer": params.primer,
        "match": params.match,
        "group": params.group,
        "sort": params.sort,
        "skip": params.skip,
        "limit": params.limit
      }
      const requestUrl = `/v1/${chainId}/transaction_v2/${txHash}/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET chains/
  public async getAllChain() {
    try {
      const requestUrl = `/v1/chains/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET chains/status/
  public async getAllChainStatuses() {
    try {
      const requestUrl = `/v1/chains/status/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl)
        .toPromise()
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }
}
