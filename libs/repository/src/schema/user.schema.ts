import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: String,
  name: String,
  phoneNumber: String,
  email: String,
  password: String,
  
},{timestamps:true});
