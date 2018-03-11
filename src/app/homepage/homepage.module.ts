import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOMEPAGE_ROUTES } from './homepage.router';

import { InformationComponent } from './information/information.component';
import { GridComponent } from './grid/grid.component';
import { AboutSectionComponent } from './about-section/about-section.component';


@NgModule({
  declarations: [
    MainPageComponent,
    InformationComponent,
    GridComponent,
    AboutSectionComponent
  ],
  imports: [
    CommonModule,
    HOMEPAGE_ROUTES,
  ],
})
export class HomepageModule { }
