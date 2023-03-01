import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../providers/CustomValidators';
import { HttpClient } from '@angular/common/http';
import { DashService } from 'src/app/service/dash.service';
import { UserRegister } from 'src/app/modules/userRegister';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit,OnDestroy {
  addUserForm:FormGroup;
  user!:UserRegister;
  constructor(private dashService:DashService,public matDialogRef:MatDialogRef<AddUserComponent>) {
    this.addUserForm=new FormGroup({
      userName: new FormControl("",[Validators.required,Validators.minLength(3)]),
      phoneNumber:new FormControl('',[Validators.required,Validators.pattern('(01)[- +()0-9]{9}')]),
      email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),
      password: new FormControl("",[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.matDialogRef.close();
  }

  onCloseClick(){
    this.matDialogRef.close();
  }

  get passwordMatchError() {
    return (
      this.addUserForm.getError('mismatch') &&
      this.addUserForm.get('confirmPassword')?.touched
    );
  }

  AddUser(){
    console.log(this.addUserForm.value);
    this.user = this.addUserForm.value;
    this.dashService.addUser(this.user).subscribe({
      next:(value)=>{
        if(value == "success"){
          this.onCloseClick();
          alert("User added");
        }
        else if(value  == "failed")
          alert("Failed to add new user, Enter unique email and phone number");
      },
      error:(err)=>{
        alert("Error, check the connection");
      }
    })
  }
}
