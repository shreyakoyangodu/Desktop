const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://amulya:XBpwGWmGzwfyioqn@cluster0.oe9aojd.mongodb.net/library-app', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('DB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = dbConnect;

// Call the function to establish the database connection
dbConnect();