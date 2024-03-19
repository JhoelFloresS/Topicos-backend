import { JugadorController } from '@/controllers/JugadorController';
import { JugadorRepository } from '@/repositories/JugadorRepository';
import { JugadorService } from '@/services/JugadorService';
import { Request, Response, Router } from 'express';


const JugadorRouter = Router();
const jugadorRepository = new JugadorRepository();
const jugadorService = new JugadorService(jugadorRepository);
const jugadorController = new JugadorController(jugadorService);

JugadorRouter.get('/jugadores', (req: Request, res: Response) => {
    jugadorController.getAllJugadores(req, res);
});

JugadorRouter.post('/jugadores', (req: Request, res: Response) => {
    jugadorController.create(req, res);
});

JugadorRouter.put('/jugadores/:id', (req: Request, res: Response) => {
    jugadorController.update(req, res);
});


export { JugadorRouter }