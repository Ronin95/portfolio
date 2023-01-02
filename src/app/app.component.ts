import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.chooseColorOfPortfolio();
  }
  constructor() {}

  randomNum = Math.floor(Math.random()*3)+1;
  chooseColorOfPortfolio() {
    console.log(this.randomNum);
  }
  // if number === 1
  // enable everything to be blue
  // else if number === 2
  // enable everything to be red
  // else if number === 3
  // enable everything to be green

}
