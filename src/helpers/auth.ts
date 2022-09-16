import bcrypt from "bcryptjs";

// auth helpers

// hash user password
export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

// compare password on login
export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
