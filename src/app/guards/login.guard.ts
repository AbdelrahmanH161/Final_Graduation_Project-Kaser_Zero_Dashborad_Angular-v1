import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation, ToastNotificationInitializer, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})


export class Loginguard implements CanActivate {
  constructor(private router:Router , private admin:AdminService){}
  toastNotification(Message:string) {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle('');
    newToastNotification.setMessage(Message);
    // Choose layout color type
    newToastNotification.setConfig({
    autoCloseDelay: 3000, // optional
    textPosition: 'center', // optional
    layoutType: DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
    progressBar: ToastProgressBarEnum.INCREASE, // INCREASE | DECREASE | NONE
    toastUserViewType: ToastUserViewTypeEnum.SIMPLE, // STANDARD | SIMPLE
    animationIn: AppearanceAnimation.BOUNCE_IN, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
    animationOut: DisappearanceAnimation.BOUNCE_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
     // TOP_LEFT | TOP_CENTER | TOP_RIGHT | TOP_FULL_WIDTH | BOTTOM_LEFT | BOTTOM_CENTER | BOTTOM_RIGHT | BOTTOM_FULL_WIDTH
    toastPosition: ToastPositionEnum.TOP_CENTER,
    });
    // Simply open the popup
    newToastNotification.openToastNotification$();
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(!this.admin.isLogged()){return true}
      else{
        this.toastNotification("You are already registered")
        this.router.navigate(["dashbord"])
        return false
      }
    
  }
}