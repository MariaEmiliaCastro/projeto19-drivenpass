import { SecureNotes } from '@prisma/client';

export type CreateSecureNote = Omit<SecureNotes, "id">;