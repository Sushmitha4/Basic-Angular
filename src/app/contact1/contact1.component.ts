import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "../name.validators";

@Component({
  selector: "app-contact1",
  templateUrl: "./contact1.component.html",
  styleUrls: ["./contact1.component.css"]
})
export class Contact1Component implements OnInit {
  constructor() {}

  form = new FormGroup({
    //this is parent that is formgroup
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.removeSpace
    ]), //this is child that is formcontrol
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      CustomValidators.removeSpace
    ])
  });

  //get username and password
  get username() {
    return this.form.get("username");
  } //getter

  get password() {
    return this.form.get("password");
  }

  ngOnInit() {}
}
