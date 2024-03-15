import { Router } from 'express';

import { ExampleRouter } from '@/routes/ExampleRoute';

const router = Router();

router.use('/example', ExampleRouter);

export { router };