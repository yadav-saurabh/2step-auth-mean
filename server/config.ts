/**
 * mongodb config
 */
export default class MongoConfig {
  userName = 'test';
  password = 'test';
  dbName = 'test';
  dbCollection = 'users';
  url = 'mongodb+srv://'+ this.userName + ':' + this.password + '@cluster0-lghq2.gcp.mongodb.net/'+ this.dbName +'?retryWrites=true';    
}
