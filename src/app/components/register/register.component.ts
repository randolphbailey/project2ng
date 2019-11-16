import { Component, OnInit } from '@angular/core';
import {JradUser} from 'src/app/models/JradUser';
import {JradUserService} from 'src/app/services/jradUser/jrad-user.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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

  // registerForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   username: new FormControl(''),
  //   password: new FormControl('')
  //     });

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
    });
  }


  ngOnInit() {

  }
     onSubmit() {
      console.log(this.registerForm);

     }


  }


