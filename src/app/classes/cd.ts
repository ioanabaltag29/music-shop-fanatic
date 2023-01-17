export class CD {
    // ? - optional
    // ! - mandatory
    id!: number;
    artist: string;
    album_name: string;
    genre: string[];
    price: number;

    favorite: boolean;
    stars: number;

    image_front: string;
    image_album: string[];
    record_label: string;
    release_year: string;
    cd_no: number;
    description: string;
    songs: string[];
    in_cart: boolean;
    quantity: number;
  quantity_price: number;

    // constructor(id, artist) {
    //     this.id = id;
    //     this.artist = artist;
    // }
}
