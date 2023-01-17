import { Component, OnInit } from '@angular/core';
import { CD } from 'app/classes/cd';
import { StoreService } from 'app/services/store.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  cds: CD[] = [];
  genre = ["Pop", "Rock", "Jazz/Blues", "Hip-hop/Rap", "Disco", "Electronica ", "Funk/Soul", "Soundtrack ", "RnB"];
  searchKey: any;
  pagination: number = 1;

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  getCDs() {
    this.storeService.getAllCDs().subscribe((data) => {
      this.cds = data;
      console.log("Store data working");
    },
      (error) => {
        console.log(error);
      })
  }

  showOnlyGenre(genre: string) {
    return this.storeService.getCDsByGenre(genre).subscribe(
      (data) => {
        this.cds = data;
        console.log(genre + " Genre showing")
      },
      (error) => {
        console.log(error);
      }
    )
  }


  search(): void {
    if (this.searchKey) {
      // this.router.navigateByUrl('/search/' + this.searchKey)

      this.storeService.searchCD(this.searchKey).subscribe(
        (data) => {
          this.cds = data;
          console.log(data)
        },
        (error) => console.log(error)
      )

    }
    else {
      this.getCDs();
    }

  }


  ngOnInit(): void {
    this.getCDs();
  }
}
