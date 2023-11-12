import { Module } from '@nestjs/common';
import { VacancyAnswerService } from './vacancy-answer.service';
import { VacancyAnswerController } from './vacancy-answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyAnswer } from './entities/vacancy-answer.entity';
import { Vacancy } from '../vacancy/entities/vacancy.entity';

@Module({
  controllers: [VacancyAnswerController],
  providers: [VacancyAnswerService],
  imports: [TypeOrmModule.forFeature([VacancyAnswer, Vacancy])],
})
export class VacancyAnswerModule {}
