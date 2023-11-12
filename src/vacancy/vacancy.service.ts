import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from './entities/vacancy.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class VacancyService {
  constructor(
    @InjectRepository(Vacancy) private vacancyRepository: Repository<Vacancy>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  vacanciesByUser(username: string) {
    return this.vacancyRepository.find({
      where: {
        user: {
          username: username,
        },
      },
    });
  }

  async create(createVacancyDto: CreateVacancyDto, user: User) {
    const currentUser = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    return this.vacancyRepository.save({
      ...createVacancyDto,
      user: currentUser,
    });
  }

  findAll() {
    return this.vacancyRepository.find();
  }

  findOne(id: number) {
    return this.vacancyRepository.findOne({
      where: { id: id },
      relations: {
        answers: true,
      },
    });
  }

  update(id: number, updateVacancyDto: UpdateVacancyDto) {
    return this.vacancyRepository.update(id, updateVacancyDto);
  }

  remove(id: number) {
    return this.vacancyRepository.delete(id);
  }
}
