import express, { Application } from 'express';
import cors from 'cors';
import router from './app/router';

const app:Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

export default app;



