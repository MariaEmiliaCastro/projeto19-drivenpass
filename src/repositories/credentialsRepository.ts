import { CreateCredential } from "../types/credentialsTypes";
import { prisma } from '../config/database';

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const credentialsRepository = {
    saveCredential: async (credentialData: CreateCredential) => {
        await prisma.credentials.create({
            data: credentialData
        })
    },
    getCredential: async (userId: number, credentialId: number) => {
        const credential = await prisma.credentials.findMany({
            where : {
                id: credentialId,
                userId: userId
            }
        });

        return credential;
    },
    deleteCredential: async (userId: number, credentialId: number) => {
        const deleted = await prisma.credentials.deleteMany({
            where: {
                id: credentialId,
                userId: userId
            }
        });

        console.log("Deleted: ", deleted)

        return deleted.count;
    },
    getAllCredentials: async (userId: number) => {
        const credentials = await prisma.credentials.findMany({
            where: {
                userId: userId
            }
        });
        return credentials;
    }
};

export default credentialsRepository;