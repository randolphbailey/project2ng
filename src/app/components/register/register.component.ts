import { Component, OnInit } from '@angular/core';
import {JradUser} from 'src/app/models/JradUser';
import {JradUserService} from 'src/app/services/jradUser/jrad-user.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
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
      firstname: [''],
      lastname: [''],
      email: [''],
      username: [''],
      password: [''],
    });
  }


  ngOnInit() {}
     onSubmit() {
      console.warn(this.registerForm.value);

     }


  }


