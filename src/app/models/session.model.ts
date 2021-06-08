export class Session {
  constructor(
    public id: string = "",
    public idCampaign: number = -1,
    public date: Date = new Date(),
    public description: string = ''
  ) {}
}