import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  /*employee = [
    {
      emp_id: 1,
      emp_photo:
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
      emp_name: "manu",
      emp_designation: "Nodejs developer",
      emp_salary: 40000,
      emp_location: "Bangalore",
      emp_education: "BE",
      emp_doj: new Date("10/10/2015")
    },
    {
      emp_id: 2,
      emp_photo:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651__340.png",
      emp_name: "manu",
      emp_designation: "Nodejs developer",
      emp_salary: 40000,
      emp_location: "Bangalore",
      emp_education: "BE",
      emp_doj: new Date("10/10/2015")
    }
  ];*/

  /*ImageUrl =
    "https://cdn.pixabay.com/photo/2019/12/13/08/27/snow-4692469__340.jpg";

  isActive = true;

  colSpan = 2;*/

  /*click() {
    alert("Hello Angular here");
  }*/

  /*click(event) {
    console.log(event);
  }*/

  /*username(e) {
    console.log("username is ", e.target.value);
    /*if (e.keyCode === 13) {
      console.log("username is ", e.target.value);
    }
  }*/

  /*enterEmail(email) {
    console.log(email);
  }

  getUsername(username) {
    console.log(username);
  }*/

  //structural directive
  /*languages = [
    "java",
    "angular",
    "expressjs",
    "nodejs",
    "ruby",
    "react",
    "python"
  ];*/

  users = [
    {
      name: "Manu",
      photo:
        "https://cdn.pixabay.com/photo/2016/06/09/10/00/smartphone-1445489_960_720.jpg",
      age: 20,
      company: "Cognizant",
      salary: 25000,
      designation: "SQL developer",
      location: "Bangalore",
      gender: "Male",
      education: "BE"
    },
    {
      name: "Anu",
      photo:
        "https://image.shutterstock.com/image-photo/ux-designer-designing-designers-web-260nw-534684688.jpg",
      age: 22,
      company: "Testyantra",
      salary: 27000,
      designation: "Fullstack developer",
      location: "Bangalore",
      gender: "Female",
      education: "BE"
    },

    {
      name: "Vijay",
      photo:
        "https://cdn.pixabay.com/photo/2018/02/12/11/45/personal-3148100__340.jpg",
      age: 21,
      company: "Capgemini",
      salary: 24000,
      designation: "Web developer",
      location: "Bangalore",
      gender: "Male",
      education: "BE"
    },

    {
      name: "Ananya",
      photo:
        "https://cdn.pixabay.com/photo/2016/06/09/10/00/smartphone-1445487__340.jpg",
      age: 23,
      company: "Infosys",
      salary: 26000,
      designation: "Java developer",
      location: "Bangalore",
      gender: "Female",
      education: "BE"
    }
  ];

  addNewUser() {
    this.users.push({
      //or unshift method
      name: "Abcd",
      photo:
        "https://cdn.pixabay.com/photo/2016/06/09/10/00/smartphone-1445487__340.jpg",
      age: 23,
      company: "Infosys",
      salary: 26000,
      designation: "Java developer",
      location: "Bangalore",
      gender: "Male",
      education: "BE"
    });
  }

  removeUser(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {
    //Javascript way
    /*var input = document.querySelector("input");
    input.addEventListener("keyup", e => {
      console.log(e.target.value);
    });*/
  }
}
