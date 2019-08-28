export class History {
  sender_card1: string;
  sender_card2: string;
  sender_card3: string;
  sender_card4: string;
  sender_name: string;
  sender_card_month: number;
  sender_card_year: number;
  receiver_card1: string;
  receiver_card2: string;
  receiver_card3: string;
  receiver_card4: string;
  sum: number;
  id: number;
  timeStamp: string;
  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}
