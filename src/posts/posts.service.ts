import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/creatPost'
import { UpdatePostDto } from './dto/updatePost'
import { InjectModel } from '@nestjs/mongoose'
import { Post } from 'src/schemas/Post.schema'
import { Model } from 'mongoose'
import { User } from 'src/schemas/User.schema'

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(payload: CreatePostDto) {
    const user = await this.userModel.findById(payload.userId)
    const createdPost = await this.postModel.create({
      ...payload,
      user: payload.userId,
    })
    await user.updateOne({
      $push: {
        posts: createdPost._id,
      },
    })
    return createdPost
  }
  async findAll() {
    return this.postModel.find().populate('user')
  }
  async find(postId: string) {
    return this.postModel.findById(postId).populate('user')
  }
  async update(postId: string, payload: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(postId, payload)
  }
  async delete(postId: string) {
    return this.postModel.findByIdAndDelete(postId)
  }
}
