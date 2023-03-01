import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExchangingOrdersResponse } from '../modules/exchangingOrdersResponse';

@Injectable({
  providedIn: 'root'
})
export class ExchangingOrdersService {

  constructor(private http:HttpClient) {
  }

  getAll(){
   return this.http.get<ExchangingOrdersResponse>(environment.APIURl + "/dashboard/exchangingOrders");
  }

  setNewStatus(id:string,personCase:string,newStatus:string){
    return this.http.post(environment.APIURl +'/dashboard/exchangingOrders/'+id+'/updatestatus/'+personCase+'/'+newStatus,{responseType: 'text'});
  }
  
}
