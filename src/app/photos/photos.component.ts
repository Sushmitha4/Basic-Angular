import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos = [];
  fakeApiUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) {
    this.http.get<any>(this.fakeApiUrl).subscribe(photo => {
      //console.log(photo);
      this.photos = photo;
    });
  }

  createTitle(input) {
    let photo = { title: input.value };
    this.http.post<any>(this.fakeApiUrl, photo).subscribe(photo => {
      console.log(photo);
      this.photos.splice(0, 0, photo);
    });
  }

  //remove title from DOM not from api then removed from api
  removeTitle(photo) {
    this.http.delete<any>(`${this.fakeApiUrl}/${photo.id}`).subscribe(_ => {
      let index = this.photos.indexOf(photo);
      console.log(`${this.fakeApiUrl}/${photo.id}`);
      this.photos.splice(index, 1);
    });
  }

  //update title
  updateTitle(photo) {
    this.http
      .put<any>(`${this.fakeApiUrl}/${photo.id}`, photo)
      .subscribe(update => {
        console.log(update);
      });
  }

  ngOnInit() {}
}
