import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder
} from "@angular/forms";
import { JradUserService } from "src/app/services/jradUser/jrad-user.service";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from 'src/app/models/JradUser';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  currentUser: JradUser;
  constructor(private fb: FormBuilder,
              private jraduserService: JradUserService,
              private globalvariableService: GlobalVariablesService,
              public router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],


    });

  }
  onSubmit() {
    this.jraduserService.getUserByUsername(this.loginForm.value.username).subscribe(
      data => {
        this.currentUser = data;
        // console.log(this.currentUser);
        // console.log(this.currentUser.password);

        if (this.loginForm.valid) {
          if (this.currentUser.email === this.loginForm.value.email && this.currentUser.username === this.loginForm.value.username) {
          this.jraduserService.loginjradUser(this.currentUser);
          this.globalvariableService.setCurentUser(this.currentUser);
          this.router.navigateByUrl('/homepage');

          }
  }
});

}
  }
