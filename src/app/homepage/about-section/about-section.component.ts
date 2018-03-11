import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  img = {
    image1: '../../../assets/img/nat-1.jpg',
    image2: '../../../assets/img/nat-2.jpg',
    image3: '../../../assets/img/nat-3.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
