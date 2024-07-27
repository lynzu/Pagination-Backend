import express from 'express';
import cors from 'cors';
import database from './database.js';
import MangaRouter from './routes/Manga.js';
import MangaModel from './models/MangaModel.js';

import 'dotenv/config.js';

const app = express();

await database();
//await MangaModel.deleteMany();

app.use(express.json());
app.set('json spaces', 4);

app.use(MangaRouter);

app.get('/', (req, res) => res.json({ message: 'Hi' }));

app.listen(3000, () => console.log('Server running on port 3000'));
