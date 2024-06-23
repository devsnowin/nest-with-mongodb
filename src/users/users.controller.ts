import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common'

import { CreateUserDto } from './dto/createUser'
import { UpdateUserDto } from './dto/updateUser'
import { UsersService } from './users.service'
import mongoose from 'mongoose'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload)
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers()
  }

  @Get(':id')
  async getUser(@Param() params: { id: string }) {
    const isValidId = mongoose.Types.ObjectId.isValid(params.id)
    if (!isValidId) throw new HttpException('User not found', 404)

    const user = await this.usersService.getUser(params.id)
    if (!user) throw new HttpException('User not found', 404)

    return user
  }

  @Put(':id')
  async updateUser(
    @Body() payload: UpdateUserDto,
    @Param() params: { id: string },
  ) {
    const isValidId = mongoose.Types.ObjectId.isValid(params.id)
    if (!isValidId) throw new HttpException('User not found', 404)

    const user = await this.usersService.updateUser(params.id, payload)
    if (!user) throw new HttpException('User not found', 404)

    return user
  }

  @Delete(':id')
  async deleteUser(@Param() params: { id: string }) {
    const isValidId = mongoose.Types.ObjectId.isValid(params.id)
    if (!isValidId) throw new HttpException('User not found', 404)

    const user = await this.usersService.deleteUser(params.id)
    if (!user) throw new HttpException('User not found', 404)

    return user
  }
}
