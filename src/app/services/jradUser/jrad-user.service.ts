import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JradUser} from 'src/app/models/JradUser';
@Injectable({
  providedIn: 'root'
})
export class JradUserService {


  constructor(private http:HttpClient) { }

  // setJradUser(){
  //   return this.http.post<JradUser[]>(
  //     ("api.jradrecipes.club/jradUser/create"));
  //   }
}
