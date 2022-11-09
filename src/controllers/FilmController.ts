import { connection } from '../db.js';
import { Request, Response } from 'express';
import filmRepository from '../repositories/FilmRepository.js'

const insertMovie = async (req: Request, res: Response) => {
    const body: {
        name: string,
        platform: string,
        gender: number,
    } = req.body;

    const result = await filmRepository.createMovie(body);
    return res.status(200).send("ok");
}

const getMovie = async (req: Request, res: Response) => {
    const result = await filmRepository.getMovie();
    const movies = result.rows;

    if (result.rowCount === 0) {
        return res.status(404).send([]);
    }
    return res.status(200).send(movies)
}

const deleteMovie = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const resultGetMovieById = await filmRepository.getMovieById(id);

    if (resultGetMovieById.rowCount === 0) {
        console.log("entrou")
        return res.sendStatus(404);
    }

    const resultDeleteMovie = await filmRepository.deleteMovie(id);
    return res.sendStatus(200);
}

const updateMovieStatus = async (req: Request, res: Response) => {

}

export { insertMovie, getMovie, deleteMovie, updateMovieStatus }