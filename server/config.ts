/**
 * mongodb config
 * ony for testing  i will be deleting the server within few days
 * to know how  get your own free url for testing
 * https://www.youtube.com/watch?v=_d8CBOtadRA
 * 
 */
export default class MongoConfig {
  userName = 'test';
  password = 'test';
  dbName = 'test';
  dbCollection = 'users';
  url = 'mongodb+srv://'+ this.userName + ':' + this.password + '@cluster0-lghq2.gcp.mongodb.net/'+ this.dbName +'?retryWrites=true';    
}
