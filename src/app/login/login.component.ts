import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: string = "hello login page how are you?😃💯";

  loginData() {}
  constructor() {}

  ngOnInit() {}
}
