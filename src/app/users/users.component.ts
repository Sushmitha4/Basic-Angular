import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [
    {
      user_name: "Abcd",
      user_photo:
        "https://image.shutterstock.com/image-photo/close-photo-beautiful-her-she-260nw-1359267752.jpg",
      user_id: 1,
      user_designation: "Fullstack developer",
      user_doj: "20/12/2019",
      user_education: "B.E",
      user_bod: "12/12/1997",
      user_companyname: "Test yantra",
      user_salary: 25000,
      user_location: "Bangalore"
    },

    {
      user_name: "Efgh",
      user_photo:
        "https://image.shutterstock.com/image-photo/closeup-photo-amazing-guy-holding-260nw-1484315705.jpg",
      user_id: 2,
      user_designation: "Fullstack developer",
      user_doj: "20/12/2019",
      user_education: "B.E",
      user_bod: "12/12/1997",
      user_companyname: "Qspider",
      user_salary: 25000,
      user_location: "Bangalore"
    },

    {
      user_name: "Hijk",
      user_photo:
        "https://image.shutterstock.com/image-photo/back-view-trendy-dressed-female-260nw-1459529555.jpg",
      user_id: 3,
      user_designation: "Fullstack developer",
      user_doj: new Date("20/12/2019"),
      user_education: "B.E",
      user_bod: "12/12/1997",
      user_companyname: "Jspider",
      user_salary: 25000,
      user_location: "Bangalore"
    },

    {
      user_name: "Lmno",
      user_photo:
        "https://image.shutterstock.com/image-photo/woman-using-dating-app-swiping-260nw-1067926880.jpg",
      user_id: 4,
      user_designation: "Web developer",
      user_doj: "20/12/2019",
      user_education: "B.E",
      user_bod: "12/12/1997",
      user_companyname: "Test yantra",
      user_salary: 25000,
      user_location: "Bangalore"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
