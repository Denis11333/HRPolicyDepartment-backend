import { Injectable } from '@nestjs/common';
import { CreateVacancyAnswerDto } from './dto/create-vacancy-answer.dto';
import { UpdateVacancyAnswerDto } from './dto/update-vacancy-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VacancyAnswer } from './entities/vacancy-answer.entity';
import { Repository } from 'typeorm';
import { Vacancy } from '../vacancy/entities/vacancy.entity';

@Injectable()
export class VacancyAnswerService {
  constructor(
    @InjectRepository(VacancyAnswer)
    private vacancyAnswerRepository: Repository<VacancyAnswer>,
    @InjectRepository(Vacancy) private vacancyRepository: Repository<Vacancy>,
  ) {}

  async create(createVacancyAnswerDto: CreateVacancyAnswerDto) {
    const vacancy = await this.vacancyRepository.findOne({
      where: {
        id: createVacancyAnswerDto.vacancyId,
      },
    });
    return this.vacancyAnswerRepository.save({
      ...createVacancyAnswerDto,
      vacancy,
    });
  }

  findAll() {
    return this.vacancyAnswerRepository.find();
  }

  update(id: number, updateVacancyAnswerDto: UpdateVacancyAnswerDto) {
    return this.vacancyAnswerRepository.update(id, updateVacancyAnswerDto);
  }

  remove(id: number) {
    return this.vacancyAnswerRepository.delete(id);
  }
}
