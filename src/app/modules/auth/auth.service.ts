import { EnumRole, PrismaClient } from "@prisma/client";
import { Request } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const createAdminIntoDB = async (req: Request) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userInfo = {
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
    role: EnumRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const user = await transactionClient.user.create({
      data: userInfo,
    });

    const admin = await transactionClient.admin.create({
      data: {
        userName: req.body.userName,
        email: req.body.email,
        userId: user?.id,
      },
    });

    return admin;
  });

  return result;
};

const getAllAdminFormDB = async () => {
  const result = prisma.admin.findMany({
    include: {
      user: true,
    },
    where: {
      isDeleted: false,
    },
  });

  return result;
};

export const AuthService = {
  createAdminIntoDB,
  getAllAdminFormDB
};
