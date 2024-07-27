import mongoose from 'mongoose';

const mangaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  chapters: {
    type: [{number: Number, url: [String]}],
    required: true
  }
});

const Model = mongoose.model('MangaList', mangaSchema);

export default Model;
