//Thor's Class
import express from 'express';
import bodyParser from 'body-parser';
import {recipeRouter} from './routes/recipe.router.js';
import {productRouter} from './routes/product.route.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors'

mongoose.set('useFindAndModify', false);

dotenv.config ();

const port = process.env.PORT || 5000;

const app = express ();

app.use(cors())

app.use (
  bodyParser.urlencoded ({
    extend: false
  })
);

app.use(express.json())

app.use (express.static ('public'));


// app.use (
// '/api',
//   apiRouter
// );

app.use ('/product', productRouter);

app.use('/recipe', recipeRouter)

app.use ((req, res, next) => {
  res.status (404).send ('<h1>Page not found</h1>');
});

const main = async () => {
  await mongoose.connect (`${process.env.MONGO_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () =>console.log('connected'))
  mongoose.connection.on('error', () => console.log('connected failed'))

  app.listen (port, () => {
    console.log (`Example app listening at http://localhost:${port}`);
  });
};
main ();
// app.listen(port, () =>{
// 	console.log(`Example app listening at http://localhost:${port}`)
// })
