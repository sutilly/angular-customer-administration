import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./types";

const CUSTOMERS_RESSOURCE_URL = "https://ancient-reef-45425.herokuapp.com/api/"

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Promise<Customer[]> {
      return this.httpClient.get<Customer[]>(CUSTOMERS_RESSOURCE_URL).toPromise()
  }

  getCustomerById(customerId: string): Promise<Customer> {
    return this.httpClient.get<Customer>(CUSTOMERS_RESSOURCE_URL + '/' + customerId).toPromise()
  }

  create(customer: Customer): Promise<any> {
    return this.httpClient.post(CUSTOMERS_RESSOURCE_URL, customer).toPromise()
  }

  update(customer: Customer): Promise<any> {
    return this.httpClient.patch(CUSTOMERS_RESSOURCE_URL + '/' + customer._id, customer).toPromise()
  }

  delete(customerId: string): Promise<any> {
    return this.httpClient.delete(CUSTOMERS_RESSOURCE_URL + '/' + customerId).toPromise()
  }

}
