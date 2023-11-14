import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCredentialDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Логін не має бути пустим.' })
  @IsString({ message: 'Логін має бути рядком.' })
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Пароль не повинен бути пустим.' })
  @IsString({ message: 'Пароль має бути рядком.' })
  @MinLength(5)
  @MaxLength(20)
  password: string;
}
