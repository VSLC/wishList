import { connection } from "../db.js";
import { Note } from "../protocols/Note.js"

import { QueryResult } from "pg"

async function insertMovieNote(body: Note): Promise<QueryResult<Note>> {
    return connection.query(`
    INSERT INTO notes (note,idFilm) VALUES ($1,$2)`,
        [body.note, body.idFilm]);
}

const noteRepository = {
    insertMovieNote
}
export default noteRepository