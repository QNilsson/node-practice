import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	calories: {
		type:Number,
		required:true
	},
	image:{
		type:Object,
		required:false
	}
})

export const Recipe = mongoose.model('Recipe', recipeSchema)