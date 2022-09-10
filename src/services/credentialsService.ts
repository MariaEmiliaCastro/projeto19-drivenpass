import credentialsRepository from "../repositories/credentialsRepository";
import { CreateCredential } from "../types/credentialsTypes";

const credentialsService = {
    saveCredential: async (credentialData: CreateCredential) => {
        await credentialsRepository.saveCredential(credentialData);
    }
};

export default credentialsService;