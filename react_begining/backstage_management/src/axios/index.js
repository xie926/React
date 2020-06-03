import JsonP from 'jsonp'
export default class Axios{
  static jsonp(options){
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: "callback"
      }, function(err, response){
        if(err){
          throw new Error("出错了"+ err)
        }
        if (response.status === 'success') {
          resolve(response);
        } else {
          reject(response.messsage);
        }
      })
    })
  }
}