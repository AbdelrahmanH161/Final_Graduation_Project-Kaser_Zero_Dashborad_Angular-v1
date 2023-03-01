import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { dataex, ExchangingOrdersResponse } from 'src/app/modules/exchangingOrdersResponse';
import { ExchangingOrdersService } from 'src/app/service/exchanging-orders.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewExchangingOrderComponent } from '../shared/view-exchanging-order/view-exchanging-order.component';


@Component({
  selector: 'app-exchanging-orders',
  templateUrl: './exchanging-orders.component.html',
  styleUrls: ['./exchanging-orders.component.css']
})
export class ExchangingOrdersComponent implements OnInit {
  searchTerm = '';
  term = '';
  subscribtion !:Subscription;
  response:ExchangingOrdersResponse;
  currentPage:number;
  totalItems:number;
  itemsPerPage:number;
  constructor(private exchangingOrdersService:ExchangingOrdersService,private matDialog:MatDialog) {
    this.response={
      exchangingOrders:[
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
          exchangeProperties:{
            productId:"",
            productPrice:0,
            profit:0,
            shipping:0,
            status:"",
            paymentmethod:""
          },
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
          orderBuyerProductDetails:{
            img:[],
            title:""
          },
          orderSellerDetails:{
            address:[],
            phoneNumber:"",
            userName:""
          },
          orderSellerProductDetails:{
            img:[],
            title:""
          }
        }
      ]
    }
    this.currentPage=1;
    this.totalItems=this.response.exchangingOrders.length;
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
    this.subscribtion = this.exchangingOrdersService.getAll().subscribe({
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
  updateStatus(id:string,personCase:string,newStatus:string,i:number){
    console.log("id: "+id)
    console.log("status: "+newStatus)
    console.log("person : "+personCase)
    console.log("index: "+i)
    this.exchangingOrdersService.setNewStatus(id,newStatus,personCase).subscribe({
      next:(value)=>{
        this.FetchData();
        console.log(value);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openDialog(item:dataex){
    let dialogRef = this.matDialog.open(ViewExchangingOrderComponent,{
      data:item,
      // disableClose:true
    });

    dialogRef.afterClosed().subscribe(
      result=>{
        // alert(result.name);
      }
    )
}
}
