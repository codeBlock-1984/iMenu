import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import mealsRoute from './routes/mealsRoute';
import menusRoute from './routes/menusRoute';
import ordersRoute from './routes/ordersRoute';

const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(expressValidator());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menus', menusRoute);
app.use('/api/v1/orders', ordersRoute);

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', "text/html");
  res.send('<h1>iMenu API</h1>');
});

app.listen(port, host, () => {
  console.log(`iMenu server listening on port ${port}!`);
});

export default app;
