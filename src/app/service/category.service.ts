import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { category, pro, user } from '../modules/pendingAdd';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getcategoryname(){
    return this.http.get<category[]>(environment.APIURl+'/dashboard/categories')
  }

  getpro(id:string){
      return this.http.get<pro[]>(environment.APIURl+'/dashboard/categories/'+id)
  }

  getuser(id:string){
    return this.http.get<user>(environment.APIURl+'/dashboard/finduser/'+id)
  }
}
