import { Component, OnInit, Host, Optional } from "@angular/core";
import { HistoryService } from "../history.service";
import { History } from "../history";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  private historyService: HistoryService;
  constructor(@Host() @Optional() historyService: HistoryService) {
    this.historyService = historyService;
  }
  ngOnInit() {}
  getHistory = (): History[] => this.historyService.getAllHistory();
  removeHistory = id => this.historyService.removeHistory(id);
  addHistory = (history: History): void => {
    let newHistory = new History({
      ...history,
      timeStamp: this.historyService.getDates(),
      id: ""
    });
    this.historyService.addToHistory(newHistory);
  };
}
