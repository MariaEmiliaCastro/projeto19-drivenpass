import { Request, Response } from "express";
import cardsService from "../services/cardsService";
import { CreateCard } from "../types/cardsTypes";

const cardsController = {
    savecard: async (req: Request, res: Response) => {
        const cardData : CreateCard = {...req.body, userId : res.locals.id as number};
        await cardsService.saveCard(cardData);
        res.sendStatus(201);
    },
    getcard: async (req: Request, res: Response) => {
        const cardId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        const retrievedcard = await cardsService.getCard(userId, cardId);
        res.send(retrievedcard).status(200);
    },
    deletecard: async (req: Request, res: Response) => {
        const cardId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        await cardsService.deleteCard(userId, cardId);

        res.sendStatus(200);
    },
    getAllcards: async (req: Request, res: Response) => {
        const userId = parseInt(res.locals.id);
        
        const cards = await cardsService.getAllCards(userId);

        res.send(cards);
    }
};

export default cardsController;