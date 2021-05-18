export class CampaignModel {
  
  constructor(
    public name: string = '',
    public date: Date = new Date(),
    public image: string = '',
    public description: string = ''
  ) {}
}
