import { Request, Response } from "express";
import { ReglasService } from "@/services/ReglasService";
import { IReglas } from "@/interfaces/IReglas";


export class ReglasController{
    constructor(private reglasService: ReglasService) {}
    
    async create(req: Request, res: Response) {
        try {
            const dataReglas: IReglas = req.body;

            const newReglas: IReglas = await this.reglasService.create(dataReglas);

            res.status(201).json({ message: "Regla creada", data: newReglas });
        } catch (error) {
            if (error instanceof Error)
                res.status(400).json({ message: error.message, data: null });
        }
    }
}