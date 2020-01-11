import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe-example",
  templateUrl: "./pipe-example.component.html",
  styleUrls: ["./pipe-example.component.css"]
})
export class PipeExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  empDetails = [
    {
      emp_id: 1,
      emp_name: "Manu",
      emp_designation: "Web developer",
      emp_salary: 30000,
      emp_education: "BE",
      emp_percentage: 70,
      emp_doj: new Date("5/6/2016"),
      emp_gender: "Male",
      emp_location: "Bengaluru"
    },
    {
      emp_id: 2,
      emp_name: "Anu",
      emp_designation: "Full stack developer",
      emp_salary: 35000,
      emp_education: "BE",
      emp_percentage: 60,
      emp_doj: new Date("6/7/2017"),
      emp_gender: "Female",
      emp_location: "Bengaluru"
    },
    {
      emp_id: 3,
      emp_name: "Vijay",
      emp_designation: "Java developer",
      emp_salary: 30000,
      emp_education: "BE",
      emp_percentage: 70,
      emp_doj: new Date("8/6/2019"),
      emp_gender: "Male",
      emp_location: "Bengaluru"
    }
  ];
}
