import { Component, OnInit } from '@angular/core';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  selected_img_logo = '';

  constructor(private styleService: StyleService) { }

  ngOnInit() {
    this.selected_img_logo = this.styleService.getSelectedImageUrl();
  }
}
