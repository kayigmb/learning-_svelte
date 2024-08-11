import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword: string = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const passwordCompare = async (
  inputPassword: string,
  actualPassword: string,
) => {
  const verifyPassword = await bcrypt.compare(inputPassword, actualPassword);
  return verifyPassword;
};
