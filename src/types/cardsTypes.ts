import { Cards } from '@prisma/client';

export type CreateCard = Omit<Cards, "id">;