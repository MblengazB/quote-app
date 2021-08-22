export class Quote {
  showdescription:boolean;
  constructor(public id:number,public name:string,public title:string,public description:string,public author:string){
    this.showdescription=false;
  }
}
