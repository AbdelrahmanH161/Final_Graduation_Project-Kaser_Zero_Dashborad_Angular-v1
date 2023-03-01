import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from '../modules/category';
import { IDashInfo } from '../modules/dashInfo';
import { UserRegister } from '../modules/userRegister';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http:HttpClient) {
   }

   getAll(){
    return this.http.get<IDashInfo>(environment.APIURl + "/dashboard/dashboard");
   }

   getUser(id:number){
    return this.http.get<any>(environment.APIURl + `dashboard/user/${id}`);
   }

   addUser(user:UserRegister){
    return this.http.post(environment.APIURl +'/dashboard/addUser',user);
   }

   addCategory(category:ICategory){
    return this.http.post(environment.APIURl +'/dashboard/addCategory',category);
   }

  //  getProduct(){
  //   return this.http.get<IDashInfo>(environment.APIURl + "/product/:id");
  //  }
}
