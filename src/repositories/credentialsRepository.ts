import { CreateCredential } from "../types/credentialsTypes";
import { prisma } from '../config/database';

const credentialsRepository = {
    saveCredential: async (credentialData: CreateCredential) => {
        await prisma.credentials.create({
            data: credentialData
        })
    }
};

export default credentialsRepository;