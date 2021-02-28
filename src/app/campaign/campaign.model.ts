export class Campaign {
  
  constructor(
    public name: string,
    public id: number = -1,
    public setting: string = "",
    public system: string = "",
    public description: string = ""
  ) {}
}