import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplistRoutingModule } from './applist-routing.module';
import { ApplistComponent } from './applist.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { PokeapiComponent } from './pokeapi/pokeapi.component';


@NgModule({
  declarations: [ApplistComponent, StarwarsComponent, PokeapiComponent],
  imports: [
    CommonModule,
    ApplistRoutingModule
  ]
})
export class ApplistModule { }
