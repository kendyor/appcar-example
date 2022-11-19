let mongoose = require('mongoose');
require("dotenv").config();

// mongoose.connect(process.env.MONGODBLOCAL_URI);

mongoose
  .connect(process.env.MONGODBLOCAL_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

module.exports = mongoose;
