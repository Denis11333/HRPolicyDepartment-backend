import { Test, TestingModule } from '@nestjs/testing';
import { VacancyAnswerController } from './vacancy-answer.controller';
import { VacancyAnswerService } from './vacancy-answer.service';

describe('VacancyAnswerController', () => {
  let controller: VacancyAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacancyAnswerController],
      providers: [VacancyAnswerService],
    }).compile();

    controller = module.get<VacancyAnswerController>(VacancyAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
