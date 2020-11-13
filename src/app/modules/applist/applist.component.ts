import { Component, OnInit } from '@angular/core';

declare const M: any;
@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.scss']
})
export class ApplistComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    M.AutoInit();
  }

}
