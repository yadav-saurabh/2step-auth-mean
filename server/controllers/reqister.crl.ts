import MongodbApi from "../api/mongodb.api";

export default class RegisterCtrl {

  private mongodb = new MongodbApi();

  /**
   * reqister new user 
   */
  register = (req, res) => {
    this.mongodb.write(req.body).then((data:any) => {
      if(data.status){
        res.json({ status: true, msg: 'new user added' });
      }
    }).catch(err => {
      res.status(200).json({ error: 'something blew up' });
    });
  }

  /**
   * check if user already exists with given email
   */
  checkExisting = (req, res) => {
    console.log(req.body.email);
    this.mongodb.read({email : req.body.email}).then((data: any) => {
      if (!!data && data.length > 0) {
        res.json({ status: false, msg: 'email already registered' });
      } else {
        res.json({ status: true });
      }
    }).catch(err => {
      res.status(200).json({ error: 'something blew up' });
    });
  }

}