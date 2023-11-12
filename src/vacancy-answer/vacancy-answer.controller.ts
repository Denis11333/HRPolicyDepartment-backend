import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VacancyAnswerService } from './vacancy-answer.service';
import { CreateVacancyAnswerDto } from './dto/create-vacancy-answer.dto';
import { UpdateVacancyAnswerDto } from './dto/update-vacancy-answer.dto';

@Controller('v1/vacancy-answer')
export class VacancyAnswerController {
  constructor(private readonly vacancyAnswerService: VacancyAnswerService) {}

  @Post()
  create(@Body() createVacancyAnswerDto: CreateVacancyAnswerDto) {
    return this.vacancyAnswerService.create(createVacancyAnswerDto);
  }

  @Get()
  findAll() {
    return this.vacancyAnswerService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVacancyAnswerDto: UpdateVacancyAnswerDto,
  ) {
    return this.vacancyAnswerService.update(+id, updateVacancyAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacancyAnswerService.remove(+id);
  }
}
