
//Thor's Class
import express from 'express'
import bodyParser from 'body-parser'
import { apiRouter } from './routes/api.route.js'
import { productRouter } from './routes/product.route.js'
import { mongoConnect } from './util/database.js'



const port = process.env.PORT || 5000

const app = express()

app.use(bodyParser.urlencoded({extend:false}))

app.use(express.static('public'))

app.use('/api', apiRouter)

app.use('/product', productRouter)

app.use((req, res, next) =>{
	res.status(404).send('<h1>Page not found</h1>')
})

mongoConnect((client ) =>{
	console.log(client);
	app.listen(5000);
})

// app.listen(port, () =>{
// 	console.log(`Example app listening at http://localhost:${port}`)
// })