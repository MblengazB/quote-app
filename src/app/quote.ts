export class Quote {
 moreDetails:boolean;
  constructor(id:number,public name:string,public title:string,public description:string,public author:string,public posteddate:Date){
  this.moreDetails=false;
  }
}
