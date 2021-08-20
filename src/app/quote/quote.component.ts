import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
     title='Welcome to My Quote Hub'
     Quote='Whatever your mind can conceive and believe, it can achieve.'

  constructor() { }

  ngOnInit() {
  }

}
