import * as mongodb from 'mongodb';
import MongoConfig from '../config';

export default class MongodbApi {

  /**
   * config of mongodb
   */
  private mongoConfig = new MongoConfig();

  /**
   * connect to mongodb server
   */
  connect = () => {
    return new Promise((resolve, reject) => {
      const mongoClient = mongodb.MongoClient;
      mongoClient.connect(this.mongoConfig.url, { useNewUrlParser: true }, (err, client) => {
        if (!err) {
          resolve(client);
        } else {
          reject({status:false,msg:'error while connecting to mongodb server'});
        }
      });
    });
  }

  /**
   * read db from mongodb sever
   */
  read = (data) => {
    return new Promise((resolve, reject) => {
      this.connect().then((client: any) => {
        const db = client.db(this.mongoConfig.dbName)
        const collection = db.collection(this.mongoConfig.dbCollection);
        collection.find(data).toArray((err, results) => {
          if (!err) {
            resolve(results);
          } else {
            reject({status:false,msg:'some error while reading in db'});
          }
          client.close();
        });
      });
    });
  }

  /**
   * write db from mongodb server
   */
  write = (data) => {
    return new Promise((resolve, reject) => {
      this.connect().then((client: any) => {
        const db = client.db(this.mongoConfig.dbName)
        const collection = db.collection(this.mongoConfig.dbCollection);
        collection.insertOne(data, (err, result) => {
          if (!err) {
            resolve({status:true});
          } else {
            reject({status:false,msg:'some error while inserting in db'});
          }
          client.close();
        });
      });
    });
  }

}