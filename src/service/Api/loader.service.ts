import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading : Subject<boolean>
  constructor() {
    this.isLoading = new Subject<boolean>();
   }

   GetLoader(){
    return this.isLoading;
   }

   ShowLoading(){
    this.isLoading.next(true);
   }

   HideLoading(){
    this.isLoading.next(false);
   }
}
