import * as bcrypt from 'bcrypt';

const saltOrRounds = process.env.salt;

export const hashPassword = async (password) =>
  await bcrypt.hash(password, saltOrRounds);

export const comparePassword = async (password, hash) =>
  await bcrypt.compare(password, hash);
