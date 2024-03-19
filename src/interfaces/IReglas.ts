import { FORMATO } from "@prisma/client";

export interface IReglas {
    id?: number,
    monto: number,
    moneda: string,
    formato: FORMATO
}