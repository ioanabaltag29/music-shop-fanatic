import { Component, OnInit } from '@angular/core';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'app-genre-filtered-store',
  templateUrl: './genre-filtered-store.component.html',
  styleUrls: ['./genre-filtered-store.component.css']
})
export class GenreFilteredStoreComponent implements OnInit {

  constructor(private storeService: StoreService) { }



  ngOnInit(): void {

  }

}
