import { Module } from '@nestjs/common';
import { ClassAModule } from 'src/class-a/class-a.module';
import { ExampleController } from './example.controller';


/**
 * Here is an example module for describe how service work.
 * 1. Just import service You would like to use in your module.
 * 2. Make something like a controller file to build API endpoint.
 * 3. Have fund with wrapped service. 🍺
 */
@Module({
  imports: [ClassAModule],
  controllers: [ExampleController]
})
export class ExampleModule {

}
