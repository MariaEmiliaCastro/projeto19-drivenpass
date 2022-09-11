import { Request, Response } from "express";
import wiFiService from "../services/wiFiServices";
import { CreateWiFi } from "../types/wiFiTypes";

const wiFiController = {
    savewiFi: async (req: Request, res: Response) => {
        const wiFiData : CreateWiFi = {...req.body, userId : res.locals.id as number};
        await wiFiService.saveWiFi(wiFiData);
        res.sendStatus(201);
    },
    getwiFi: async (req: Request, res: Response) => {
        const wiFiId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        const retrievedwiFi = await wiFiService.getWiFi(userId, wiFiId);
        res.send(retrievedwiFi).status(200);
    },
    deletewiFi: async (req: Request, res: Response) => {
        const wiFiId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        await wiFiService.deleteWiFi(userId, wiFiId);

        res.sendStatus(200);
    },
    getAllWiFis: async (req: Request, res: Response) => {
        const userId = parseInt(res.locals.id);
        
        const wiFi = await wiFiService.getAllWiFis(userId);

        res.send(wiFi);
    }
};

export default wiFiController;