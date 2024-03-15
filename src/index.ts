import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { EnvConfig } from './config/app.config';
import { router } from './router';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

const PORT = EnvConfig().APP_PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});