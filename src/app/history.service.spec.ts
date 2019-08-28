/* tslint: dasable: no-unused-variable*/
import { TestBed, async, inject } from "@angular/core/testing";
import { HistoryService } from "./history.service";
import { History } from "./history";

describe("HistoryService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HistoryService]
    })
  );

  it("should create", inject([HistoryService], (service: HistoryService) => {
    expect(service).toBeTruthy();
  }));

  describe("#getAllHistory()", () => {
    it("should return an empty array by default", inject(
      [HistoryService],
      (service: HistoryService) => {
        expect(service.getAllHistory()).toEqual([]);
      }
    ));
    it("should return all histories", inject(
      [HistoryService],
      (service: HistoryService) => {
        let history1 = new History({
          sender_card1: "1111",
          sender_card2: "1111",
          sender_card3: "1111",
          sender_card4: "1111",
          sender_name: "aaaa",
          sender_card_month: 1,
          sender_card_year: 12,
          receiver_card1: "2222",
          receiver_card2: "2222",
          receiver_card3: "2222",
          receiver_card4: "2222",
          sum: 12345
        });
        let history2 = new History({
          sender_card1: "3333",
          sender_card2: "3333",
          sender_card3: "3333",
          sender_card4: "3333",
          sender_name: "bbbb",
          sender_card_month: 5,
          sender_card_year: 7,
          receiver_card1: "4444",
          receiver_card2: "4444",
          receiver_card3: "4444",
          receiver_card4: "4444",
          sum: 54321
        });
        service.addToHistory(history1);
        service.addToHistory(history2);
        expect(service.getAllHistory()).toEqual([history1, history2]);
      }
    ));
    it("should add id", inject([HistoryService], (service: HistoryService) => {
      let history1 = new History({
        sender_card1: "1111",
        sender_card2: "1111",
        sender_card3: "1111",
        sender_card4: "1111",
        sender_name: "aaaa",
        sender_card_month: 1,
        sender_card_year: 12,
        receiver_card1: "2222",
        receiver_card2: "2222",
        receiver_card3: "2222",
        receiver_card4: "2222",
        sum: 12345
      });
      service.addToHistory(history1);
      expect(service.getAllHistory()[0].id).toEqual(1);
    }));
    it("should add timeStamp", inject([HistoryService], (service: HistoryService) => {
      let history1 = new History({
        sender_card1: "1111",
        sender_card2: "1111",
        sender_card3: "1111",
        sender_card4: "1111",
        sender_name: "aaaa",
        sender_card_month: 1,
        sender_card_year: 12,
        receiver_card1: "2222",
        receiver_card2: "2222",
        receiver_card3: "2222",
        receiver_card4: "2222",
        sum: 12345
      });
      service.addToHistory(history1);
      expect(service.getAllHistory()[0].timeStamp).toEqual(service.getDates());
    }));
  });
  describe("#removeHistory()", ()=>{
    it('should remove history by id', inject([HistoryService], (service: HistoryService)=>{
      let history1 = new History({
        sender_card1: "1111",
        sender_card2: "1111",
        sender_card3: "1111",
        sender_card4: "1111",
        sender_name: "aaaa",
        sender_card_month: 1,
        sender_card_year: 12,
        receiver_card1: "2222",
        receiver_card2: "2222",
        receiver_card3: "2222",
        receiver_card4: "2222",
        sum: 12345
      });
      let history2 = new History({
        sender_card1: "3333",
        sender_card2: "3333",
        sender_card3: "3333",
        sender_card4: "3333",
        sender_name: "bbbb",
        sender_card_month: 5,
        sender_card_year: 7,
        receiver_card1: "4444",
        receiver_card2: "4444",
        receiver_card3: "4444",
        receiver_card4: "4444",
        sum: 54321
      });
      service.addToHistory(history1);
      service.addToHistory(history2);
      service.removeHistory(1);
      expect(service.getAllHistory()).toEqual([history2])
    }))
  })
});
