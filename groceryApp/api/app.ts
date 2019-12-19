
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import cors = require('cors');
import mongoose = require('mongoose');
import { database } from './config/database.config';
import { router } from './routes/user.routes';

// Database connection using mongoose
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const groceryAppDB = mongoose.connection;

// SUCCESS
groceryAppDB.on('connected', () => {
  console.log('Connected to Database ' + database);
});
// FAIL
groceryAppDB.on('error', err => {
  console.log('Database Connection Error ' + err);
});

const app = express();
const port = process.env.PORT || 1234;

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', router);

// Index Route
app.get('/', (req, res) => {
  res.send('Not authorized to view this page!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// listen on server port
app.listen(port, () => {
  console.log(`Running on port: ${port}...`);
});
