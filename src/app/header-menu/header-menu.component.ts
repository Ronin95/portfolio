import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  constructor() {}

  /**
   * `ngOnInit()` is a lifecycle hook method in Angular that is called after the component 
   * has been initialized. In this code, `ngOnInit()` is being used to call the 
   * `stopScrolling()` method, which adds an event listener to the 
   * `DOMContentLoaded` event and checks if a checkbox is checked or unchecked to 
   * add or remove a class from the `body` element, preventing or allowing scrolling on the 
   * page.
   * 
   * @method
   * @name ngOnInit
   * @kind method
   * @memberof HeaderMenuComponent
   * @returns {void}
   */
  ngOnInit() {
    this.stopScrolling();
  }

  /**
   * `stopScrolling()` is a method defined in the `HeaderMenuComponent` class. 
   * It adds an event listener to the `DOMContentLoaded` event, 
   * which listens for when the initial HTML document has been 
   * completely loaded and parsed. When the `toggleScrollCheckbox` 
   * element is changed (i.e. checked or unchecked), the method 
   * checks if it is checked and adds the `no-scroll` class to the 
   * `body` element if it is, which prevents scrolling on the page. 
   * If it is unchecked, the `no-scroll` class is removed from the `body` 
   * element, allowing scrolling again.
   * 
   * @method
   * @name stopScrolling
   * @kind method
   * @memberof HeaderMenuComponent
   * @returns {void}
   */
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
