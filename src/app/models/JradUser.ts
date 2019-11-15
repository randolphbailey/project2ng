import { Role } from "./Role";

export class JradUser {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public created: number,
    public role: Role
  ) {}
}
