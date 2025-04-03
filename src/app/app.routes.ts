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
    },{
        path: 'perspective',
        pathMatch: 'full',
        loadComponent: () => import('./resource/perspective/perspective.component').then(m => m.PerspectiveComponent)
    },{
        path: 'bankandfinance',
        pathMatch: 'full',
        loadComponent: () => import('./industries/bankandfinance/bankandfinance.component').then(m => m.BankandfinanceComponent)
    },{
        path: 'retailandecommrece',
        pathMatch: 'full',
        loadComponent: () => import('./industries/retailandecommrece/retailandecommrece.component').then(m => m.RetailandecommreceComponent)
    },{
        path: 'healthandlifescience',
        pathMatch: 'full',
        loadComponent: () => import('./industries/healthandlifescience/healthandlifescience.component').then(m => m.HealthandlifescienceComponent)
    },{
        path: 'travelandlogistic',
        pathMatch: 'full',
        loadComponent: () => import('./industries/travelandlogistic/travelandlogistic.component').then(m => m.TravelandlogisticComponent)
    },{
        path: 'education',
        pathMatch: 'full',
        loadComponent: () => import('./industries/education/education.component').then(m => m.EducationComponent)
    },
    {   path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]; 
