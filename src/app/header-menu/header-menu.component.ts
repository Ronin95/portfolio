import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    this.stopScrolling();
  }

  stopScrolling() {
    document.addEventListener('DOMContentLoaded', () => {
      const toggleScrollCheckbox = document.getElementById('active') as HTMLInputElement;
    
      toggleScrollCheckbox.addEventListener('change', (event) => {
        const isChecked = (event.target as HTMLInputElement).checked;
    
        if (isChecked) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      });
    });
    
  }
}
