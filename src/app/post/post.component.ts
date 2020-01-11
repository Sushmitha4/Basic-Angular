import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  posts = [];
  fakeApiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    this.http.get<any>(this.fakeApiUrl).subscribe(post => {
      // console.log(post);
      this.posts = post;
    });
  }

  createTitle(input) {
    let post = { title: input.value };
    //console.log(input.value);
    this.http.post<any>(this.fakeApiUrl, post).subscribe(post => {
      console.log(post);
      this.posts.splice(0, 0, post);
    });
  }

  //remove title from DOM not from api then removed from api
  removeTitle(post) {
    this.http.delete<any>(`${this.fakeApiUrl}/${post.id}`).subscribe(_ => {
      let index = this.posts.indexOf(post);
      console.log(`${this.fakeApiUrl}/${post.id}`);
      this.posts.splice(index, 1);
    });
  }

  //update title
  updateTitle(post) {
    this.http
      .put<any>(`${this.fakeApiUrl}/${post.id}`, post)
      .subscribe(update => {
        console.log(update);
      });
  }

  ngOnInit() {}
}
