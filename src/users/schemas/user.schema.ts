import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedArraySubdocument } from "mongoose";

export type UserDocument = HydratedArraySubdocument<User>;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  image: string|null;

  @Prop()
  googleId: string|null;

  @Prop()
  githubId: string | null;

  @Prop({ index: true })
  name: string;

  @Prop({ index: true })
  username: string;

  @Prop({ required: true, index: true })
  email: string;

  @Prop()
  introduction: string;

  @Prop({ select: false })
  password: string;

  @Prop({ select: false })
  apiToken: string;

  @Prop()
  lang: string;

  @Prop()
  status: string;

  @Prop()
  createdAt: Date;

  @Prop()
  admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
