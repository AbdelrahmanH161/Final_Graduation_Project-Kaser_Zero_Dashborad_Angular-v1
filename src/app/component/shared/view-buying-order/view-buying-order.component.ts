import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { buyingOrders, BuyingOrdersResponse, data, ordersDetails } from 'src/app/modules/buyingOrdersResponse';

@Component({
  selector: 'app-view-buying-order',
  templateUrl: './view-buying-order.component.html',
  styleUrls: ['./view-buying-order.component.css']
})
export class ViewBuyingOrderComponent implements OnInit,OnDestroy {
  order!:buyingOrders;
  ordersDetails!:ordersDetails;
  constructor(@Inject(MAT_DIALOG_DATA) public data:data,
    public matDialogRef:MatDialogRef<ViewBuyingOrderComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.order = this.data.order
    this.ordersDetails = this.data.ordersDetails
  }

  ngOnDestroy(): void {
    this.matDialogRef.close(this.data);
  }

  onCloseClick(){
    this.ngOnDestroy();
  }
}
