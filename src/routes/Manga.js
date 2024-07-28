import express from 'express';
import * as Manga from '../controllers/Manga.js';
import * as MangaValidator from '../middlewares/MangaValidator.js';

const router = express.Router();

router.route('/list').get(Manga.MangaList);
router.route('/search').get(MangaValidator.MangaSearch,Manga.MangaSearch);
router.route('/upload').put(MangaValidator.MangaUpload, Manga.MangaUpload);

export default router;
