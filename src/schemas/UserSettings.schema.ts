import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserSettingsDocument = HydratedDocument<UserSettings>

@Schema()
export class UserSettings {
  @Prop({ required: false, default: true })
  receiveNotifications?: boolean

  @Prop({ required: false, default: true })
  darkTheme?: boolean
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings)
