import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../types";
import {CustomersService} from "../customers.service";

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {

  @Input() customer: Customer;
  @Output() apply = new EventEmitter()
  @Output() cancel = new EventEmitter()

  // Date range for Date Picker
  minDateValue = new  Date(1890-1-1)
  maxDateValue = new Date()

  constructor(
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
  }

  finishWithApply() {
    this.createOrUpdate()
      .then(() => {
        this.apply.emit();
        this.customer = null;
      })
  }

  finishWithCancel() {
    this.cancel.emit();
    this.customer = null;
  }

  createOrUpdate(): Promise<any> {
    if (this.customer._id) {
      return this.customersService.update(this.customer)
    } else {
      return this.customersService.create(this.customer)
    }
  }

}
