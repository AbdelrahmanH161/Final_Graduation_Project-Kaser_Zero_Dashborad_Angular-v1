import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PendingAddService } from 'src/app/service/pending-add.service';
import { pendingAdd,pro,user, userProduct} from '../../modules/pendingAdd';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { Router } from '@angular/router';
import { ConfirmBoxInitializer, ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import {
  ToastNotificationInitializer,
  DialogLayoutDisplay,
  ToastUserViewTypeEnum,
  ToastProgressBarEnum,
  DisappearanceAnimation,
  AppearanceAnimation,
  ToastPositionEnum,
} from '@costlydeveloper/ngx-awesome-popup';



@Component({
  selector: 'app-pending-ads',
  templateUrl: './pending-ads.component.html',
  styleUrls: ['./pending-ads.component.css']
})
export class PendingAdsComponent implements OnInit{
  prolist:pro[]=[];
  userlist:user[]=[];
  userProd:userProduct[]=[];
  searchTerm = '';
  term = '';
  pageSize:number=8;
  pageIndex:number=1;
  totalItems:number=this.userProd.length ;
  isok:string= "";
  constructor(private add : PendingAddService , private matdilog:MatDialog,private router:Router) { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getpendingAdd()
  // }
  ngOnInit(): void {
    this.getpendingAdd()
  }
getpendingAdd(){
  console.log("getpendingAdd")
    this.add.getpindingAdd().subscribe({
      next:(data)=>{
        console.log(data)
        let temp:userProduct[]=[];
        if(data.pro.length == 0) this.userProd = [];
        else{
          for (let index = 0; index < data.pro.length; index++) {
          temp[index]= {porduct:data.pro[index],user:data.us[index]};
        }
        this.userProd = temp
      }},
      error:(err)=>{
        console.log(err);
      }
    })
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
deleteAdd(id:string){
  if(confirm("Are you sure ?")){
  this.add.deleteAdd(id).subscribe((data)=>{
    if(data.success){
      this.toastNotification("Ad Delete Success");
      this.getpendingAdd()
    }else{
      this.toastNotificationErr("Ad Delete fail")
    }
  })}else{
    // alert("Ad accepted !!")
  }
}

acceptAdd(id:string){
    if(confirm("Are you sure ?")){
      this.add.acceptAdd(id).subscribe((data)=>{
      console.log(data)
      if(data.success){
        this.toastNotification("Ad Accepted Success");
        this.getpendingAdd()
      }else{
        this.toastNotificationErr("Ad Accepted fail")
      }
    })
    }else{
      // alert("Ad accepted !!")
    }
  }

  pageChanged(val:any)
  {
    this.pageIndex=val
    this.getpendingAdd()
  }

  viewdetails(item:userProduct){
    this.matdilog.open(ViewdetailsComponent,{
      data:item
    })
  }

}


