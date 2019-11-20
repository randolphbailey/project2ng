import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/Post';
import { JradUser } from 'src/app/models/JradUser';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    return this.http.post<Post>(
      "http://api.jradrecipes.club/post/create",
      post
    );
    }

  getAllPosts() {
    return this.http.get<Post[]>("http://api.jradrecipes.club/post/all");
  }

  getPostById(id: number) {
    return this.http.get<Post>(
      "http://api.jradrecipes.club/post/getById/" + id
    );
  }

  getPostByUser(jraduser: string) {
    return this.http.get<Post[]>("http://api.jradrecipes.club/post/getByUser/" + jraduser);
  }


}
