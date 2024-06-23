import {
  IsString,
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
  IsUrl,
  IsOptional,
} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string

  @IsString()
  @IsOptional()
  displayName?: string

  @IsUrl()
  @IsString()
  @IsOptional()
  avatarUrl?: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsStrongPassword()
  password: string
}
