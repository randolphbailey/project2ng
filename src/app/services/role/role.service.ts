import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Role } from "src/app/models/Role";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getAllRoles() {
    return this.http.get<Role[]>("http://api.jradrecipes.club/role/all");
  }

  getRoleByRole(role: String) {
    return this.http.get<Role>(
      "http://api.jradrecipes.club/role/getByRole/" + role
    );
  }
}
