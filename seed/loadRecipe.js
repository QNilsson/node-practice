import axios from 'axios';
import {Recipe} from '../models/recipe.js';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config;

const seedMongo = async () => {
  await mongoose.connect (`${process.env.MONGO_CONNTECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const options = {
  method: 'GET',
  url: 'https://api.edamam.com/search?q=chicken&app_id=${apid}&app_key=${apkey}&to=30',
  params: {q: 'chicken', to: 30},
  headers:{
	  'app_key':`${process.env.REACT_APP_RECIPE_API_KEY}`,
	  'app_id': `${process.env.REACT_APP_RECIPE_API_ID}`
  }
}
try{
	const response = await axios.request(options)
	await addRecipes(response.data.d)
	await mongoose.connection.close()
}catch(error){
	console.log(error)
}
}

const addRecipe = async (oneRecipe)=>{
	const recipe = new Recipe({
		title: oneRecipe.label,
		calories: oneRecipe.calories,
		image: oneRecipe.image

	})
	await recipe.save()
	console.log('added successfully')
}

const addRecipes = async (recipeList) =>{
	for(let recipe of recipeList){
		await addRecipe(recipe)
	}
}

seedMongo()