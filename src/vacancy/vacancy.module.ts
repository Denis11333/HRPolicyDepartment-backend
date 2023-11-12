import { forwardRef, Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from './entities/vacancy.entity';
import { User } from '../user/entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [VacancyController],
  providers: [VacancyService],
  imports: [
    TypeOrmModule.forFeature([Vacancy, User]),
    forwardRef(() => AuthModule),
  ],
})
export class VacancyModule {}
