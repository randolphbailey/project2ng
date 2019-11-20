import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "src/app/models/Comment";
import { CommentService } from "src/app/services/comment/comment.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;
  comments: Comment[];

  constructor(private cs: CommentService) {}

  ngOnInit() {
    this.cs.getCommentsByPost(this.postId).subscribe(
      data => (this.comments = data),
      err => console.log(err)
    );
  }

  refresh() {
    this.cs.getCommentsByPost(this.postId).subscribe(
      data => (this.comments = data),
      err => console.log(err)
    );
  }
}
