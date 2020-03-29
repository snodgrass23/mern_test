const express   = require('express');
const cors      = require('cors');
const mongoose  = require('mongoose');

require('dotenv').config();

const app   = express();
const port  = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established.');
});

app.use('/exercises', require('./routes/exercises'));
app.use('/users',     require('./routes/users'));

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});