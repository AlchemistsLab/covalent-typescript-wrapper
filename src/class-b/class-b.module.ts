import { Module } from '@nestjs/common';
import { ClassBService } from './class-b.service';

@Module({
  providers: [ClassBService]
})
export class ClassBModule {}
