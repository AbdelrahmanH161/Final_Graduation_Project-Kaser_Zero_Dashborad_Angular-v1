import { Component, OnInit } from '@angular/core';
import { deliveredOrdersResponse } from 'src/app/modules/deliveredOrdersRes';
import { DeliveredOrdersService } from 'src/app/service/delivered-orders.service';

@Component({
  selector: 'app-delivered-buying',
  templateUrl: './delivered-buying.component.html',
  styleUrls: ['./delivered-buying.component.css']
})
export class DeliveredBuyingComponent implements OnInit {
  searchTerm = '';
  term = '';
  data!:deliveredOrdersResponse;

  currentPage!:number;
  totalItems!:number;
  itemsPerPage!:number;
  constructor(private service:DeliveredOrdersService) {
    
    
    }

  ngOnInit(): void {
    this.service.getdeliveredBuyingOrders().subscribe((data1)=>{
        console.log(data1.deliveredOrders , data1.ordersDetails)
        this.data= data1
        this.currentPage = 1;
        this.totalItems = data1.deliveredOrders.length;
        this.itemsPerPage = 10;
    })
    
  }
  pageChanged(value:any){
    console.log(typeof value)
    this.currentPage=value;
  }
}
