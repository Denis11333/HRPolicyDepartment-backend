import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateVacancyDto {
  @ApiProperty()
  @IsString({ message: 'Назва структури має бути рядком.' })
  @Length(5, 35, {
    message: 'Назва структури має бути довжиною від 5 до 35 символів.',
  })
  structureName: string;

  @ApiProperty()
  @IsString({ message: 'Посада має бути рядком.' })
  @Length(5, 45, {
    message: 'Посада має бути довжиною від 5 до 45 символів.',
  })
  position: string;
}
