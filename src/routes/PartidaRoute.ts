import { PartidaController } from '@/controllers/PartidaController';
import { PartidaRepository } from '@/repositories/PartidaRepository';
import { PartidaService } from '@/services/PartidaService';
import { Request, Response, Router } from 'express';

const partidaRouter = Router();
const partidaRepository = new PartidaRepository();
const partidaService = new PartidaService(partidaRepository);
const partidaController = new PartidaController(partidaService);

partidaRouter.post('/partidas', (req: Request, res: Response) => {
    partidaController.create(req, res);
});
export {partidaRouter}