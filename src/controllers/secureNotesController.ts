import { Request, Response } from "express";
import secureNotesService from "../services/secureNotesService";
import { CreateSecureNote } from "../types/secureNotesTypes";

const secureNotesController = {
    savesecureNote: async (req: Request, res: Response) => {
        const secureNoteData : CreateSecureNote = {...req.body, userId : res.locals.id as number};
        await secureNotesService.saveSecureNote(secureNoteData);
        res.sendStatus(201);
    },
    getsecureNote: async (req: Request, res: Response) => {
        const secureNoteId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        const retrievedsecureNote = await secureNotesService.getSecureNote(userId, secureNoteId);
        res.send(retrievedsecureNote).status(200);
    },
    deletesecureNote: async (req: Request, res: Response) => {
        const secureNoteId = parseInt(req.params.id);
        const userId = parseInt(res.locals.id);

        await secureNotesService.deleteSecureNote(userId, secureNoteId);

        res.sendStatus(200);
    },
    getAllsecureNotes: async (req: Request, res: Response) => {
        const userId = parseInt(res.locals.id);
        
        const secureNotes = await secureNotesService.getAllSecureNotes(userId);

        res.send(secureNotes);
    }
};

export default secureNotesController;