export class Validators {


  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }
  static projectObject(object: { [key: string]: any }, projectArray: any[]): { [key: string]: any } {
    return JSON.parse(JSON.stringify(object,projectArray))
  }


}