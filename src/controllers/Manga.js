import MangaModel from '../models/MangaModel.js';

export const MangaList = async (req, res) => {
  const limit = Number(req.query.page) || 10;
  const page = Number(req.query.page) || 1;
  const query = req.query.q;
  const skip = (page - 1) * limit;

  console.log(limit, page, new RegExp(query, 'i'), skip);

  const totalManga = await MangaModel.countDocuments(
    query ? { title: { $regex: new RegExp(query, 'i') } } : {}
  );
  const totalPage = Math.ceil(totalManga / limit);
  const manga = await MangaModel.find(
    query ? { title: { $regex: new RegExp(query, 'i') } } : {}
  )
    .skip(skip)
    .limit(limit)
    .sort({ updatedAt: -1 });

  res.status(200).json({
    status: true,
    message: 'List manga success',
    data: {
      page,
      totalManga,
      totalPage,
      manga
    }
  });
};

export const MangaUpload = async (req, res) => {
  const { title, description, thumbnail, tags, chapters } = req.body;
  const rating = Number(req.body.rating);
  console.log(req.body);
  const isExist = await MangaModel.findOne({
    title
  });
  if (isExist) {
    return res.status(402).json({ status: false, message: 'Manga is exist' });
  }

  const manga = await MangaModel.create({
    title,
    description,
    thumbnail,
    rating,
    tags,
    chapters
  });
  res.status(201).json({ message: 'Manga added', status: true, data: manga });
};
