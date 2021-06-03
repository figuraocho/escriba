export class Campaign {
  constructor(
    public id: string = "",
    public name: string = '',
    public date: Date = new Date(),
    public image: string = '',
    public description: string = ''
  ) {}
}
