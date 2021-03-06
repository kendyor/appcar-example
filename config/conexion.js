let mongoose = require('mongoose');
require("dotenv").config();

// mongoose.connect(process.env.MONGODBLOCAL_URI);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

module.exports = mongoose;