import { JradUser } from "./JradUser";
import { Post } from "./Post";

export class Comment {
  constructor(
    public id: number,
    public content: string,
    public created: number,
    public jradUser: JradUser,
    public post: Post
  ) {}
}
