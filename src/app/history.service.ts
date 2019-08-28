import { Injectable } from "@angular/core";
import { History } from "./history";

@Injectable({
  providedIn: "root"
})

export class HistoryService {
  private lastId: number = 0;
  private histories: History[] = [];

  constructor() {}

  getDates = (): string => {
    let today: Date = new Date();
    let date: string= today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`;
    let month: string = today.getMonth() < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()}+1`;
    return `${date}.${month}.${today.getFullYear()}`;
  }

  addToHistory = (information: History): HistoryService => {
    if(!information.id){
      information.id = ++this.lastId;
      information.timeStamp = this.getDates();
    }
    this.histories.push(information);
    return this;
  };

  getAllHistory = (): History[] => this.histories;

  removeHistory = (id: number): HistoryService => {
    this.histories = this.histories.filter(history => history.id !== id);
    return this;
  };

}
