const mongoose = require('mongoose');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.connection = mongoose.connect(
      'mongodb+srv://leonardo:leonardo@cluster0-sxzqd.mongodb.net/tools?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  }
}

module.exports = new Database();
