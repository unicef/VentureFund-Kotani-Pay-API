import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  //@IsMobilePhone('en-KE')
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  phone: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
