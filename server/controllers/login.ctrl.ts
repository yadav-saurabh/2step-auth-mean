import MongodbApi from "../api/mongodb.api";

export default class LoginCtrl {

  private mongodb = new MongodbApi();

  /**
   * verify is user is valid
   */
  verifyUser = (req,res) => {
    this.mongodb.read(req.body).then((data:any)=>{
      if(!!data && data.length > 0){
        res.json({status:true,msg:'login sucess'});
      } else {
        res.json({status:false,msg:'username or password is wrong'});
      }
    }).catch( err => {
      res.status(500).send({ error: 'something blew up' });
    });
  }

}