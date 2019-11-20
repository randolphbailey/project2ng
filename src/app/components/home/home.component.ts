import { Component, OnInit } from "@angular/core";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from 'src/app/models/JradUser';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  user: JradUser;
  post: Post[] = [];
  currentuser: string;
  constructor(    private globalvariableService: GlobalVariablesService,
                  private ps: PostService) {

    }

  ngOnInit() {
    this.user = this.globalvariableService.getCurrentUser();
    this.currentuser = this.user.username;
    this.ps.getPostByUser("test").subscribe(
      data => {
      this.post = [];
      this.post = data;
      },
      error => console.log(error)
      );

  }


}
