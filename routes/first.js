import { Router } from 'express'

import path  from 'path';
const __dirname = path.resolve();

export const first = Router()


first.get('/', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'views', 'index.html'))
})


