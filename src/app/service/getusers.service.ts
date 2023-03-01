import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { datares } from '../modules/admin';
import { data } from '../modules/buyingOrdersResponse';
import { users } from '../modules/users';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http :HttpClient) { }

  getusers(){
    return this.http.get<users[]>(environment.APIURl +'/dashboard/users')
  }
  deleteuser(id:string){
    return this.http.delete<datares>(environment.APIURl +'/dashboard/deleteuser/'+id)
  }
}
