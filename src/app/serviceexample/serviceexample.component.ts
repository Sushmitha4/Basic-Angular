import { Component, OnInit } from "@angular/core";
import { CustomService } from "../services/custom.service";

@Component({
  selector: "app-serviceexample",
  templateUrl: "./serviceexample.component.html",
  styleUrls: ["./serviceexample.component.css"]
})
export class ServiceexampleComponent implements OnInit {
  courses = [];
  countries = [];
  employees = [];

  constructor(private service: CustomService) {
    this.courses = this.service.getCourses();
    this.countries = this.service.getCountry();
    this.employees = this.service.getEmpdetails();
  }
  ngOnInit() {}
}
