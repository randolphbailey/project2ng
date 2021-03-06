import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Comment } from "src/app/models/Comment";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getAllComments() {
    return this.http.get<Comment[]>("http://api.jradrecipes.club/comment/all");
  }

  getCommentsByPost(id: number) {
    return this.http.get<Comment[]>(
      "http://api.jradrecipes.club/comment/getByPost/" + id
    );
  }

  createComment(c: Comment) {
    return this.http.post<Comment>(
      "http://api.jradrecipes.club/comment/create",
      c
    );
  }
}
