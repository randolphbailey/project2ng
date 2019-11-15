import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Status } from "../../models/Status";

@Injectable({
  providedIn: "root"
})
export class StatusService {
  constructor(private http: HttpClient) {}

  getAllStatuses() {
    return this.http.get<Status[]>("http://localhost:8085/status/all");
  }
}
