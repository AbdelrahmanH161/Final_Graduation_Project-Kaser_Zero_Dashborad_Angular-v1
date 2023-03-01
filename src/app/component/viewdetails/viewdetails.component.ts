import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, InjectFlags, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { category, userProduct } from 'src/app/modules/pendingAdd';
import { PendingAddService } from 'src/app/service/pending-add.service';
import { PendingAdsComponent  } from '../pending-ads/pending-ads.component';
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  data1!:userProduct
  cat!:category
  constructor(@Inject(MAT_DIALOG_DATA) private data:userProduct, private service : PendingAddService , private dialogRef:DialogRef ) { 
    
  }

  ngOnInit(): void {
    this.data1=this.data
    console.log(this.data1.porduct.categoryId)
    this.service.getcatname(this.data1.porduct.categoryId).subscribe((catdata)=>{
      this.cat = catdata
    })
  }
  deleteAdd(id:string){
    this.service.deleteAdd(id).subscribe((data)=>{
      if(data.success){
        this.dialogRef.close()
        
      }else{
        console.log(data)
      }
    })
  }
  acceptAdd(id:string){
    this.service.acceptAdd(id).subscribe((data)=>{
      if(data.success == true){
        this.dialogRef.close()
      }else{
        console.log(data)
      }
    })
  }
  close(){
    this.dialogRef.close()
  }
}
