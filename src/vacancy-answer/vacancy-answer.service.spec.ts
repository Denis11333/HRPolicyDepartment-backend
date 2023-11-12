import { Test, TestingModule } from '@nestjs/testing';
import { VacancyAnswerService } from './vacancy-answer.service';

describe('VacancyAnswerService', () => {
  let service: VacancyAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VacancyAnswerService],
    }).compile();

    service = module.get<VacancyAnswerService>(VacancyAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
