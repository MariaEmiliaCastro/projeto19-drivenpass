import secureNotesRepository from "../repositories/secureNotesRepository";
import { CreateSecureNote } from '../types/secureNotesTypes';

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const secureNotesService = {
    saveSecureNote: async (secureNoteData: CreateSecureNote) => {
        await secureNotesRepository.createSecureNote(secureNoteData);
    },
    getSecureNote: async (userId: number, secureNoteId: number) => {
        const secureNote = await secureNotesRepository.getSecureNote(userId, secureNoteId);

        if(!secureNote || secureNote.length === 0){
            throw { code:'not_found', message:'secureNote not found!'}
        }

        return secureNote[0];
    },
    deleteSecureNote: async (userId: number, secureNoteId: number) => {
        const deleted = await secureNotesRepository.deleteSecureNote(userId, secureNoteId);

        if(deleted === 0){
            throw { code: 'not_found', message: 'secureNote not found!'}
        }
    },
    getAllSecureNotes: async (userId: number) => {
        const secureNotes = await secureNotesRepository.getAllSecureNotes(userId);

        if(secureNotes === null || secureNotes.length === 0){
            throw {code:'not_found', message:'no secureNotes to show!'}
        }

        return secureNotes;
    }
};

export default secureNotesService;