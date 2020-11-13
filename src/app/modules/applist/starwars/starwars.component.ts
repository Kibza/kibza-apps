import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';
declare const M: any;
@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent implements OnInit {

  products: any = [];
  people: any = [];
  constructor(public rest: StarwarsService) { }

  ngOnInit(): void {
    this.getPeople('?page=1');
    M.AutoInit();
  }
  getPeople(x: string): any {
    this.products = [];
    this.rest.getPeople(x).subscribe((data: {}) => {
      this.products = data;
      this.people = this.products.results;
    });
  }
  sortBy(x: string): any {
    switch (x) {
      case 'name':
        this.people.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
        break;
      case 'id':
        this.getPeople('?page=1');
        break;
      case 'weight':
        this.people.sort((a: { mass: string; }, b: { mass: any; }) => a.mass.localeCompare(b.mass));
        break;
      case 'height':
        this.people.sort((a: { height: string; }, b: { height: any; }) => a.height.localeCompare(b.height));
    }
  }
}
