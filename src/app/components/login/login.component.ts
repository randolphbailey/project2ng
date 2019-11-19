import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder
} from "@angular/forms";
import { JradUserService } from "src/app/services/jradUser/jrad-user.service";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from 'src/app/models/JradUser';
import { Router, ActivatedRoute} from '@angular/router';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role/role.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  currentUser: JradUser;
  userRole: Role;
  loggedUser: JradUser;


  constructor(private fb: FormBuilder,
              private jraduserService: JradUserService,
              private globalvariableService: GlobalVariablesService,
              public router: Router,
              private rs: RoleService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],


    });
    this.rs.getRoleByRole("User").subscribe(// change to get by id after admin/moderator views are there
      data => {
        this.userRole = data;
        console.log(this.userRole);
      },
      err => console.log("error")
    );


  }
  onSubmit() {
    this.currentUser = new JradUser(
      0,
      this.loginForm.value.username,
      this.loginForm.value.password,
      "test",
      "test",
      "test",
      0,
      this.userRole
    );
    console.log(this.currentUser);
    if (this.loginForm.valid) {
          this.jraduserService.loginjradUser(this.currentUser).subscribe(
            data => {
              this.loggedUser = data;
              console.log(this.loggedUser);
            }
          ); }
    if (this.loggedUser != null ) {
      if (this.loggedUser.role.role === "Administrator") {
          this.globalvariableService.setCurentUser(this.currentUser);
          this.router.navigateByUrl('/admin');

      // tslint:disable-next-line: align
      } if (this.loggedUser.role.role === "Moderator") {
        this.globalvariableService.setCurentUser(this.currentUser);
        this.router.navigateByUrl('/mod');
      }
      if (this.loggedUser.role.role === "User") {
          this.globalvariableService.setCurentUser(this.currentUser);
          this.router.navigateByUrl('/newpost');
        }
          } else {
          // possible landing page or validation service, making it a stretch goal for now
          console.log("Login Unsuccessful");
          }

}
}
