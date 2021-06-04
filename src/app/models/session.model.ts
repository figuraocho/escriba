export class Session {
  constructor(
    public Id: string = "",
    public idCampaign: number = -1,
    public date: Date = new Date(),
    public description: string = ''
  ) {}
}