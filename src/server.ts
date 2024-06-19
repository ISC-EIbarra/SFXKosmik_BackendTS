import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import classRoutes from '././routes/classRoutes';
import workshopRoutes from './routes/workshopRoutes';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/class', classRoutes);
app.use('/api/workshop', workshopRoutes);

export default app;
