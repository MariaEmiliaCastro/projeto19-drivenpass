import { Request, Response } from "express";
import credentialsService from "../services/credentialsService";
import { CreateCredential } from "../types/credentialsTypes";

const credentialsController = {
    saveCredential: async (req: Request, res: Response) => {
        const credentialData : CreateCredential = req.body;
        await credentialsService.saveCredential(credentialData);
        res.sendStatus(201);
    }
};

export default credentialsController;