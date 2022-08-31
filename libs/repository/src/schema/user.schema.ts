import { Role } from '@kotanicore/auth/rbac/enums/role.enum';
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: String,
  name: String,
  phoneNumber: String,
  email: String,
  password: String,
  // admin: Boolean,
  // user: Boolean,
  roles: Array,
});
