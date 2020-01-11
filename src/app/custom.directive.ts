import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[anu]" //Directive name
})
export class CustomDirective {
  //access with DOM //Dependency injection
  constructor(el: ElementRef) {
    el.nativeElement.style.background = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.borderRadius = "10px";
    el.nativeElement.style.border = "1px solid #111";
    el.nativeElement.style.margin = "1px";
  }

  //Method binding
  /*@HostListener("click") event() {
    alert("events are coming...");
  }*/

  @HostBinding("style.background") background: string = "red";
  @HostBinding("style.transform") transform: string;
  @HostBinding("style.transition") transition: string;

  @HostListener("mouseenter") mouseenter() {
    console.log("mouse entered 😃");
    this.background = "green";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }

  @HostListener("mouseleave") mouseleave() {
    console.log("mouse leave here 😇");
    this.background = "orange";
    this.transform = "rotate(360deg)";
    this.transition = "all 5s";
  }
}
