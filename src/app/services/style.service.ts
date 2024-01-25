import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  public randomNum = Math.floor(Math.random() * 3) + 1; // Keep this public so it can be accessed from HeaderMenuComponent

  // Define the image URLs here as well
  private coverImgUrls = [
    './assets/img/otherImgs/logo-blueText.png', // Associated with color1 and color2 for randomNum 1
    './assets/img/otherImgs/logo-redText.png', // Associated with color1 and color2 for randomNum 2
    './assets/img/otherImgs/logo-greenText.png' // Associated with color1 and color2 for randomNum 3
  ];

  constructor() { }

  public chooseColorOfPortfolio(): void {
    switch (this.randomNum) {
      case 1:
        globalThis.color1 = '#5988FF';
        globalThis.color2 = '#0043F0';
        break;
      case 2:
        globalThis.color1 = '#FF5959';
        globalThis.color2 = '#DE0000';
        break;
      case 3:
        globalThis.color1 = '#57E8A2';
        globalThis.color2 = '#33B476';
        break;
    }

    document.body.style.setProperty('--color1', globalThis.color1);
    document.body.style.setProperty('--color2', globalThis.color2);
  }

  // New method to get the selected image URL
  public getSelectedImageUrl(): string {
    return this.coverImgUrls[this.randomNum - 1]; // Adjust index to match the randomNum
  }
}

