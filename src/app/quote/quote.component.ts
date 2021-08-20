import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
     Quote='Whatever Your Mind Can Conceive and Believe, It Can Achieve.'

  constructor() { }

  ngOnInit(): void {
  }

}
