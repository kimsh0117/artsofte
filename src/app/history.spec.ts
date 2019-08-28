import { History } from "./history";

describe("History", () => {
  it("should create an instance", () => {
    expect(new History()).toBeTruthy();
  });

  it("should accept values in the constructor", () => {
    let history = new History({
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
    expect(history.receiver_card1).toEqual("2222");
    expect(history.sender_name).toEqual("aaaa");
    expect(history.sender_card_month).toEqual(1);
  });
});
