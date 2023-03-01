import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDashInfo } from 'src/app/modules/dashInfo';
import { DashService } from 'src/app/service/dash.service';
import { AddUserComponent } from './add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';
import { userProduct } from 'src/app/modules/pendingAdd';
import { AddAdvComponent } from '../add-adv/add-adv/add-adv.component';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Subscription!:Subscription;
  dashInfo:IDashInfo;

  constructor(private dashService:DashService,private matDialog:MatDialog) {   
    this.dashInfo={
      numOfUsers:0,
      numOfCategories:0,
      numOfProducts:0,
      numOfPendingAds:0,
      newOrders:[],
      newUsers:[],
      pendingAds:[],
      ordersDetails:[]
      // orderProductDetails:{},
      // orderBuyerDetails:{},
      // orderSellerDetails:{}
    };
  }

  ngOnInit(): void {
    this.FetchData();
  }
 
  FetchData(){
    this.Subscription = this.dashService.getAll().subscribe({
      next:(response)=>{
        console.log(response);
        this.dashInfo = response;
      
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

openAddUserModal(){
    this.matDialog.open(AddUserComponent);
}

  openAddCategoryModal(){
    this.matDialog.open(AddCategoryComponent);
  }
  openAddProudect(){
    this.matDialog.open(AddAdvComponent);
}
  viewdetails(item:userProduct){
    this.matDialog.open(ViewdetailsComponent,{
      data:item
    })
  }
  
}
