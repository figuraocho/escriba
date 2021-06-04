export class Campaign {
  constructor(
    public DataBaseId: string = "",
    public name: string = '',
    public date: Date = new Date(),
    public image: string = '',
    public description: string = ''
  ) {}
}
