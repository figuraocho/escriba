import { Session } from "./session/session.model";

export class Campaign {
  
  constructor(
    public name: string,
    public id: string = "",
    public setting: string = "",
    public system: string = "",
    public description: string = "",
    public sessions?: Session[]
  ) {}
}