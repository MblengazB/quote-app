export class Quote {
 showInfo:boolean;
  constructor(id:number,public name:string,public title:string,public description:string,public author:string,public completeDate:Date,public likes:number,public dislikes:number){
  this.showInfo=false;
  }
}
