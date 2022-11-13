import { connection } from '../db.js'
import { Film } from '../protocols/Film.js';
import { QueryResult } from 'pg';

async function createMovie(body: Film): Promise<QueryResult<Film>> {
    return connection.query(`
    INSERT INTO films (name,platform,gender) VALUES ($1,$2,$3)`,
        [body.name, body.platform, body.gender]);
}

async function getMovies(platform?: string): Promise<QueryResult> {
    if (platform !== undefined) {
        return connection.query(`
    SELECT * FROM films WHERE platform=$1
    `, [platform]);
    } else {
        return connection.query(`
    SELECT * FROM films`);
    }
}

async function getQuantityOfFilmsByPlatform(platform: string): Promise<QueryResult> {
    return connection.query(`
    SELECT COUNT(*) FROM films WHERE platform=$1 GROUP BY platform
    `, [platform])
}

async function getMovieById(id: number): Promise<QueryResult> {
    return connection.query(`
    SELECT * FROM films WHERE id=$1
    `, [id]);
}

async function deleteMovie(id: number): Promise<QueryResult> {
    return connection.query(`
    DELETE FROM films WHERE id=$1
    `, [id]);
}

async function updateMovieStatus(id: number): Promise<QueryResult> {
    return connection.query(`
    UPDATE films SET status=true WHERE id=$1
    `, [id])
}



const filmRepository = {
    createMovie,
    getMovies,
    deleteMovie,
    getMovieById,
    updateMovieStatus,
    getQuantityOfFilmsByPlatform
}

export default filmRepository;