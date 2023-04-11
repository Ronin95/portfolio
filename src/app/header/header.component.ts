import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Portfolio';

  randomCoverImgNum = Math.floor(Math.random()*3)+1;
  selected_img = '';
  cover_img1 = './assets/img/cover-img/me-nobackground-hoodie.png'; // -hoodie -ending of the other pictures
  cover_img2 = './assets/img/cover-img/me-nobackground-tshirt.png'; // -tshirt -ending of the other pictures
  cover_img3 = './assets/img/cover-img/me-nobackground.png';

  /**
   * `ngOnInit()` is a lifecycle hook method in Angular that is called after the component has been 
   * initialized. In this code, `ngOnInit()` is being used to randomly select 
   * a cover image for the header component by setting the `selected_img` property
   * to the URL of the randomly selected image.
   * 
   * @method
   * @name ngOnInit
   * @kind method
   * @memberof HeaderComponent
   * @returns {void}
   */
  ngOnInit() {
    if (this.randomCoverImgNum == 1) {
      this.selected_img = this.cover_img1;
    } else if (this.randomCoverImgNum == 2) {
      this.selected_img = this.cover_img2;
    } else if (this.randomCoverImgNum == 3) {
      this.selected_img = this.cover_img3;
    }
  }

  /**
   * `checkCoverImg()` is a method in the `HeaderComponent` class that 
   * returns the URL of the randomly selected cover image based on
   * the value of `randomCoverImgNum`. It checks the value of `randomCoverImgNum` 
   * and returns the corresponding cover image URL.
   * 
   * @method
   * @name checkCoverImg
   * @kind method
   * @memberof HeaderComponent
   * @returns {string}
   */
  checkCoverImg() {
    if (this.randomCoverImgNum == 1) {
      return this.cover_img1;
    } else if (this.randomCoverImgNum == 2) {
      return this.cover_img2;
    } else if (this.randomCoverImgNum == 3) {
      return this.cover_img3;
    }
  }
}
