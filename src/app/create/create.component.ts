import { Component, OnInit, Host, Optional } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { iteratee } from "../_heper";
import { HistoryService } from "../history.service";
import { History } from "../history";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  private checkoutForm: FormGroup;
  private submitted: boolean = false;
  private months = iteratee<number>({ start: 1, count: 13 });
  private years = iteratee<number>({
    start: 0,
    count: 9,
    option: new Date().getFullYear() - 1
  });
  private cardValidator = [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(4)
  ];
  private historyService: HistoryService;
  constructor(
    private formBuilder: FormBuilder,
    @Host() @Optional() historyService: HistoryService
  ) {
    this.historyService = historyService;
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      sender_card1: ["", this.cardValidator],
      sender_card2: ["", this.cardValidator],
      sender_card3: ["", this.cardValidator],
      sender_card4: ["", this.cardValidator],
      sender_name: ["", Validators.pattern("^[a-zA-Z]*$")],
      sender_card_month: ["", Validators.required],
      sender_card_year: ["", Validators.required],
      receiver_card1: ["", this.cardValidator],
      receiver_card2: ["", this.cardValidator],
      receiver_card3: ["", this.cardValidator],
      receiver_card4: ["", this.cardValidator],
      sum: ["", [Validators.required]]
    });
  }
  get f() {
    return this.checkoutForm.controls;
  }
  onSubmit = (value: History) => {
    let history = new History(value);
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    this.historyService.addToHistory(history);
    this.checkoutForm.reset();
    this.submitted = false;
  };
}
