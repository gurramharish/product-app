import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  counter = 0;
  today = new Date();
  price = 89.99;
  hl = false;

  constructor() { }

  ngOnInit() {
  }

  increment(e: Event) {
    console.log(e);
    e.stopPropagation(); // cancel the bubbubling up the event
    this.counter++;
  }

  divClicked() {
    console.log('Bubble event');
  }

  printOnKeyUp(value) {
    console.log('Value from typing ', value);
  }

}
