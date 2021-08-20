import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
     title='Welcome to My Quote Hub'
     Quote=(1,'Whatever Your Mind Can Conceive and Believe, It Can Achieve.','Napoleon hill')



  constructor() { }

  ngOnInit(): void {
  }

}
