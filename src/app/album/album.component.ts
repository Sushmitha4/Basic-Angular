import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"]
})
export class AlbumComponent implements OnInit {
  albums = [];
  fakeApiUrl = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) {
    this.http.get<any>(this.fakeApiUrl).subscribe(album => {
      //console.log(album);
      this.albums = album;
    });
  }

  createTitle(input) {
    let album = { title: input.value };
    //console.log(input.value);
    this.http.post<any>(this.fakeApiUrl, album).subscribe(album => {
      console.log(album);
      this.albums.splice(0, 0, album);
    });
  }

  //remove title from DOM not from api then removed from api
  removeTitle(album) {
    this.http.delete<any>(`${this.fakeApiUrl}/${album.id}`).subscribe(_ => {
      let index = this.albums.indexOf(album);
      console.log(`${this.fakeApiUrl}/${album.id}`);
      this.albums.splice(index, 1);
    });
  }

  //update title
  updateTitle(album) {
    this.http
      .put<any>(`${this.fakeApiUrl}/${album.id}`, album)
      .subscribe(update => {
        console.log(update);
      });
  }

  ngOnInit() {}
}
