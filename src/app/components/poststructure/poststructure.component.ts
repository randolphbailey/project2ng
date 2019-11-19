import { Component, OnInit } from '@angular/core';
import { JradUserService } from "src/app/services/jradUser/jrad-user.service";
import {GlobalVariablesService} from "src/app/services/globalVariables/global-variables.service";
import { JradUser } from 'src/app/models/JradUser';
import { PostService } from "src/app/services/post/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-poststructure',
  templateUrl: './poststructure.component.html',
  styleUrls: ['./poststructure.component.css']
})
export class PoststructureComponent implements OnInit {

  constructor(private ps: PostService) { }

  post: Post;

  ngOnInit() {
    this.ps.getPostById(1).subscribe(data => this.post = data, err => console.log(err));
  }
}
