export class LoggerService{
log(message: String){
  console.log(new Date().toTimeString()+ " : " + message);
}
}
