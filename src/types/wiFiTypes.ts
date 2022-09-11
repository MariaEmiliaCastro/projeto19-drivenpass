import { WiFi } from '@prisma/client';

export type CreateWiFi = Omit<WiFi, "id">;