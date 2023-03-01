import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { dataex, exchangingOrders, ExchangingOrdersResponse, ordersDetailsex } from 'src/app/modules/exchangingOrdersResponse';

@Component({
  selector: 'app-view-exchanging-order',
  templateUrl: './view-exchanging-order.component.html',
  styleUrls: ['./view-exchanging-order.component.css']
})
export class ViewExchangingOrderComponent implements OnInit,OnDestroy {
  order!:exchangingOrders;
  ordersDetails!:ordersDetailsex;
  constructor(@Inject(MAT_DIALOG_DATA) public data:dataex,
  public matDialogRef:MatDialogRef<ViewExchangingOrderComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.order=this.data.order;
    this.ordersDetails=this.data.ordersDetails
  }

  ngOnDestroy(): void {
    this.matDialogRef.close(this.data);
  }

  onCloseClick(){
    this.matDialogRef.close();
  }

}
