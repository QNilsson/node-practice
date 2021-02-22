//Thor's Class
import express from 'express';
import bodyParser from 'body-parser';
import {apiRouter} from './routes/api.route.js';
import {productRouter} from './routes/product.route.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config ();

const port = process.env.PORT || 5000;

const app = express ();

app.use (
  bodyParser.urlencoded ({
    extend: false,
  })
);

app.use (express.static ('public'));

// app.use ('/api');

app.use (
'/api',
  apiRouter
);

app.use ('/product', productRouter);

app.use ((req, res, next) => {
  res.status (404).send ('<h1>Page not found</h1>');
});

const main = async () => {
  await mongoose.connect (`${process.env.MONGO_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen (port, () => {
    console.log (`Example app listening at http://localhouse:${port}`);
  });
};
main ();
// app.listen(port, () =>{
// 	console.log(`Example app listening at http://localhost:${port}`)
// })
