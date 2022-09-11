import { prisma } from '../config/database';
import { CreateWiFi } from '../types/wiFiTypes';

const wiFisRepository = {
    createWiFi:async (wiFiData: CreateWiFi) => {
        await prisma.wiFi.create({
            data: wiFiData
        })
    },
    getWiFi: async (userId: number, wiFiId: number) => {
        const wiFi = await prisma.wiFi.findMany({
            where : {
                id: wiFiId,
                userId: userId
            }
        });

        return wiFi;
    },
    deleteWiFi: async (userId: number, wiFiId: number) => {
        const deleted = await prisma.wiFi.deleteMany({
            where: {
                id: wiFiId,
                userId: userId
            }
        });

        console.log("Deleted: ", deleted)

        return deleted.count;
    },
    getAllWiFis: async (userId: number) => {
        const wiFis = await prisma.wiFi.findMany({
            where: {
                userId: userId
            }
        });
        return wiFis;
    }
};

export default wiFisRepository;