import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iadmin } from 'src/app/modules/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  adminform:FormGroup;
  admin!:Iadmin;
  constructor(private route:Router ,private adminserve:AdminService) { 
    this.adminform= new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)])
    })
  }
loginAdmin(){
this.admin= this.adminform.value as Iadmin
this.adminserve.login(this.admin).subscribe((data)=>{
  console.log(data.success)
  if(data.success){
    localStorage.setItem("token",data.authorization)
    this.route.navigateByUrl("/dashbord/home")
  }else{
    alert(data.massege)
  }
  
})
}
  ngOnInit(): void {
  }

}
