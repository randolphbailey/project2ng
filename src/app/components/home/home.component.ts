import { Component, OnInit } from "@angular/core";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from 'src/app/models/JradUser';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  user: JradUser;
  constructor(    private globalvariableService: GlobalVariablesService,
    ) {

    }

  ngOnInit() {
    this.user = this.globalvariableService.getCurrentUser();



  }


}
