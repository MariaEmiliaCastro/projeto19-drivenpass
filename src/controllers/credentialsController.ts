import { Request, Response } from "express";
import credentialsService from "../services/credentialsService";
import { CreateCredential } from "../types/credentialsTypes";

const credentialsController = {
    saveCredential: async (req: Request, res: Response) => {
        const credentialData : CreateCredential = {...req.body, userId : res.locals.id as number};
        await credentialsService.saveCredential(credentialData);
        res.sendStatus(201);
    },
    getCredential: async (req: Request, res: Response) => {
        const credentialId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        const retrievedCredential = await credentialsService.getCredential(userId, credentialId);
        res.send(retrievedCredential).status(200);
    },
    deleteCredential: async (req: Request, res: Response) => {
        const credentialId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        await credentialsService.deleteCredential(userId, credentialId);

        res.sendStatus(200);
    },
    getAllCredentials: async (req: Request, res: Response) => {
        const userId = parseInt(res.locals.id);
        
        const credentials = await credentialsService.getAllCredentials(userId);

        res.send(credentials);
    }
};

export default credentialsController;