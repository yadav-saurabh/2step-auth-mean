import * as mongodb from 'mongodb';

let db;

function con() {
  const MongoClient = mongodb.MongoClient;
  const url = 'mongodb+srv://test:test@cluster0-lghq2.gcp.mongodb.net/test?retryWrites=true';
  const dbName = 'test';
  MongoClient.connect(url, { useNewUrlParser: true },(err,client)=>{
    console.log("Connected successfully to Mongodb server");
  });
}



export default class MongodbApi {
  constructor(){
    con();
  }
  
  write(){
    const collection = db.collection('tp');
    collection.insertMany([{'akak' : 'op1'}, {'abc' : 'op2'}, {'xyz' : 'op3'}], function(err, result) {
      console.log(err);
      console.log("Inserted 3 documents into the collection");
      console.log(result);
    });
  }
  
  read() {
    const collection = db.collection('tp');
    collection.find({}).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs)
    });
  }
}