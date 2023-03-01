import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/modules/users';
import { GetusersService } from 'src/app/service/getusers.service';
import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation, ToastNotificationInitializer, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchTerm = '';
  term = '';
  users:users[]=[]
  pageSize:number=10;
  pageIndex:number=1;
  totalItems:number=this.users.length ;
  constructor(private userserve :GetusersService) { }

ngOnInit(): void {
    this.getallusers()
  }
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
toastNotificationErr(Message:string) {
  const newToastNotification = new ToastNotificationInitializer();
  newToastNotification.setTitle('');
  newToastNotification.setMessage(Message);
  // Choose layout color type
  newToastNotification.setConfig({
  autoCloseDelay: 3000, // optional
  textPosition: 'center', // optional
  layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
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
getallusers(){
  this.userserve.getusers().subscribe((data)=>{
    console.log()
    this.users = data;
  })
}
deleteuser(user:users){
  if(user.orders.length == 0){
    this.userserve.deleteuser(user._id).subscribe((data)=>{
      if(data.success){
        this.toastNotification("Delete user success")
        this.getallusers()
      }else{
        this.toastNotificationErr("Delete user fail")
      }
    })
  }else{
    this.toastNotificationErr("You can't delete the user now because have order")
  }
}
pageChanged(val:any)
{
  this.pageIndex=val
  this.getallusers()
}
}
