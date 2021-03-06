import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote  } from "../quote";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter<boolean>();

  deleteQuote(remove:boolean){
  this.toDelete.emit(remove);
}
    numberOfLikes : number = 0;
    numberOfDislikes: number = 0;
    likeButtonClick() {
      this.numberOfLikes++;
    }
    dislikeButtonClick(){
      this.numberOfDislikes++;
    }


  constructor() { }

  ngOnInit() {
  }

}
