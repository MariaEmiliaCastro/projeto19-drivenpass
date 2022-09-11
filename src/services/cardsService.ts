import cardsRepository from "../repositories/cardsRepository";
import { CreateCard } from "../types/cardsTypes";

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const cardsService = {
    saveCard: async (cardData: CreateCard) => {
        cardData.password = cryptr.encrypt(cardData.password);
        cardData.cvc = cryptr.encrypt(cardData.cvc);
        await cardsRepository.createCard(cardData);
    },
    getCard: async (userId: number, cardId: number) => {
        const card = await cardsRepository.getCard(userId, cardId);

        if(!card){
            throw { code:'not_found', message:'card not found!'}
        }

        card[0].password = cryptr.decrypt(card[0].password);
        card[0].cvc = cryptr.decrypt(card[0].cvc);

        return card[0];
    },
    deleteCard: async (userId: number, cardId: number) => {
        const deleted = await cardsRepository.deleteCard(userId, cardId);

        if(deleted === 0){
            throw { code: 'not_found', message: 'card not found!'}
        }
    },
    getAllCards: async (userId: number) => {
        const cards = await cardsRepository.getAllCards(userId);

        if(cards === null || cards.length === 0){
            throw {code:'not_found', message:'no cards to show!'}
        }

        const decodedCards = cards.map(({password, cvc, ...card}) => (
            {
                ...card,
                cvc: cryptr.decrypt(cvc),
                password: cryptr.decrypt(password)
            }
        ));
        return decodedCards;
    }
};

export default cardsService;