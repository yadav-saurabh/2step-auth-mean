import * as ethers from 'ethers';

export default class EthersApi {

  genrateRandom(){
    return ethers.Wallet.createRandom();
  }

  genrateFromPrivateKey(privateKey){
    return new ethers.Wallet(privateKey)
  }

}