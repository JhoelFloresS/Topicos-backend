import { Router } from 'express';


const ExampleRouter = Router();

ExampleRouter.get('/', (req, res) => {
    res.send('Hello World');
});


export { ExampleRouter }