import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PricingService } from './pricing.service';

@Module({
  imports: [HttpModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      baseURL: "https://api.covalenthq.com/v1",
      timeout: parseInt(configService.get('HTTP_TIMEOUT')),
      maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
    }),
    inject: [ConfigService],
  })],
  providers: [PricingService]
})
export class PricingModule { }
