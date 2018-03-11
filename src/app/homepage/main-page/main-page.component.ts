import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  image = {
    background: '../../../assets/img/logo-white.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
