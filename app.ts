import express from 'express';
import FilmRouter from './src/routers/FilmRouters.js';

const server = express();
server.use(express.json())

server.use(FilmRouter);

server.listen(4000, () => {
    console.log("Rodando na porta 4000");
});