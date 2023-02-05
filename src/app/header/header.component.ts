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
  cover_img1 = './assets/img/cover-img/me-nobackground.png'; // -hoodie -ending of the other pictures
  cover_img2 = './assets/img/cover-img/me-nobackground.png'; // -tshirt -ending of the other pictures
  cover_img3 = './assets/img/cover-img/me-nobackground.png';

  ngOnInit() {
    if (this.randomCoverImgNum == 1) {
      this.selected_img = this.cover_img1;
    } else if (this.randomCoverImgNum == 2) {
      this.selected_img = this.cover_img2;
    } else if (this.randomCoverImgNum == 3) {
      this.selected_img = this.cover_img3;
    }
  }

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
