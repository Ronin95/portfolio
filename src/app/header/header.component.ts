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

  ngOnInit() {
    if (this.randomCoverImgNum == 1) {
      this.selected_img = this.cover_img1;
    } else if (this.randomCoverImgNum == 2) {
      this.selected_img = this.cover_img2;
    } else if (this.randomCoverImgNum == 3) {
      this.selected_img = this.cover_img3;
    }

    // let checkboxNavBar = document.getElementById('active') as HTMLInputElement;
    // checkboxNavBar.addEventListener('change', function() {
    //   let body = document.getElementsByTagName('body')[0];
    //   if (checkboxNavBar.checked) {
    //     body.style.overflow = 'hidden';
    //   } else {
    //     body.style.overflow = 'auto';
    //   }
    // });
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
