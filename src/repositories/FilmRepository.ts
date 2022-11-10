import { connection } from '../db.js'
import { Film } from '../protocols/Film.js';

const createMovie = (body: Film) => {
    return connection.query(`
    INSERT INTO films (name,platform,gender) VALUES ($1,$2,$3)`,
        [body.name, body.platform, body.gender]);
}

const getMovieByPlatform = (platform: string) => {
    return connection.query(`
    SELECT * FROM films WHERE platform=$1
    `, [platform]);
}

const getQuantityOfFilmsByPlatform = (platform: string) => {
    return connection.query(`
    SELECT COUNT(*) FROM films WHERE platform=$1 GROUP BY platform
    `, [platform])
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

const updateMovieStatus = (id: number) => {
    return connection.query(`
    UPDATE films SET status=true WHERE id=$1
    `, [id])
}



const filmRepository = {
    createMovie,
    getMovieByPlatform,
    deleteMovie,
    getMovieById,
    updateMovieStatus,
    getQuantityOfFilmsByPlatform
}

export default filmRepository;