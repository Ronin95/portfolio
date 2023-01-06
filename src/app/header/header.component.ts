import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Portfolio';
  circle: any = document.getElementById('circle');
  // document.circle.style.setProperty("--color1", global.this.color1);
}
