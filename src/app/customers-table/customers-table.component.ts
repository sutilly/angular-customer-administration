import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Customer} from "../types";
import {CustomersService} from "../customers.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {

  customerData: Customer[];
  @Output() select = new EventEmitter<string>()

  constructor(
    private customersService: CustomersService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.customersService.getAllCustomers()
      .then((customers) => {
        this.customerData = customers
        console.log(customers)
      })
  }

  editCustomer(customerId) {
    this.select.emit(customerId)
  }

  confirmDeletion(customerId) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this customer?',
      accept: () => {
        this.deleteCustomer(customerId);
      }
    })
  }

  deleteCustomer(customerId: string) {
    this.customersService.delete(customerId).then(() => {
      this.refresh();
    })
  }

  addCustomer(): void {
    this.select.emit()
  }

}
