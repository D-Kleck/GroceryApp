import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 1234;
const logLevel = process.env.LOG_LEVEL || 'dev';

// mongoose connection
require('mongoose').Promise = global.Promise;
mongoose.connect('mongodb://localhost/groceryApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const groceryApp = mongoose.connection;

groceryApp.on('error', console.error.bind(console, 'connection error:'));

groceryApp.once('open', () => {
  console.log('Connection Successful!');
});

// parser middleware needed to process req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// register routes
app.use('/api');

app.post('/api/register', (req, res) => {
  const {firstName, lastName, username, password } = req.body;
})

// // handle 404s
// app.use(error404);

// // handle 500s
// app.use(error500);

// listen on server port
app.listen(port, () => {
  console.log(`Running on port: ${port}...`);
});
