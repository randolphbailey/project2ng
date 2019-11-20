import { Injectable } from "@angular/core";
import { JradUser } from "src/app/models/JradUser";
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: "root"
})
export class GlobalVariablesService {
  constructor() {}

  private currentUser: JradUser;
  private currentPost: Post;

  getCurrentUser() {
    return this.currentUser;
  }

  setCurentUser(inboundUser: JradUser) {
    this.currentUser = inboundUser;
  }

  getPost(){
    return this.currentPost;
  }

  setPost(inboundPost: Post){
    this.currentPost = inboundPost;
  }
}
