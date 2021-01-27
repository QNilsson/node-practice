
//Thor's Class
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
import { route } from './routes/route.js'
import { api } from './routes/api.js'
const app = express()

const port = process.env.PORT || 5000

app.use('/', route);
app.use('/api',api);

app.use((req, res, next) =>{
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


//from Max
// app.use(newRouter, (req, res, next) =>{
// 	console.log('This is the new router')
// 	next()
// })

// app.use('/', (req, res, next)=>{
// 	console.log("this is the default router")
// 	res.send('<h1>This is defajhjult</h1>')
	
// })


app.listen(port, () =>{
	console.log(`Example app listening at http://localhost:${port}`)
})