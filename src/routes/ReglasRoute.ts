import { ReglasController } from "@/controllers/ReglasController";
import { ReglasRepository } from "@/repositories/ReglasRepository";
import { ReglasService } from "@/services/ReglasService";
import { Router } from "express";



const reglasRouter=Router();
const reglasRepository = new ReglasRepository();
const reglasService = new ReglasService(reglasRepository);
const reglasController = new ReglasController(reglasService);

reglasRouter.post('/reglas', (req, res) => {
    reglasController.create(req, res);
});

export{reglasRouter}