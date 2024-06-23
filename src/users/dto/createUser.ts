import { Type } from 'class-transformer'
import {
  IsString,
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
  IsUrl,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from 'class-validator'

export class CreateUserSettingsDto {
  @IsBoolean()
  @IsOptional()
  receiveNotifications?: boolean

  @IsBoolean()
  @IsOptional()
  darkTheme?: boolean
}

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

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserSettingsDto)
  settings?: CreateUserSettingsDto
}
