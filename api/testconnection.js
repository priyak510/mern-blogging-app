const mongoose = require('mongoose');

// Explicitly set the environment variable for testing
process.env.MONGO_URL = 'mongodb+srv://mahitha9201:KZcezrJbbVjXgnNr@cluster0.bpdkhe6.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0';

console.log('MongoDB URL from .env:', process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));
