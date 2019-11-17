import { Injectable } from "@angular/core";
import { JradUser } from "src/app/models/JradUser";

@Injectable({
  providedIn: "root"
})
export class GlobalVariablesService {
  constructor(private currentUser: JradUser) {}

  getCurrentUser() {
    return this.currentUser;
  }

  setCurentUser(inboundUser: JradUser) {
    this.currentUser = inboundUser;
  }
}
