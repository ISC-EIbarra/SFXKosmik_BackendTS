import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import courseRoutes from './routes/courseRoutes';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//Routes
app.use('/api/courses', courseRoutes);

export default app;
