import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";

//import routerModule first
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { CustomDirective } from "./custom.directive";
import { HeaderComponent } from "./header/header.component";
import { Login1Component } from "./login1/login1.component";
import { ContactComponent } from "./contact/contact.component";
import { Contact1Component } from "./contact1/contact1.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./students/students.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { Login2Component } from "./login2/login2.component";
import { CoursesComponent } from "./courses/courses.component";
//Restfull API in angular
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from "./post/post.component";
import { Login3Component } from "./login3/login3.component";
import { AlbumComponent } from "./album/album.component";
import { PhotosComponent } from "./photos/photos.component";
import { CustomService } from "./services/custom.service";
import { ServiceexampleComponent } from "./serviceexample/serviceexample.component";
import { ChildComponent } from "./child/child.component";
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";
import { CustomPipe } from "./custom.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    HeaderComponent,
    Login1Component,
    ContactComponent,
    Contact1Component,
    StudentsComponent,
    FormBuilderComponent,
    Login2Component,
    CoursesComponent,
    PostComponent,
    Login3Component,
    AlbumComponent,
    PhotosComponent,
    ServiceexampleComponent,
    ChildComponent,
    PipeExampleComponent,
    CustomPipe
  ], //register in app.module.file
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "**", component: PagenotfoundComponent },
      { path: "post", component: PostComponent },
      { path: "album", component: AlbumComponent },
      { path: "photos", component: PhotosComponent }
    ]),
    HttpClientModule
  ], //module //all modules registered in imports array
  providers: [],
  bootstrap: [AppComponent] //To register root component use bootstrap array
})
export class AppModule {}
