import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "src/app/services/globalVariables/global-variables.service";
import { PostService } from "src/app/services/post/post.service";
import { JradUser } from "src/app/models/JradUser";
import { Post } from "src/app/models/Post";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  posts: Post[] = [];
  currentUser: JradUser;

  constructor(
    private globalvariableservice: GlobalVariablesService,
    private ps: PostService
  ) {}

  ngOnInit() {
    this.currentUser = this.globalvariableservice.getCurrentUser();
    this.ps.getAllPosts().subscribe(
      data => (this.posts = data),
      err => console.log(err)
    );
  }

  refresh() {
    this.ps.getAllPosts().subscribe(
      data => (this.posts = data),
      err => console.log(err)
    );
  }
}
