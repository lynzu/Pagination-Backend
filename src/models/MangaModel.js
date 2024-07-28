import mongoose from 'mongoose';
import mongooHidden from 'mongoose-hidden';

const mangaSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
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
    type: [{ number: Number, url: [String] }],
    required: true
  }
});

mangaSchema.plugin(mongooHidden(), {hidden: {_id:true, __v:true}});

const Model = mongoose.model('MangaList-Test', mangaSchema);

export default Model;
