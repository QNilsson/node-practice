//Max's class
// import express from 'express';

// const http = require('/http');


// createServer((req, res) =>{
// 	console.log(req);
// });

// server.listen(3000)

//Thor's Class
import express from 'express';
import { testRouter } from './routes/test.route.js'


const app = express()
let port = process.env.PORT;
if(port == null || port == ''){
	port = 3000;
}

app.use('/', testRouter)


app.listen(port, () =>{
	console.log(`Example app listening at http://localhost:${port}`)
})