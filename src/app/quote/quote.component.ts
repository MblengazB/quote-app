import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote []=[
     title='Welcome to My Quote Hub'
     Quote (1,'Motivational Quote','Whatever your mind can conceive and believe, it can achieve','Napoleon Hill')
     Quote(2,'Life Quote','A coward dies a thousand deaths A soldier dies but once','Tupac Shakur')
     Quote(3,'celebrity glitz quote','I dont think i just walk','Paris Hilton')
     Quote(4,'Business Quote','Always deliver more than expected','larry Page')
     Quote(5,'Sports Quote','You miss 100% of the shots you do not take','wayne Gretzky')
     Quote(6,'Comedy Quote','my cell phone fell off my lap.I was reaching for it in my back','Eddie Griffin')
];
  constructor() { }

  ngOnInit() {
  }

}
