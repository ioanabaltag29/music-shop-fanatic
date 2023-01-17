import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CD } from 'app/classes/cd';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchKey: string = "";
  cds: CD[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private storeService: StoreService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   if (params.searchKey)
    //     this.searchKey = params.searchKey;
    // },
    //   (error) => console.log(error))
  }

  search(): void {
    if (this.searchKey) {
      // this.router.navigateByUrl('/search/' + this.searchKey)

      this.storeService.searchCD(this.searchKey).subscribe(
        (data) => {
          console.log(data)
        },
        (error) => console.log(error)
      )
    }

  }
}
