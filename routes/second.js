import { Router } from 'express'
import path from 'path';
const __dirname = path.resolve();

export const second = Router()



second.get('/second', (req, res, next)=>{
	res.send("This should be json")
	
})