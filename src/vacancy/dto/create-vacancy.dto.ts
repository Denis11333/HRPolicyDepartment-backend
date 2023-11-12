import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVacancyDto {
  @ApiProperty()
  @IsString({ message: 'Назва структури має бути рядком.' })
  structureName: string;

  @ApiProperty()
  @IsString({ message: 'Посада має бути рядком.' })
  position: string;
}
