import { Router } from 'express'
export const recipeRouter = Router()
import { addRecipe, recipes, deleteRecipe} from '../controllers/recipe.controller.js'

recipeRouter.post('/', addRecipe)
recipeRouter.get('/', recipes)
recipeRouter.delete('/delete', deleteRecipe)