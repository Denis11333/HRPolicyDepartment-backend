import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@Controller('v1/vacancies')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(
    @Body() createVacancyDto: CreateVacancyDto,
    @CurrentUser() user: User,
  ) {
    return this.vacancyService.create(createVacancyDto, user);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get('my')
  myVacancies(@CurrentUser() user: User) {
    return this.vacancyService.vacanciesByUser(user.username);
  }

  @Get()
  findAll() {
    return this.vacancyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacancyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacancyDto: UpdateVacancyDto) {
    return this.vacancyService.update(+id, updateVacancyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacancyService.remove(+id);
  }
}
