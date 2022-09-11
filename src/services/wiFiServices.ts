import wiFisRepository from "../repositories/wiFiRepository";
import { CreateWiFi } from "../types/wiFiTypes";

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const wiFiService = {
    saveWiFi: async (wiFiData: CreateWiFi) => {
        wiFiData.password = cryptr.encrypt(wiFiData.password);
        await wiFisRepository.createWiFi(wiFiData);
    },
    getWiFi: async (userId: number, wiFiId: number) => {
        const wiFi = await wiFisRepository.getWiFi(userId, wiFiId);

        if(!wiFi){
            throw { code:'not_found', message:'wiFi not found!'}
        }

        wiFi[0].password = cryptr.decrypt(wiFi[0].password);

        return wiFi[0];
    },
    deleteWiFi: async (userId: number, wiFiId: number) => {
        const deleted = await wiFisRepository.deleteWiFi(userId, wiFiId);

        if(deleted === 0){
            throw { code: 'not_found', message: 'wiFi not found!'}
        }
    },
    getAllWiFis: async (userId: number) => {
        const wiFis = await wiFisRepository.getAllWiFis(userId);

        if(wiFis === null || wiFis.length === 0){
            throw {code:'not_found', message:'no wiFis to show!'}
        }

        const decodedWiFis = wiFis.map(({password, ...wiFi}) => (
            {
                ...wiFi,
                password: cryptr.decrypt(password)
            }
        ));
        return decodedWiFis;
    }
};

export default wiFiService;