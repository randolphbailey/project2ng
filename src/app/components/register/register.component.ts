import { Component, OnInit } from '@angular/core';
import {JradUser} from 'src/app/models/JradUser';
import {JradUserService} from 'src/app/services/jradUser/jrad-user.service';
import { Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {ValidationService} from 'src/app/components/register/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  jradusers: any;
 

  // registerForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   username: new FormControl(''),
  //   password: new FormControl('')
  //     });

  constructor(private fb: FormBuilder, private jraduserService: JradUserService) {
    
  }


  ngOnInit() {
    this.registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, ValidationService.emailValidator]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, ValidationService.passwordValidator]],
  });
  }
     onSubmit() {

     if (this.registerForm.valid) {
     console.log( "form submitted");
     this.jraduserService
    .addjradUser(this.registerForm.value)
    .subscribe();
     } else {
       console.log("Your form was not submitted, please try again");
     }

      }
      }






