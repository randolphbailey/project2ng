import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Status } from "../../models/Status";

@Injectable({
  providedIn: "root"
})
export class StatusService {
  constructor(private http: HttpClient) {}

  getAllStatuses() {
    return this.http.get<Status[]>("http://api.jradrecipes.club/status/all");
  }

  getStatusById(id: number) {
    return this.http.get<Status>("http://api.jradrecipes.club/status/id/" + id);
  }

  getStatusByStatus(status: string) {
    return this.http.get<Status>(
      "http://api.jradrecipes.club/status/status/" + status
    );
  }

  addStatus(status: Status) {
    return this.http.post<Status>(
      "http://api.jradrecipes.club/status/add",
      status
    );
  }
}
