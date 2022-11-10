import { insertMovie, deleteMovie, updateMovieStatus, getMovieByPlatform, getMovieQuantityByPlatform } from '../controllers/FilmController.js';
import express from 'express';

const router = express.Router();

router.post('/movie', insertMovie);
router.delete('/movie/:id', deleteMovie);
router.get('/movie', getMovieByPlatform);
router.put('/movie/:id', updateMovieStatus)
router.get('/movie/quantityByPlatform', getMovieQuantityByPlatform);

export default router;