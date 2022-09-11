import { prisma } from '../config/database';
import { CreateSecureNote } from '../types/secureNotesTypes';

const secureNotesRepository = {
    createSecureNote:async (secureNoteData: CreateSecureNote) => {
        await prisma.secureNotes.create({
            data: secureNoteData
        })
    },
    getSecureNote: async (userId: number, secureNoteId: number) => {
        const secureNote = await prisma.secureNotes.findMany({
            where : {
                id: secureNoteId,
                userId: userId
            }
        });

        return secureNote;
    },
    deleteSecureNote: async (userId: number, secureNoteId: number) => {
        const deleted = await prisma.secureNotes.deleteMany({
            where: {
                id: secureNoteId,
                userId: userId
            }
        });

        console.log("Deleted: ", deleted)

        return deleted.count;
    },
    getAllSecureNotes: async (userId: number) => {
        const secureNote = await prisma.secureNotes.findMany({
            where: {
                userId: userId
            }
        });
        return secureNote;
    }
};

export default secureNotesRepository;