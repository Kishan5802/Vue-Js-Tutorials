const mongoose = require('mongoose');

const mongoDBUrl = 'mongodb://127.0.0.1/e-comm';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true }).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log(error);
});

