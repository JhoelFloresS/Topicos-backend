import { Router } from 'express';

import { ExampleRouter } from '@/routes/ExampleRoute';
import { JugadorRouter } from './routes/JugadorRoute';

const router = Router();

router.use('/example', ExampleRouter);
router.use(JugadorRouter);

export { router };