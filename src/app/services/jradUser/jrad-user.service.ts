import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { JradUser } from "src/app/models/JradUser";
import { Observable, throwError } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class JradUserService {
  constructor(private http: HttpClient) {}

  jradUrl = "http://api.jradrecipes.club/jradUser/create";

  addjradUser(jraduser: JradUser) {
    return this.http.post<JradUser>(this.jradUrl, jraduser);
  }
}
