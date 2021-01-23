//Max's class
// import express from 'express';

// const http = require('/http');


// createServer((req, res) =>{
// 	console.log(req);
// });

// server.listen(3000)

//Thor's Class
import express from 'express';
import path from 'path';
import { testRouter } from './routes/test.route.js'
import { newRouter } from './routes/new.route.js'


const app = express()
let port = process.env.PORT;
if(port == null || port == ''){
	port = 3000;
}

//from Max
app.use(newRouter, (req, res, next) =>{
	console.log('This is the new router')
	next()
})

app.use('/', (req, res, next)=>{
	console.log("this is the default router")
	res.send('<h1>This is default</h1>')
	
})


app.listen(port, () =>{
	console.log(`Example app listening at http://localhost:${port}`)
})