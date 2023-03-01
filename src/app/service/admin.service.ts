import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { datares, Iadmin } from '../modules/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin!:Iadmin
  constructor(private http :HttpClient ,) { }
  login(admin:Iadmin){
    return this.http.post<datares>(environment.APIURl + '/dashboard/login',admin)
  }
addadmin(admin:Iadmin){
  return this.http.post<datares>(environment.APIURl +'/dashboard/register',admin)
}

isLogged(): boolean {
  if (localStorage.getItem("token") == null) return false
  else return true
}
}
