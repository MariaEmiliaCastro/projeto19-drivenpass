import { prisma } from '../config/database';
import { CreateCard } from '../types/cardsTypes';

const cardsRepository = {
    createCard:async (cardData: CreateCard) => {
        await prisma.cards.create({
            data: cardData
        })
    },
    getCard: async (userId: number, cardId: number) => {
        const card = await prisma.cards.findMany({
            where : {
                id: cardId,
                userId: userId
            }
        });

        return card;
    },
    deleteCard: async (userId: number, cardId: number) => {
        const deleted = await prisma.cards.deleteMany({
            where: {
                id: cardId,
                userId: userId
            }
        });

        console.log("Deleted: ", deleted)

        return deleted.count;
    },
    getAllCards: async (userId: number) => {
        const cards = await prisma.cards.findMany({
            where: {
                userId: userId
            }
        });
        return cards;
    }
};

export default cardsRepository;