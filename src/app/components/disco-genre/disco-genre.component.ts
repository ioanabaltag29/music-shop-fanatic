import { Component, OnInit } from '@angular/core';
import { CD } from 'app/classes/cd';
import { StoreService } from 'app/services/store.service';


@Component({
  selector: 'app-disco-genre',
  templateUrl: './disco-genre.component.html',
  styleUrls: ['./disco-genre.component.css']
})
export class DiscoGenreComponent implements OnInit {
  cds: CD[] = [];
  route: any;
  genre = ["Pop", "Rock", "Jazz/Blues", "Hip-hop/Rap", "Disco", "Electronica ", "Funk/Soul", "Soundtrack ", "RnB"];
  searchKey: any;
  pagination: number = 1;

  constructor(private storeService: StoreService) { }


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
      this.showOnlyGenre(this.genre[4]);
    }

  }

  ngOnInit(): void {
    this.showOnlyGenre(this.genre[4]);
  }

}
