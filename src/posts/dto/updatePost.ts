import { PartialType } from '@nestjs/mapped-types'

import { CreatePostDto } from './creatPost'

export class UpdatePostDto extends PartialType(CreatePostDto) {}
