import { Component } from "@angular/core";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { JradUser } from 'src/app/models/JradUser';

@Component({
  selector: "app-newpost",
  templateUrl: "./newpost.component.html"
})
export class NewPostComponent {
  closeResult: string;
  user: JradUser;

  constructor(private modalService: NgbModal, private globalvariableService: GlobalVariablesService) {}

  ngOnInit() {
    this.user = this.globalvariableService.getCurrentUser();

  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  processFile() {
    return false;
  }
}
