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
  postTitle: string;
  postContent: string;

  constructor(
    private modalService: NgbModal,
    private globalvariableservice: GlobalVariablesService,
    private ps: PostService
  ) {}

  ngOnInit() {}
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

  publishPost() {
    console.log("publishPost called");
    this.status = new Status(4, "Public");
    console.log(this.status);
    this.role = new Role(3, "User");
    console.log(this.role);

    this.jraduser = this.globalvariableservice.getCurrentUser();
    console.log(this.jraduser);

    this.post = new Post(
      0,
      this.postTitle,
      this.postContent,
      0,
      0,
      this.jraduser,
      this.status
    );

    console.log(this.post);
    this.ps.createPost(this.post).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
