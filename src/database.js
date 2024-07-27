import mongoose from 'mongoose';

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connect;
