import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-login1",
  templateUrl: "./login1.component.html",
  styleUrls: ["./login1.component.css"]
})
export class Login1Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  /*log(username) {
    console.log(username);
  }*/

  submit(form) {
    console.log(form);
  }
}
