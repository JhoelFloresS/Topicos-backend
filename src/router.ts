import { Router } from 'express';

import { ExampleRouter } from '@/routes/ExampleRoute';
import { JugadorRouter } from './routes/JugadorRoute';
import {partidaRouter} from "@/routes/PartidaRoute";
import { reglasRouter } from './routes/ReglasRoute';

const router = Router();

router.use('/example', ExampleRouter);
router.use(JugadorRouter);
router.use(partidaRouter);
router.use(reglasRouter);

export { router };