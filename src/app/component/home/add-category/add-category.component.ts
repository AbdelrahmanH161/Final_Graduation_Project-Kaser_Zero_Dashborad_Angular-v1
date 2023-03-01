import { Component, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashService } from 'src/app/service/dash.service';
import {ICategory} from '../../../modules/category';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit,OnDestroy {
  category !:ICategory;
  addCategoryForm:FormGroup;
  constructor(private dashService:DashService,private dialogRef:DialogRef) {
    this.addCategoryForm=new FormGroup({
      title: new FormControl("",[Validators.required,Validators.minLength(3)]),
      brands:new FormControl([],[Validators.required]),
      'firstFilter.title':new FormControl("",[Validators.required]),
      "firstFilter.options":new FormControl([],[Validators.required]),
      "secondFilter.title":new FormControl("",[Validators.required]),
      "secondFilter.options":new FormControl([],[Validators.required]),
      "thirdFilter.title":new FormControl("",[Validators.required]),
      "thirdFilter.options":new FormControl([],[Validators.required]),
      // "imge":new FormControl([""],[Validators.required]),
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dialogRef.close();
  }

  onCloseClick(){
    this.dialogRef.close();
  }

  AddCategory(){
    console.log(this.addCategoryForm.value);
    this.category = this.addCategoryForm.value;
    this.dashService.addCategory(this.category).subscribe({
      next:(value)=>{
        if(value == "success"){
          this.onCloseClick();
          alert("Category added");
        }
        else if(value  == "failed")
          alert("Failed to add new category");
      },
      error:(err)=>{
        alert("Error, check the network connection");
      }
    })
  }

}
