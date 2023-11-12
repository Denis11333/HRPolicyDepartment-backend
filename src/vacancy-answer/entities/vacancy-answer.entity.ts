import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vacancy } from '../../vacancy/entities/vacancy.entity';

@Entity()
export class VacancyAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  fullName: string;

  @ManyToOne(() => Vacancy, (vacancy) => vacancy.answers)
  vacancy: Vacancy;
}
