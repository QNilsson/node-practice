//connect to mongodb
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient;


export const mongoConnect = (callback) => {
	MongoClient.connect (
		'mongodb+srv://quinn_nilsson:Brandon2019@cluster0.h3xnc.mongodb.net/<dbname>?retryWrites=true&w=majority'
	  )
		.then (client => {
		  console.log ('conntected');
		  callback(client)
		})
		.catch (err => {
		  console.log (err);
		});
};



