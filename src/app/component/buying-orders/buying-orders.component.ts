import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BuyingOrdersResponse, data } from 'src/app/modules/buyingOrdersResponse';
import { BuyingOrdersService } from 'src/app/service/buying-orders.service';
import { ViewBuyingOrderComponent } from '../shared/view-buying-order/view-buying-order.component';

@Component({
  selector: 'app-buying-orders',
  templateUrl: './buying-orders.component.html',
  styleUrls: ['./buying-orders.component.css']
})
export class BuyingOrdersComponent implements OnInit {
  searchTerm = '';
  term = '';
  subscribtion !:Subscription;
  response:BuyingOrdersResponse;
  currentPage:number;
  totalItems:number;
  itemsPerPage:number;
  constructor(private buyingOrdersService:BuyingOrdersService,private matDialog:MatDialog) {
    this.response={
      buyingOrders:[
        {
          _id:"",
          addressfrom:{
            blockNumber: 0,
            st: "",
            city: "String",
            area: "",
          },
          addressto:{
            blockNumber: 0,
            st: "",
            city: "String",
            area: "",
          },
          buyerId:"",
          exchangable:false,
          paymentmethod:"",
          productId:"",
          productPrice:0,
          profit:0,
          sellerId:"",
          shipping:0,
          status:"",
          time:""
        }
      ],
      ordersDetails:[
        {
          orderBuyerDetails:{
            phoneNumber:"",
            userName:"",
            address:[]
          },
          orderSellerDetails:{
            address:[],
            phoneNumber:"",
            userName:""
          },
          orderProductDetails:{
            img:[],
            title:""
          }
        }
      ]
    }
    this.currentPage=1;
    this.totalItems=this.response.buyingOrders.length;
    this.itemsPerPage = 10;
   }

  ngOnInit(): void {
    this.FetchData();
  }
  pageChanged(value:any){
    console.log(typeof value)
    this.currentPage=value;
  }
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  FetchData(){
    this.subscribtion = this.buyingOrdersService.getAll().subscribe({
      next:(res)=>{
        console.log(res);
        this.response=res;
        console.log(res)
        // console.log(this.response['buyingOrders']);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  updateStatus(id:string,newStatus:string){
    console.log("id: "+id)
    console.log("status: "+newStatus)
    this.buyingOrdersService.setNewStatus(id,newStatus).subscribe({
      next:(value)=>{
        this.FetchData();
        console.log(value);
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  openDialog(item:data){
      let dialogRef = this.matDialog.open(ViewBuyingOrderComponent,{
        data:item,
      });

      dialogRef.afterClosed().subscribe(
        result=>{
          // alert(result.name);
        }
      )
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(ViewBuyingOrderComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

