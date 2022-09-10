import { Request, Response } from "express";
import { CreateUser } from "../types/usersTypes";
import usersService from "../services/usersService";

const usersController = {
    createUser: async (req: Request, res: Response) => {
        const userData : CreateUser = req.body;

        await usersService.createUser(userData);

        res.sendStatus(201);
    },
    loginUser: async (req: Request, res: Response) => {
        const userData : CreateUser = req.body;

        const token: string = await usersService.loginUser(userData);

        res.send({token}).status(200);
    }
};

export default usersController;