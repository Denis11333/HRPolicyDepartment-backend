import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './database.config';
import { UserModule } from './user/user.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { VacancyAnswerModule } from './vacancy-answer/vacancy-answer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    RoleModule,
    VacancyModule,
    VacancyAnswerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
