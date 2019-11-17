import { Component, OnInit } from "@angular/core";
import { JradUser } from "src/app/models/JradUser";
import { JradUserService } from "src/app/services/jradUser/jrad-user.service";
import { Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ValidationService } from "src/app/components/register/validation.service";
import { Role } from "src/app/models/Role";
import { RoleService } from "src/app/services/role/role.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  jradusers: any;
  newUser: JradUser;
  userRole: Role;

  constructor(
    private fb: FormBuilder,
    private jraduserService: JradUserService,
    private rs: RoleService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, ValidationService.emailValidator]],
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, ValidationService.passwordValidator]]
    });
    this.rs.getRoleByRole("User").subscribe(
      data => {
        this.userRole = data;
        console.log(this.userRole);
      },
      err => console.log("error")
    );
    console.log(this.registerForm);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.newUser = new JradUser(
        0,
        "test",
        "test",
        "Test",
        "test",
        "test",
        0,
        this.userRole
      );
      this.jraduserService.addjradUser(this.newUser).subscribe();
    } else {
      console.log("Your form was not submitted, please try again");
    }
  }
}
