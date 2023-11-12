import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { Vacancy } from '../../vacancy/entities/vacancy.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Vacancy, (vacancy) => vacancy.user)
  vacancy: Vacancy[];

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
