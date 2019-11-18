import { Component, OnInit } from "@angular/core";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(    private globalvariableService: GlobalVariablesService,
    ) {

    }

  ngOnInit() {
    console.log(this.globalvariableService.getCurrentUser());
  }


}
