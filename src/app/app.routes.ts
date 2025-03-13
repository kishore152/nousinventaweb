import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
    },
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, 
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent,
    },
    {   path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]; 
