import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import mealsRoute from './routes/mealsRoute';

const app = express();
const port = 3000 || process.env.port;

app.use(expressValidator());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/meals', mealsRoute);

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', "text/html");
  res.send('<h1>iMenu API</h1>');
});

app.listen(port, () => {
  console.log(`iMenu server listening on port ${port}!`);
});

export default app;
