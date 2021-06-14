import {
  HttpClient
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
import {
  map
}
from "rxjs/operators"

import {
  CampaignsService
} from "./campaings.service";
import {
  SessionsService
} from "./sessions.service";
import {
  Campaign
} from "../models/campaign.model";
import {
  Session
} from "../models/session.model";

type DBSession = {
  id: string,
  date: Date,
  description: string
}

type DBStructure = {
  name: string,
  date: Date,
  image: string,
  description: string,
  sessions: DBSession[] | undefined;
} | undefined;


@Injectable({
  providedIn: "root"
})
export class ConectionService {

  constructor(private http: HttpClient, private campaignsService: CampaignsService, private sessionsService: SessionsService) {}

  public loading: boolean = false;
  dBStructure: DBStructure;

  saveData() {
    let output: DBStructure[] = this.dataToDatabase();
    this.loading = true; // todo no funciona, hay que trabajar con varias actualizaciones asincronas
    output.forEach(campaign => {
      this.http.post("https://scriba-72f2f-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json", campaign).subscribe(() => this.loading = false);
      console.log(campaign);
    })
  }

  loadData() {
    let campaigns: Campaign[] = [];
    let sessions: Session[] = [];
    this.loading = true;
    this.http
    .get("https://scriba-72f2f-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json")
    .pipe(map(responseData => {
      let dataArray = [];
      let key: keyof typeof responseData;
      for (key in responseData){
        dataArray.push({...responseData[key], id:key});
      }
      return dataArray;
      }))
    .subscribe(data => {
      this.databaseToData(data);
    })
    
  }

  dataToDatabase() {
    let formatedData: DBStructure[] = [];
    const campaigns = this.campaignsService.getCampaigns();
    const sessions = this.sessionsService.getAllSessions();
    campaigns.forEach((campaign: Campaign, i: number) => {
      let sessionList: Session[] = [];
      sessions.forEach(session => {
        if (session.idCampaign === i) {
          sessionList.push(session);
        }
      });
      let actualCampaign: DBStructure = {
        name: campaign.name,
        date: campaign.date,
        image: campaign.image,
        description: campaign.description,
        sessions: sessionList
      };
      formatedData.push(actualCampaign);
    });
    return formatedData;
  }

  databaseToData(data:any) {
    console.log(data);
  }
}
