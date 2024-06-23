import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { CreatePostDto } from './dto/creatPost'
import { UpdatePostDto } from './dto/updatePost'
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  async createPost(@Body() payload: CreatePostDto) {
    return this.postService.create(payload)
  }

  @Get()
  async getPosts() {
    return this.postService.findAll()
  }

  @Get(':id')
  async getPost(@Param() parmas: { id: string }) {
    return this.postService.find(parmas.id)
  }

  @Put(':id')
  async updatePost(
    @Param() parmas: { id: string },
    @Body() payload: UpdatePostDto,
  ) {
    return this.postService.update(parmas.id, payload)
  }

  @Delete(':id')
  async deletePost(@Param() params: { id: string }) {
    return this.postService.delete(params.id)
  }
}
