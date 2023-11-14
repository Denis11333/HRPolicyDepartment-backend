import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateVacancyAnswerDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Некоректна електрона пошта.' })
  @Length(10, 35, {
    message: 'Електрона пошта має бути довжиною від 10 до 35 символів.',
  })
  email: string;

  @ApiProperty()
  @IsPhoneNumber(undefined, { message: 'Некоректний номер телефону.' })
  @Length(10, 15, {
    message: 'Номер телефону має бути довжиною від 10 до 15 символів.',
  })
  phone: string;

  @ApiProperty()
  @IsString({ message: 'Номер телефону не має бути строкою.' })
  @Length(10, 35, {
    message: 'ПІБ має бути довжиною від 10 до 35 символів.',
  })
  fullName: string;

  @ApiProperty()
  @IsNumber({}, { message: 'VacancyId має бути числом.' })
  vacancyId: number;
}
