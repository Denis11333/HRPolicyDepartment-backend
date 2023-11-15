import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VacancyAnswer } from '../../vacancy-answer/entities/vacancy-answer.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Vacancy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  structureName: string;

  @Column()
  position: string;

  @ManyToOne(() => User, (user) => user.vacancy)
  user: User;

  @OneToMany(() => VacancyAnswer, (vacancyAnswer) => vacancyAnswer.vacancy, {
    cascade: ['remove'],
  })
  answers: VacancyAnswer[];
}
