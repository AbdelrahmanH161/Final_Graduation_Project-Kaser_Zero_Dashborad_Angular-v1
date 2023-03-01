import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AddAdsService {

  private httpoptions={};

  constructor(private http: HttpClient, private router: Router,private httpclient:HttpClient) {
   
  
    this.httpoptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'responseType': 'text',
        observe:'response'
      }),
    }
  }
  getGategory():Observable<any>{
      
    return  this.http.get<any>(`${environment.APIURl}/product/categories`)
   
      }
      addAds(userEmail:any,data:any):Observable<any>{
      
        return  this.http.post<any>(`${environment.APIURl}/dashboard/addProduct/${userEmail}`,data)
        
       
          }
}
