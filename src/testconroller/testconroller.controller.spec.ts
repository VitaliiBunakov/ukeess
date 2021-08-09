import { Test, TestingModule } from '@nestjs/testing';
import { TestconrollerController } from './testconroller.controller';

describe('TestconrollerController', () => {
  let controller: TestconrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestconrollerController],
    }).compile();

    controller = module.get<TestconrollerController>(TestconrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
