import express from "express";
import dotenv from 'dotenv';
import mainRoutes from './routes/main.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(mainRoutes);
server.use(userRoutes);
server.use(postRoutes);

server.listen(process.env.PORT);

