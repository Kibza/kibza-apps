import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplistComponent } from './applist.component';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { StarwarsComponent } from './starwars/starwars.component';

const routes: Routes =
  [{ path: '', component: ApplistComponent },
    { path: 'starwars', component: StarwarsComponent },
    { path: 'pokemon', component: PokeapiComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplistRoutingModule { }
