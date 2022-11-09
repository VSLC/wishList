import { Request, Response } from 'express';

import filmRepository from '../repositories/FilmRepository.js'
import noteRepository from '../repositories/noteRepository.js'

import { Film } from '../protocols/Film.js';
import { Note } from '../protocols/Note.js'

import { noteSchema } from '../schemas/noteSchema.js'
import { filmSchema } from '../schemas/filmSchema.js'

const insertMovie = async (req: Request, res: Response) => {
    const body: Film = req.body;

    const validation = filmSchema.validate(body);

    if (validation.error) {
        return res.status(400).send(validation.error.message)
    }
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
    const id: number = Number(req.params.id);
    const note: string = req.body.note;

    const body = { idFilm: Number(id), note: note } as Note;
    console.log(body);

    const validation = noteSchema.validate(body);
    if (validation.error) {
        return res.status(400).send(validation.error.message);
    }

    const insertNote = await noteRepository.insertMovieNote(body);
    const updateMovie = await filmRepository.updateMovieStatus(id);

    return res.sendStatus(200)

}

export { insertMovie, getMovie, deleteMovie, updateMovieStatus }