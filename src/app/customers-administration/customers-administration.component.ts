import { Component, OnInit } from '@angular/core';
import {Customer} from "../types";
import {CustomersService} from "../customers.service";

@Component({
  selector: 'app-customers-administration',
  templateUrl: './customers-administration.component.html',
  styleUrls: ['./customers-administration.component.css']
})
export class CustomersAdministrationComponent implements OnInit {

  selectedCustomer: Customer;

  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
  }

  selectCustomer(id: string) {
    if (id) {
      this.customersService.getCustomerById(id)
        .then((customer: Customer) => {
          this.selectedCustomer = customer
          // birthday needs to be converted into Date object again
          this.selectedCustomer.birthday = new Date(customer.birthday);
        })
    } else {
      this.selectedCustomer = new Customer();
    }

  }
}
