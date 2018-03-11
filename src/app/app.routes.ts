// Import the router
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';


const AppRoutes: Routes = [
  { path: '',
    component: AppComponent,
  },
  { path: 'page',
    component: HomepageComponent,
    loadChildren: './homepage/homepage.module#HomepageModule'
  }
];


export const APP_ROUTES = RouterModule.forRoot(AppRoutes, {useHash: false});

