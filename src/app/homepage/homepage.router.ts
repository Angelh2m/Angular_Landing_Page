import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { MainPageComponent } from './main-page/main-page.component';


const homePageRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {title: 'Landing Page'}
  }
];

export const HOMEPAGE_ROUTES = RouterModule.forChild(homePageRoutes);

