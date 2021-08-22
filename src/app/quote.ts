export class Quote {
 showInfo:boolean;
  constructor(id:number,public name:string,public title:string,public description:string,public author:string,public datePosted:Date){
  this.showInfo=false;
  }
}
