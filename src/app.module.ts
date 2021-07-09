import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { TransformInterceptor } from './common/transform.interceptor';
import { ClassAModule } from './class-a/class-a.module';
import { ClassBModule } from './class-b/class-b.module';
import { PricingModule } from './pricing/pricing.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    ClassAModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ClassBModule,
    PricingModule,
    ExampleModule,
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor
  }, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule { }
