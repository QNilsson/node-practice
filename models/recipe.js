import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	servings: {
		type:Number,
		required:true
	},
	image:{
		type:Object,
		required:false
	},
	time:{
		type:Number,
		required:true,
	},
	id:{
		type:String,
		required:true
	}
})

export const Recipe = mongoose.model('Recipe', recipeSchema)