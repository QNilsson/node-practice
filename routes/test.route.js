import { Router } from 'express'

export const testRouter = Router()

testRouter.get('/', (req, res)=>{
	res.send("Hello World from the test route")
})
