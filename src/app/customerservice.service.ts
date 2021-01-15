import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }

  getCustomersLarge() {
    return this.http.get<any>('assets/customers-large.json')
        .toPromise()
        .then(res => <Customer[]>res.data)
        .then(data => { return data; });
}
}
