import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    StudentsList: new FormArray([])
  });

  get GetStudents() {
    return this.form.get("StudentsList") as FormArray;
  }

  addStudents(student) {
    //console.log(student.value);
    (this.GetStudents as FormArray).push(new FormControl(student.value));
  }

  removeStudents(student: FormControl) {
    let index = this.GetStudents.controls.indexOf(student);
    this.GetStudents.removeAt(index);
  }

  ngOnInit() {}
}
