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
const __dirname = path.resolve();
import { first } from './routes/first.js'
import { second } from './routes/second.js'
const app = express()


let port = process.env.PORT;
if(port == null || port == ''){
	port = 3000;
}

app.use(first);
app.use(second);

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