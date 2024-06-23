import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User } from '../schemas/User.schema'
import { CreateUserDto } from './dto/createUser'
import { UpdateUserDto } from './dto/updateUser'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(payload: CreateUserDto) {
    return this.userModel.create(payload)
  }

  async getUsers() {
    return this.userModel.find()
  }

  async getUser(userId: string) {
    return this.userModel.findById(userId)
  }

  async updateUser(userId: string, payload: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(userId, payload, {
      returnDocument: 'after',
    })
  }

  async deleteUser(userId: string) {
    return this.userModel.findByIdAndDelete(userId, {
      returnDocument: 'after',
    })
  }
}
