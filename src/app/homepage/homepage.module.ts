import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOMEPAGE_ROUTES } from './homepage.router';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    HeaderComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    HOMEPAGE_ROUTES,
  ],
})
export class HomepageModule { }
