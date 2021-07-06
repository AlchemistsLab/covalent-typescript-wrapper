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
      const requestUrl = `/${args.chainId}/address/${args.address}/balances_v2/?key=${this.key}`
      const response = await this.httpService
        .get(requestUrl, { params: { ...parameters } })
        .toPromise()
      console.log("resp", response.request)
      return get(response, ["data", "data"], {})
    } catch (e) {
      throw e
    }
  }

  // GET {chain_id}/address/{address}/portfolio_v2/
  public async getHistoricalPortfolioValueOverTime() {
  }

  // GET {chain_id}/address/{address}/transactions_v2/
  public async getTransactions() { }

  // GET {chain_id}/address/{address}/transfers_v2/
  public async getERC20Transfers() { }

  // GET {chain_id}/block_v2/{block_height}/
  public async getBlock() { }

  // GET {chain_id}/block_v2/{start_date}/{end_date}/
  public async getBlockHeight() { }

  // GET {chain_id}/events/address/{address}/
  public async getLogEventsByContractAddress() { }

  // GET {chain_id}/events/topics/{topic}/
  public async getLogEventsByTopicHashes() { }

  // GET {chain_id}/tokens/{address}/nft_metadata/{token_id}/
  public async getExternalNFTMetadata() { }

  // GET {chain_id}/tokens/{address}/nft_token_ids/
  public async getNFTTokensIDs() { }

  // GET {chain_id}/tokens/{address}/nft_transactions/{token_id}/
  public async getNFTTransactions() { }

  // GET {chain_id}/tokens/{address}/token_holders_changes/
  public async getChangesInTokenHolders() { }

  // GET {chain_id}/tokens/{address}/token_holders/
  public async getTokenHoldersASOfBlockHeight() { }

  // GET {chain_id}/tokens/tokenlists/{id}/
  public async getAllContractMetaData() { }

  // GET {chain_id}/transaction_v2/{tx_hash}/
  public async getTransaction() { }

  // GET chains/
  public async getAllChain() { }

  // GET chains/status/
  public async getAllChainStatuses() { }
}
