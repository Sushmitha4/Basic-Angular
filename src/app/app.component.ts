import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "sspider";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyCjDTsXjUs53TcUc4D_7yke8Upg3QxYLwo",
      authDomain: "fullstack-angular-40220.firebaseapp.com",
      databaseURL: "https://fullstack-angular-40220.firebaseio.com",
      projectId: "fullstack-angular-40220",
      storageBucket: "fullstack-angular-40220.appspot.com",
      messagingSenderId: "193332078263",
      appId: "1:193332078263:web:e991f8bdaadc674ea28f32"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  //Parent component app
  /*users = [
    { name: "Manu", age: 20, company: "Qspiders" },
    { name: "Arun", age: 22, company: "Jspiders" },
    { name: "Keerthi", age: 24, company: "Infosys" }
  ];

  countryData = [];

  getCountry(event) {
    this.countryData = event;
  }*/
}
