import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'

import { UserSettings } from './UserSettings.schema'
import { Post } from './Post.schema'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string

  @Prop()
  displayName: string

  @Prop()
  avatarUrl: string

  @Prop({ unique: true, required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
  settings?: UserSettings

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[]
}

export const UserSchema = SchemaFactory.createForClass(User)
