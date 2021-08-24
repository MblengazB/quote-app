import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []=[
     new Quote(1,'Mark','celebrity quote','I dont really think i just walk','Paris Hilton',new Date(2006,7,6)),
   ];
   showAuthor(index){
  this.quotes[index].moreDetails = !this.quotes[index].moreDetails;
}
         removeQuote(toDelete,index){
       if(toDelete){
       let confirmDelete = confirm('Are you sure you want to delete this quote?');

           if(confirmDelete){
        this.quotes.splice(index,1);
    }
     }
    }
      addNewQuote(quote){
       let quoteLength = this.quotes.length;
       quote.id = quoteLength+1;
       quote.completeDate = new Date(quote.completeDate);
       this.quotes.push(quote);
}
      constructor() { }

      ngOnInit() {
      }

    }
