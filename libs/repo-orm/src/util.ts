import * as bcrypt from 'bcrypt';

const saltOrRounds = process.env.salt;

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(parseInt(saltOrRounds));
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePassword = async (password, hash) =>
  await bcrypt.compare(password, hash);
