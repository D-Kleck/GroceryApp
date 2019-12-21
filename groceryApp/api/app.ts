
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import morgan = require('morgan');
import cors = require('cors');
import mongoose = require('mongoose');
import { database } from './config/database.config';
import { router } from './routes/user.routes';
import * as userControl from './controllers/controller';
import { error404, error500 } from './middleware';

const app = express();
const port = process.env.PORT || 1234;
const logLevel = process.env.LOG_LEVEL || 'dev';

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


// parser middleware needed to process req.body
app.use(morgan(logLevel));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parser Middleware
app.use(bodyParser.json());

// app.use('/users', router);

// Index Route
app.get('/', (req, res) => {
  res.send('Not authorized to view this page!');
});

// // Register Route
// app.get('/register', (req, res) => {
//   res.send('Register!');
// });

// // Login Route
// app.get('/login', (req, res) => {
//   res.send('login!');
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API Endpoints
// User CRUD
app.get('/', userControl.getAllUsers);
app.get('/:id', userControl.getUserById);
app.get('/:username', userControl.getUserByUsername);
app.post('/users/id', userControl.createUser);
app.put('/:id', userControl.updateUser);
// app.delete('/users/:id', userControl.deleteUser);

// List CRUD
// app.get('/users/:id/groceryLists', userControl.getAllLists);
//app.get('/users/:id/groceryLists/:id', userControl.getListById);
//app.post('/users/:id/groceryLists', userControl.createList);
//app.post('/users/:id/groceryLists', userControl.dupList);
// app.put('/users/:id/groceryLists/:id', userControl.updateList);
// app.delete('/users/:id/groceryLists/:id', userControl.deleteList);

// // Item CRUD
// app.get('/users/:id/groceryLists/:id/items', userControl.getAllItems);
// //app.get('/users/:id/groceryLists/:id/items/:id', userControl.getItemById);
// //app.post('/users/:id/groceryLists/:id/items', userControl.createItem);
// app.put('/users/:id/groceryLists/:id/items/:id', userControl.updateItem);
// app.delete('/users/:id/groceryLists/:id/items/:id', userControl.deleteItem);

// handle 404s
app.use(error404);

// handle 500s
app.use(error500);

// listen on server port
app.listen(port, () => {
  console.log(`Running on port: ${port}...`);
});
