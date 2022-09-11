import credentialsRepository from "../repositories/credentialsRepository";
import { CreateCredential } from "../types/credentialsTypes";

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const credentialsService = {
    saveCredential: async (credentialData: CreateCredential) => {
        credentialData.password = cryptr.encrypt(credentialData.password);
        await credentialsRepository.saveCredential(credentialData);
    },
    getCredential: async (userId: number, credentialId: number) => {
        const credential = await credentialsRepository.getCredential(userId, credentialId);

        if(!credential){
            throw { code:'not_found', message:'credential not found!'}
        }

        credential[0].password = cryptr.decrypt(credential[0].password);

        return credential[0];
    },
    deleteCredential: async (userId: number, credentialId: number) => {
        const deleted = await credentialsRepository.deleteCredential(userId, credentialId);

        if(deleted === 0){
            throw { code: 'not_found', message: 'credential not found!'}
        }
    },
    getAllCredentials: async (userId: number) => {
        const credentials = await credentialsRepository.getAllCredentials(userId);

        const decodedCredentials = credentials.map(({password, ...credential}) => (
            {
                ...credential,
                password: cryptr.decrypt(password)
            }
        ));
        return decodedCredentials;
    }
};

export default credentialsService;