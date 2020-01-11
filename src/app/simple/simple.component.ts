import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  //users = ["Anu", "Vinu", "Manu"];
  //color = "green";

  //isBtn = true;

  //ngClass
  /*toggleClass = false;

  toggleState() {
    this.toggleClass = !this.toggleClass;
    //alert("hello");
  }

  dynamicCss() {
    return {
      "bg-danger": true,
      background: this.toggleClass
    };
  }

  addDynamicClass() {
    return {
      "bg-danger": true,
      "text-white": true,
      "mt-2": true,
      "p-2": true,
      background: this.toggleClass
    };
  }*/

  //ngStyle
  users = [
    {
      name: "Anu",
      age: 20,
      gender: "Female",
      country: "India"
    },
    {
      name: "Manu",
      age: 21,
      gender: "Male",
      country: "India"
    },
    {
      name: "Vijay",
      age: 22,
      gender: "Male",
      country: "India"
    },
    {
      name: "Viju",
      age: 23,
      gender: "Female",
      country: "India"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
