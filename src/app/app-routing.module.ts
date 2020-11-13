import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{ path: 'applist', loadChildren: () => import('./modules/applist/applist.module').then(m => m.ApplistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
