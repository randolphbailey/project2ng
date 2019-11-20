import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from "src/app/models/JradUser";
import { Post } from "src/app/models/Post";
import { PostService } from "src/app/services/post/post.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JradUserService } from "src/app/services/jradUser/jrad-user.service";
import { Comment } from "src/app/models/Comment";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  commentForm: FormGroup;
  user: JradUser;
  allpost: Post[] = [];
  currentuser: string;
  commenter: JradUser;
  comment: Comment;
  post;
  constructor(
    private globalvariableService: GlobalVariablesService,
    private ps: PostService,
    private fb: FormBuilder,
    private jr: JradUserService
  ) {}

  ngOnInit() {
    this.user = this.globalvariableService.getCurrentUser();
    // this.currentuser = this.user.username;
    console.log(this.user);
    this.ps.getAllPosts().subscribe(
      data => {
        this.allpost = [];
        this.allpost = data;
        console.log(this.allpost);
      },
      error => console.log(error)
    );
    this.commentForm = this.fb.group({
      content: ["", Validators.maxLength(300)]
    });

    this.jr.getUserByUsername(this.user.username).subscribe(data => {
      this.commenter = data;
      console.log(this.commenter);
    });
  }
}
