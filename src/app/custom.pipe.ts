import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "gender" //Pipe name just like uppercase
})
export class CustomPipe implements PipeTransform {
  transform(value: string, gender: string) {
    if (gender.toLowerCase() === "male") {
      return "MR " + value;
    } else {
      return "Miss " + value;
    }
  }
}
