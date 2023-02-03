import { Component, OnInit } from '@angular/core';
import { StyleService } from './services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.ss.chooseColorOfPortfolio();
    this.ss.displayDifferentCoverImg();
  }
  constructor(private ss:StyleService) {}


}
