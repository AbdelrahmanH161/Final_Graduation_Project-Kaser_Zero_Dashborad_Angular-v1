import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { category, pro, user } from 'src/app/modules/pendingAdd';
import { CategoryService } from 'src/app/service/category.service';
import { PendingAddService } from 'src/app/service/pending-add.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  item!:pro;
  cat!:category;
  user!:user;
  constructor(@Inject(MAT_DIALOG_DATA) private data:pro , private service : PendingAddService , private dialogRef:DialogRef , private servicecat:CategoryService) { }

  ngOnInit(): void {
    this.item = this.data
    this.service.getcatname(this.item.categoryId).subscribe((catdata)=>{
      this.cat = catdata;
      this.servicecat.getuser(this.item.userId).subscribe((res)=>{
        console.log(res)
        this.user = res;
      })
  })
  }
  close(){
    this.dialogRef.close()
  }

}
