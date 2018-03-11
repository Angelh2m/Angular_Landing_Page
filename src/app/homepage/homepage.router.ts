import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';

const homePageRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    data: {title: 'Landing Page'}
  }
];

export const HOMEPAGE_ROUTES = RouterModule.forChild(homePageRoutes);

