
//import partidaService
import { PartidaService } from '@/services/PartidaService';
import { Request, Response } from "express";
import { IPartida } from "@/interfaces/IPartida";

export class PartidaController{
    constructor(private readonly service: PartidaService) { }

    async create(req: Request, res: Response) {
        try {
            const dataPartida: IPartida = req.body;

            const newPartida: IPartida = await this.service.create(dataPartida);

            res.status(201).json({ message: "Partida creada", data: newPartida });
        } catch (error) {
            if (error instanceof Error)
                res.status(400).json({ message: error.message, data: null });
        }
    }
}