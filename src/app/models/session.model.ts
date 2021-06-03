export class Session {
  constructor(
    public id: string = "",
    public idCampaign: string = "",
    public date: Date = new Date(),
    public description: string = ''
  ) {}
}