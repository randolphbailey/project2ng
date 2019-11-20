import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { JradUserService } from "src/app/services/jradUser/jrad-user.service";
import { GlobalVariablesService } from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from "src/app/models/JradUser";
import { Router, ActivatedRoute } from "@angular/router";
import { Role } from "src/app/models/Role";
import { RoleService } from "src/app/services/role/role.service";
import { ValidationService } from "src/app/components/register/validation.service";
import { LoginvalidationService } from "./loginvalidation.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUser: JradUser;
  userRole: Role;
  loggedUser: JradUser;
  show: Boolean;
  loggedusername: string;
  loggedpassword: string;
  loggedrole: string;
  loggedemail: string;
  invalid: string;

  constructor(
    private fb: FormBuilder,
    private jraduserService: JradUserService,
    private globalvariableService: GlobalVariablesService,
    public router: Router,
    private rs: RoleService
  ) {
    this.invalid =
      "This login is invalid, please put in correct credentials and try again.";
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.rs.getRoleByRole("User").subscribe(
      // change to get by id after admin/moderator views are there
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
      this.loginForm.value.email,
      "test",
      "test",
      0,
      this.userRole
    );

    if (this.loginForm.valid) {
      this.jraduserService.loginjradUser(this.currentUser).subscribe(data => {
        this.loggedUser = data;
        this.globalvariableService.setCurentUser(this.loggedUser);
        this.loggedusername = this.loggedUser.username; //had to this or it would yell at me for doing this.loggedUser.username etc later
        this.loggedpassword = this.loggedUser.password;
        this.loggedrole = this.loggedUser.role.role;
        this.loggedemail = this.loggedUser.email;
        console.log(this.loggedusername);
      });
    }

    if (this.loggedusername !== "invalid") {
      if (this.loggedrole === "Administrator") {
        this.router.navigateByUrl("/admin");
      }
      if (this.loggedrole === "Moderator") {
        this.router.navigateByUrl("/mod");
      }
      if (this.loggedrole === "User") {
        this.router.navigateByUrl("/newpost");
      }
    } else {
      this.show = true;
    }
  }
}
