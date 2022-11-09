import { connection } from '../db.js'
import { Film } from '../protocols/Film.js';

const createMovie = (body: Film) => {
    return connection.query(`
    INSERT INTO films (name,platform,gender) VALUES ($1,$2,$3)`,
        [body.name, body.platform, body.gender]);
}

const getMovie = () => {
    return connection.query(`
    SELECT * FROM films
    `);
}

const getMovieById = (id: number) => {
    return connection.query(`
    SELECT * FROM films WHERE id=$1
    `, [id]);
}

const deleteMovie = (id: number) => {
    return connection.query(`
    DELETE FROM films WHERE id=$1
    `, [id]);
}

const filmRepository = {
    createMovie,
    getMovie,
    deleteMovie,
    getMovieById
}

export default filmRepository;