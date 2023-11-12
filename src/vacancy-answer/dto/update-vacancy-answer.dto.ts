import { PartialType } from '@nestjs/swagger';
import { CreateVacancyAnswerDto } from './create-vacancy-answer.dto';

export class UpdateVacancyAnswerDto extends PartialType(
  CreateVacancyAnswerDto,
) {}
