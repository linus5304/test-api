import { prisma } from "../..";
import { User } from "./UsersDto";

export const createUser = async (data: User): Promise<Omit<User, 'password'>> => {
  const result = await prisma.user.create({
    data: {
      email: data.email,
      lastname: data.lastname,
      firstname: data.firstname,
      phone: data.phone,
      password: data.password,
    },
  });
  return result;
};
export const getUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const getUserById = async (id: string) => {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
};

export const updateUser = async (id: string, data: User) => {
  const result = await prisma.user.update({ where: { id }, data: { ...data } });
  return result;
};
