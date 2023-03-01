import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Iadmin } from 'src/app/modules/admin';
import { AdminService } from 'src/app/service/admin.service';
import { AddAdminComponent } from '../account/add-admin/add-admin.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private adminservce: AdminService ,private matdilog:MatDialog) { 
  }

  ngOnInit(): void {
  }
  addAdmin(){
    this.matdilog.open(AddAdminComponent)
  }

}
