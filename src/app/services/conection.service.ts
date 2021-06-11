import {
  HttpClient
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConectionService {
  constructor(private http: HttpClient) {}

  response: any;
  public loading: boolean = false;

  getData() {
    this.loading = true;
    this.http.get("https://scriba-72f2f-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json").subscribe(data => {
      this.response = data;
      this.loading = false;
    });
  }

  setData(data: any) {
    this.http.post("https://scriba-72f2f-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json", data);
  }
}
