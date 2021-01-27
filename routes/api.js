import { Router } from 'express'
import path from 'path';
const __dirname = path.resolve();

export const api = Router()



api.get('/', (req, res)=>{
	res.json({
		name: "Quinn",
		color: "orange",
		pet: "cats",
		likes: [
			'decorating',
			'exercising',
			'animals'
		]
	})
	
	
})