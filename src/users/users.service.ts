import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { UserSettings } from 'src/schemas/UserSettings.schema'
import { User } from '../schemas/User.schema'
import { CreateUserDto } from './dto/createUser'
import { UpdateUserDto } from './dto/updateUser'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(UserSettings.name)
    private userSettingsModel: Model<UserSettings>,
  ) {}

  async create({ settings, ...createUserDto }: CreateUserDto) {
    if (settings) {
      const newSettings = new this.userSettingsModel(settings)
      const savedSettings = await newSettings.save()
      const newUser = new this.userModel({
        ...createUserDto,
        settings: savedSettings._id,
      })
      return newUser.save()
    }

    const newUser = new this.userModel(createUserDto)
    return newUser.save()
  }

  async getUsers() {
    return this.userModel.find().populate('settings')
  }

  async getUser(userId: string) {
    return this.userModel.findById(userId).populate('settings')
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
