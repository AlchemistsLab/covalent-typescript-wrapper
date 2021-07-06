import { Test, TestingModule } from '@nestjs/testing';
import { ClassAController } from './class-a.controller';

describe('ClassAController', () => {
  let controller: ClassAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassAController],
    }).compile();

    controller = module.get<ClassAController>(ClassAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
