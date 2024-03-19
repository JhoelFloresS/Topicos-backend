import { IJugador } from "@/interfaces/IJugador";
import { JugadorService } from "@/services/JugadorService";
import { Request, Response } from "express";




export class JugadorController {
    constructor(private readonly service: JugadorService) { }


    async getAllJugadores(req: Request, res: Response) {
        try {
            const jugadores = await this.service.getAllJugadores();

            res.status(200).json({ message: "Jugadores encontrados", data: jugadores });
        } catch (error) {
            if (error instanceof Error)
                res.status(400).json({ message: error.message, data: null });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const dataJugador: IJugador = req.body;

            const newJugador: IJugador = await this.service.create(dataJugador);

            res.status(201).json({ message: "Jugador creado", data: newJugador });
        } catch (error) {
            if (error instanceof Error)
                res.status(400).json({ message: error.message, data: null });
        }
    }



    async update(req: Request, res: Response) {
        try {
            const dataJugador: IJugador = req.body;
            const id = req.params.id;

            const newJugador: IJugador = await this.service.update(dataJugador, parseInt(id));

            res.status(201).json({ message: "Jugador actualizado", data: newJugador });
        } catch (error) {
            if (error instanceof Error)
                res.status(400).json({ message: error.message, data: null });
        }
    }
}