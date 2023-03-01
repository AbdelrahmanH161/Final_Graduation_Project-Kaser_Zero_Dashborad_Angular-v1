import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { datares } from '../modules/admin';
import { category, pendingAdd } from '../modules/pendingAdd';

@Injectable({
  providedIn: 'root'
})
export class PendingAddService {

  constructor(private http :HttpClient) { }

  getpindingAdd(){
    return this.http.post<pendingAdd>(environment.APIURl +'/dashboard/pendingAds',{})
  }

  deleteAdd(id:string):Observable<datares>{
    return this.http.post<datares>(environment.APIURl +'/dashboard/pendingAds/deleteAd/'+id,{})
  }
  acceptAdd(id:string):Observable<datares>{
    return this.http.post<datares>(environment.APIURl +'/dashboard/pendingAds/updatestatus/'+id,{})
  }
  getcatname(id:string){
    return this.http.get<category>(environment.APIURl +'/dashboard/details/'+id)
  }

}
