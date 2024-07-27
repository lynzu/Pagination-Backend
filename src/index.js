import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import database from './database.js';
import MangaRouter from './routes/Manga.js';
import MangaModel from './models/MangaModel.js';

import 'dotenv/config.js';

const app = express();

await database();

if (process.env.NODE_ENV != 'production') {
  
await MangaModel.deleteMany();
}

app.use(bodyParser.json({ limit: '10mb' }));
app.set('json spaces', 4);

app.use(MangaRouter);

app.get('/', (req, res) => res.json({ message: 'Hi' }));

app.listen(3000, () => console.log('Server running on port 3000'));
