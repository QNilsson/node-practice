import { Router } from 'express'

export const testRouter = Router()



testRouter.get('/', (req, res)=>{
	res.send("Howdy there, welcome to the default route page")
})
