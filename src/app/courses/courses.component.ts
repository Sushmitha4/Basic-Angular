import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  //to use service or DI we need constructor
  constructor(private http: HttpClient) {
    this.http.get("http://api.github.com/users").subscribe(user => {
      console.log(user);
    }); //angular HttpClient
  }

  ngOnInit() {
    //promises here
    window
      .fetch("http://api.github.com/users")
      .then(data =>
        data.json().then(info => {
          console.log(info);
        })
      )
      .catch(err => console.log(err)); //javascript fetch method
  }
}
