import express from 'express';
import { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send("ok")
})

server.listen(4000, () => {
    console.log("Rodando na porta 4000")
})