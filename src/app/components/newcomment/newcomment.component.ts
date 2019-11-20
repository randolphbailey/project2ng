import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Post } from "src/app/models/Post";
import { Status } from "src/app/models/Status";
import { GlobalVariablesService } from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from "src/app/models/JradUser";
import { CommentService } from "src/app/services/comment/comment.service";
import { Comment } from "src/app/models/Comment";

@Component({
  selector: 'app-newcomment',
  templateUrl: './newcomment.component.html',
  styleUrls: ['./newcomment.component.css']
})
export class NewcommentComponent implements OnInit {
  closeResult: string;
  commentId: number;
  jraduser: JradUser;
  post: Post;
  commentContent: string;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  publishComment() {

    console.log("publishComment called");

    console.log(this.post);

    this.jraduser = this.globalvariableservice.getCurrentUser();
    console.log(this.jraduser);

    this.comment = new Comment(0,
      this.commentContent,
      0,
      this.jraduser,
      this.post);

    console.log(this.comment);
    this.pc.createComment(this.comment).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

}
