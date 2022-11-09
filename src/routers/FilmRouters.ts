import { insertMovie, deleteMovie, updateMovieStatus, getMovie } from '../controllers/FilmController.js';
import express from 'express';

const router = express.Router();

router.post('/movie', insertMovie);
router.delete('/movie/:id', deleteMovie);
router.get('/movie', getMovie);
router.put('/movie/:id', updateMovieStatus)

export default router;