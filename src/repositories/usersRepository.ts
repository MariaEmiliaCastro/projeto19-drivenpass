import { prisma } from "../config/database";
import { Users } from "@prisma/client";
import { CreateUser } from "../types/usersTypes";


const usersRepository = {
    getUserByEmail: async (email: string) => {
        const userExists = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        return userExists;
    },
    createUser:async (userData: CreateUser) => {
        await prisma.users.create({
            data: userData
        })
    }
};

export default usersRepository;