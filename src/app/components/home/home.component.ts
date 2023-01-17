import { Component, OnInit } from '@angular/core';
import { CD } from 'app/classes/cd';
import { StoreService } from 'app/services/store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeCD: CD[] = [];

  constructor(private homeService: StoreService) { }

  ngOnInit(): void {
  }

}
