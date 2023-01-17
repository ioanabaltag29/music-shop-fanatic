export interface CD {
    id: number,
    artist: string,
    album_name: string,
    genre: string[],
    price: number,
    // image used as url
    image_front: string,
    image_album: string[],
    record_label: string,
    release_year: string,
    cd_no: number,
    description: string,
    songs: string
}
