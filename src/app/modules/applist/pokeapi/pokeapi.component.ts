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
    this.getPokemons();
    // this.catchEmAll();
    M.AutoInit();
  }

  getPokemons(): any {
    this.products = [];
    this.rest.getPokemons().subscribe((data: {}) => {
      this.products = data;
      console.log(this.products.results[0].url);
      this.pokemons = this.products.results;
    });
  }

  catchEmAll(): any {
    this.rest.getUrl('https://pokeapi.co/api/v2/pokemon/1/').subscribe((data: {}) => {
      this.pokemon = data;
    });
  }

}
