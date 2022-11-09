import { connection } from "../db.js";
import { Note } from "../protocols/Note.js"

const insertMovieNote = (body: Note) => {
    return connection.query(`
    INSERT INTO notes (note,idFilm) VALUES ($1,$2)`,
        [body.note, body.idFilm]);
}

const noteRepository = {
    insertMovieNote
}
export default noteRepository