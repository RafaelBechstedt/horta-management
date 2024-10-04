import express from 'express';
// import cors from 'cors';
import sequelize from './database/config/config.js'; 

const app = express();

// // Configurar o middleware CORS
// app.use(cors({
//   origin: 'http://localhost:8080'
// }));
app.use(express.json());

export default app;