import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { deliveredOrdersResponse } from '../modules/deliveredOrdersRes';

@Injectable({
  providedIn: 'root'
})
export class DeliveredOrdersService {

  constructor(private http: HttpClient) { }

  getdeliveredBuyingOrders(){
    return this.http.get<deliveredOrdersResponse>(environment.APIURl +'/dashboard/deliveredBuyingOrders')
  }

  getdeliveredExchangingOrders(){
    return this.http.get<deliveredOrdersResponse>(environment.APIURl +'/dashboard/deliveredExchangingOrders')
  }
}
