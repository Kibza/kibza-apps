import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
declare const M: any;
@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.scss']
})
export class PokeapiComponent implements OnInit {

  products: any = [];
  pokemons: any = [];
  pokemon: any = [];
  constructor(public rest: PokeapiService) { }

  ngOnInit(): void {
    this.getPokemons('');
    this.getPokemon(1);
    M.AutoInit();
  }

  getPokemons(x: string): any {
    this.products = [];
    this.rest.getPokemons(x).subscribe((data: {}) => {
      this.products = data;
      this.pokemons = this.products.results;
    });
  }
  getPokemon(id: number): any {
    this.rest.getPokemon(id).subscribe((data: {}) => {
      this.pokemon = data;
    });
  }

}
