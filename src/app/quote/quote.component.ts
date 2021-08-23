import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []=[
    new Quote (1,'Peter','Motivational quote','Whatever your mind can conceive and believe it can achieve','Napoleon Hill',new Date(1937,1,12)),
     new Quote(2,'Paul','Life quote','A coward dies a thousand deaths A soldier dies but once','Tupac Shakur',new Date(1994,9,3)),
     new Quote(3,'Mark','celebrity glitz quote','I dont really think i just walk','Paris Hilton',new Date(2006,7,6)),
     new Quote(4,'Onyango','Business quote','Always deliver more than expected','larry Page',new Date(2011,5,11)),
     new Quote(5,'Dequan','Sports quote','You miss 100% of the shots you do not take','wayne Gretzky',new Date(2013,5,6)),
     
];
      addNewQuote(quote){
       let quoteLength = this.quotes.length;
       quote.id = quoteLength+1;
       quote.completeDate = new Date(quote.completeDate)
       this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
