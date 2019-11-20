import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CommentService } from "src/app/services/comment/comment.service";
import { JradUser } from "src/app/models/JradUser";
import { GlobalVariablesService } from "src/app/services/globalVariables/global-variables.service";
import { Comment } from "src/app/models/Comment";
import { PostService } from "src/app/services/post/post.service";
import { Post } from "src/app/models/Post";

@Component({
  selector: "app-newcomment",
  templateUrl: "./newcomment.component.html",
  styleUrls: ["./newcomment.component.css"]
})
export class NewcommentComponent implements OnInit {
  @Input() associatedPost: Post;
  @Output() myEvent = new EventEmitter<string>();
  commentText: string;
  currentUser: JradUser;
  outgoing: Comment;

  constructor(
    private cs: CommentService,
    private gvs: GlobalVariablesService,
    private ps: PostService
  ) {}

  ngOnInit() {
    this.currentUser = this.gvs.getCurrentUser();
  }

  refreshParent() {
    this.myEvent.emit("refresh");
  }

  newComment() {
    this.outgoing = new Comment(
      0,
      this.commentText,
      0,
      this.currentUser,
      this.associatedPost
    );
    console.log(this.outgoing);
    this.cs.createComment(this.outgoing).subscribe(
      data => {
        console.log(data);
        this.refreshParent();
      },
      err => console.log(err)
    );
  }
}
