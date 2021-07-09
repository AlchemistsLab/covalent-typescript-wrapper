import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class GetTokenBalanceForAddressParams {
  @IsNotEmpty()
  public chainId: number

  @IsNotEmpty()
  @IsString()
  public address: string
}