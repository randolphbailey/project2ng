import { JradUser } from "./JradUser";
import { Status } from "./Status";

export class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public created: number,
    public lastModified: number,
    public jradUser: JradUser,
    public status: Status
  ) {}
}
