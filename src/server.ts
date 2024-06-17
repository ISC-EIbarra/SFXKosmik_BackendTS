import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import classRoutes from '././routes/classRoutes';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/classes', classRoutes);

export default app;
