import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/modules/pendingAdd';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  catres!:category[]
  constructor(private service:CategoryService, private router:Router,) { }

  ngOnInit(): void {
    this.service.getcategoryname().subscribe((data)=>{
        console.log(data)
        this.catres=data
    })
  }

}
