import {
  HttpClient
} from "@angular/common/http";
import {
  Injectable,
  OnInit
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

interface DBSession {
  date: Date;
  description: string;
}

interface DBStructure {
  name: string,
    date: Date,
    image: string,
    description: string,
    sessions: DBSession[] | undefined;
};

interface intermediateData extends DBStructure {
  id: string;
}


@Injectable({
  providedIn: "root"
})

export class ConectionService implements OnInit {

  dataFromDatabase: intermediateData[] = [];

  constructor(private http: HttpClient, private campaignsService: CampaignsService, private sessionsService: SessionsService) {
    this.loadData();
  }

  ngOnInit() {}

  public loading: boolean = false;
  dBStructure!: DBStructure;

  saveData() {
    let output: DBStructure[] = this.transformDataToDatabase();
    this.loading = true; // ToDo no funciona, hay que trabajar con varias actualizaciones asincronas
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
      .get < DBStructure[] > ("https://scriba-72f2f-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json")
      .pipe(map(responseData => {
        let dataArray: intermediateData[] = [];
        for (let key in responseData) {
          dataArray.push({
            ...responseData[key],
            id: key
          });
        }
        return dataArray;
      }))
      .subscribe((data) => {
        if (data !== undefined) {
          this.dataFromDatabase.push(...data);
        }
      })
  }

  getCampaigns(): Campaign[] {
    let campaignList: Campaign[] = [];
    this.dataFromDatabase.forEach(data => {
      campaignList.push(new Campaign(data.id, data.name, data.date, data.image, data.description));
    })
    console.log(campaignList);
    return campaignList;
  }

  getSessions(): Session[] {
    let sessionList: Session[] = [];
    this.dataFromDatabase.forEach((data, index) => {
      let sessions: DBSession[] | undefined = data.sessions;
      if (sessions !== undefined) {
        sessions.forEach((session, index2) => {
          sessionList.push(new Session(index + "-" + index2, index, session.date, session.description));
        })
      }
    })
    console.log(sessionList);
    return sessionList;
  }

  transformDataToDatabase() {
    let formatedData: DBStructure[] = [];
    const campaigns = this.campaignsService.getCampaigns();
    const sessions = this.sessionsService.getAllSessions();
    campaigns.forEach((campaign: Campaign, i: number) => {
      let sessionsInCampaign: Session[] = [];
      sessions.forEach(session => {
        if (session.idCampaign === i) {
          sessionsInCampaign.push(session);
        }
      });
      let actualCampaign: DBStructure = {
        name: campaign.name,
        date: campaign.date,
        image: campaign.image,
        description: campaign.description,
        sessions: sessionsInCampaign
      };
      formatedData.push(actualCampaign);
    });
    return formatedData;
  }
}
