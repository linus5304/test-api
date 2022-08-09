import { prisma } from "../..";
import { AuthDTO } from "./AuthDTO";

export const register = async ({ email, password }: AuthDTO) => {
  if (!email && !password) throw Error("All input is required");
  const testUser = await prisma.user.findFirst({
    where: { email },
  });

  if (testUser) throw Error("User already Exist");
};
