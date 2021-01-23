import { Router } from 'express'

export const newRouter = Router()



newRouter.get('/newRouter', (req, res, next)=>{
	res.send("Nice job, you are at the new router")
	
})