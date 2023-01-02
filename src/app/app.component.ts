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

  randomNum = Math.floor(Math.random()*3)+1; // A variable that creates a random number between 1-3
  /**
   * A function that chooses a random number between 1 and 3.
   * Based on the number 2 colors are selected.
   * Those 2 colors are the colors you see in the background and on the website.
   *
   * @method
   * @name chooseColorOfPortfolio
   * @kind method
   * @memberof AppComponent
   * @returns {void}
   */
  chooseColorOfPortfolio() {
    if (this.randomNum === 1) {
      globalThis.color1 = '#5988FF';
      globalThis.color2 = '#0043F0';
    } else if (this.randomNum === 2) {
      globalThis.color1 = '#FF5959';
      globalThis.color2 = '#DE0000';
    } else if (this.randomNum === 3) {
      globalThis.color1 = '#57E8A2';
      globalThis.color2 = '#33B476';
    }
  }
}
