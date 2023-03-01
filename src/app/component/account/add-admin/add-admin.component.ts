import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Iadmin } from 'src/app/modules/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  admin!:Iadmin;
  addadminform:FormGroup;
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmpass')?.value
    return pass === confirmPass ? null : { mismatch: true }
  };
  constructor(private adminservce: AdminService ,private dialogRef:DialogRef) { 
    this.addadminform= new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmpass: new FormControl("",[Validators.required])
    },{validators: this.checkPasswords})
  }


  ngOnInit(): void {
  }
  addadmin(){
    this.admin =this.addadminform.value as Iadmin
    this.adminservce.addadmin(this.admin).subscribe((data)=>{
      console.log(data)
    })}

    close(){
      this.dialogRef.close()
    }
}
