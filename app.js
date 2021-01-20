//Max's class
// import express from 'express';

// const http = require('/http');


// createServer((req, res) =>{
// 	console.log(req);
// });

// server.listen(3000)

//Thor's Class
import express from 'express';
const app = express()
let port = process.env.PORT;
if(port == null || port == ''){
	port = 3000;
}

app.get('/', (req, res)=>{
	res.send("Hello World this is my node practice repo")
})

app.listen(port, () =>{
	console.log(`Example app listening at http://localhost:${port}`)
})