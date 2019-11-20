import { Component } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Post } from "src/app/models/Post";
import { Status } from "src/app/models/Status";
import { GlobalVariablesService } from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from "src/app/models/JradUser";
import { PostService } from "src/app/services/post/post.service";
import { Role } from "src/app/models/Role";

@Component({
  selector: "app-newpost",
  templateUrl: "./newpost.component.html"
})
export class NewPostComponent {
  closeResult: string;
  jraduser: JradUser;
  status: Status;
  post: Post;
  clickString: string;
  role: Role;

  constructor(
    private modalService: NgbModal,
    private globalvariableService: GlobalVariablesService,
    private ps: PostService
  ) {}

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

  publishPost(postcontent, posttitle) {
    console.log(postcontent.value);
    console.log(posttitle.value);

    this.status = new Status(4, "Public");
    this.role = new Role(3, "User");
    this.jraduser = new JradUser(
      0,
      "test",
      "test",
      "test",
      "test",
      "test",
      0,
      this.role
    );

    this.post = new Post(
      0,
      posttitle,
      postcontent,
      0,
      0,
      this.jraduser,
      this.status
    );

    this.ps.createPost(this.post);
  }
}
