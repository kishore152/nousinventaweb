import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
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
    {
        path: 'contact',
        pathMatch: 'full',
        component: ContactComponent,
    },
    {
        path: 'aipage',
        pathMatch: 'full',
        loadComponent: () => import('./service/aipage/aipage.component').then(m => m.AipageComponent)
    },
    {
        path: 'learningtopic',
        pathMatch: 'full',
        loadComponent: () => import('./resource/learningtopic/learningtopic.component').then(m => m.LearningtopicComponent)
    },
    {   path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]; 
