import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateVacancyAnswerDto {
  @ApiProperty()
  @IsString({ message: 'Емейл має бути рядком.' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'Номер телефону не має бути строкою.' })
  phone: string;

  @ApiProperty()
  @IsString({ message: 'Номер телефону не має бути строкою.' })
  fullName: string;

  @ApiProperty()
  @IsNumber({}, { message: 'VacancyId має бути числом.' })
  vacancyId: number;
}
