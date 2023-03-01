import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { pro } from 'src/app/modules/pendingAdd';
import { CategoryService } from 'src/app/service/category.service';
import { ViewProductComponent } from '../view-product/view-product.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  proudct!:pro[];
  constructor(private activatedRoute: ActivatedRoute,private service:CategoryService , private matdilog:MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data['id'])
        this.service.getpro(data['id']).subscribe((res)=>{
          console.log(res)
          this.proudct = res
        })
    })
    }

    viewdetails(item:pro){
      this.matdilog.open(ViewProductComponent,{
        data:item
      })
    }

}
