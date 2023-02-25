import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-text',
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.scss']
})
export class IntroTextComponent implements OnInit {
  ngOnInit() {
      // Get the element
      let scrollDown = document.getElementById("scroll-down");

      // When clicked, scroll to the bottom of the page
      scrollDown.addEventListener("click", function() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      });
  }
}
