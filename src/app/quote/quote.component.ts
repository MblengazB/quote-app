import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title='Welcome to My Quote Hub'
  quotes:Quote []=[
    new Quote (1,'Peter','Motivational quote','Whatever your mind can conceive and believe it can achieve','Napoleon Hill'),
     new Quote(2,'Paul','Life quote','A coward dies a thousand deaths A soldier dies but once','Tupac Shakur'),
     new Quote(3,'Mark','celebrity glitz quote','I dont think i just walk','Paris Hilton'),
     new Quote(4,'Onyango','Business quote','Always deliver more than expected','larry Page'),
     new Quote(5,'Dequan','Sports quote','You miss 100% of the shots you do not take','wayne Gretzky'),
     new Quote(6,'Gustavo','Comedy quote','People say nothing is impossible but i do nothing everyday','A Milne'),
];
  constructor() { }

  ngOnInit() {
  }

}
