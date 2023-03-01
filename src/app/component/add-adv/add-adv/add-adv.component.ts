import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddAdsService } from 'src/app/service/add-ads.service';

@Component({
  selector: 'app-add-adv',
  templateUrl: './add-adv.component.html',
  styleUrls: ['./add-adv.component.css']
})
export class AddAdvComponent implements OnInit {
  user: number = 0
  @ViewChild("selectElem1") selectElem1: ElementRef | undefined;
  selectedFile1: any[] = []
  selectElem: any
  img: any
  x:number=0
  catgory: any
  catgory1: any
  firstFilterOptions: [] = []
  secondFilterOptions: [] = []
  thirdFilterOptions: [] = []
  firstFilterTitle: any
  secondFilterTitle: any
  thirdFilterTitle: any
  brand: [] = []
  files: any[] = [];

  colors: string[] = ["red",
    "pink",
    "purple",
    "blue",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
    "brown",
    "gray",
    "black",
    "white",
    "indigo",];
  durationsOfUse: string[] = [
    "Up to 3 months",
    "3 to 6 months",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years and more",
  ]
  categoryId: any
  usrFormGroup: FormGroup;
  public loginForm!: FormGroup
  constructor(private addadvs: AddAdsService, private fb: FormBuilder, private http: HttpClient ,private dialogRef :DialogRef) {
    this.usrFormGroup = this.fb.group({
      categoryId: ['', [Validators.required]],
      userEmail: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      ableToExchange: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      durationOfUse: ['', [Validators.required]],
      color: ['', [Validators.required]],
      firstFilter: ['', [Validators.required]],
      secondFilter: ['', [Validators.required]],
      thirdFilter: ['', [Validators.required]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],

    })
  }

  ngOnInit(): void {
    this.addadvs.getGategory().subscribe((res) => {
      // console.log(res[1]._id)
      // console.log(res[1].title)

      // console.log(res[1].brands)
      // console.log(res[1].firstFilter.title)
      // console.log(res[1].firstFilter.options)

      this.catgory = res
      this.firstFilterTitle = res[0].firstFilter.title
      this.secondFilterTitle = res[0].secondFilter.title
      this.thirdFilterTitle = res[0].thirdFilter.title
      this.firstFilterOptions = res[0].firstFilter.options
      this.secondFilterOptions = res[0].secondFilter.options
      this.thirdFilterOptions = res[0].thirdFilter.options
      this.brand = res[0].brands
      this.categoryId = res[0]._id
      console.log(this.firstFilterOptions[this.x+1])

    })
  }
  // changeid(event:Event){
  // }
  changeid(user: any): void {
    //console.log(user);
    // 
    this.user = user
    this.addadvs.getGategory().subscribe((res) => {
      // console.log(res[1]._id)
      // console.log(res[1].title)

      // console.log(res[user]._id)
      // console.log(res[1].firstFilter.title)
      // console.log(res[1].firstFilter.options)

      this.catgory1 = res
      console.log(res[user]._id)
      console.log(res[user].firstFilter.title)
      console.log(res[user].firstFilter.options)
      this.firstFilterOptions = res[user].firstFilter.options
      this.secondFilterOptions = res[user].secondFilter.options
      this.thirdFilterOptions = res[this.user].thirdFilter.options
    })
  }
  setNewUser(id: any): void {
    console.log(id);
    // // Match the selected ID with the ID's in array
    // this.curUser = this.lUsers.filter(value => value.id === parseInt(id));
    // console.log(this.curUser);
  }
  selectedTeam = '';
  onSelected(value: string): void {
    this.selectedTeam = value;
    console.log(this.selectedTeam)
    this.addadvs.getGategory().subscribe((res) => {
      // console.log(res[1]._id)
      // console.log(res[1].title)
this.x=0
      // console.log(res[user]._id)
      // console.log(res[1].firstFilter.title)
      // console.log(res[1].firstFilter.options)

      this.catgory1 = res
      console.log(res[value]._id)
      console.log(res[value].firstFilter.title)
      console.log(res[value].firstFilter.options)
      this.usrFormGroup.value.firstFilter= this.firstFilterOptions[this.x]
      this.firstFilterTitle = res[this.selectedTeam].firstFilter.title
      this.secondFilterTitle = res[this.selectedTeam].secondFilter.title
      this.thirdFilterTitle = res[this.selectedTeam].thirdFilter.title
      this.firstFilterOptions = res[this.selectedTeam].firstFilter.options
      this.secondFilterOptions = res[this.selectedTeam].secondFilter.options
      this.thirdFilterOptions = res[this.selectedTeam].thirdFilter.options
      this.brand = res[this.selectedTeam].brands
      this.categoryId = res[this.selectedTeam]._id
      console.log(this.usrFormGroup.value.firstFilter)
      console.log( this.firstFilterOptions)

    })

  }
  onFileChange2(event: any) {
    this.img = event.target.files[0]
    console.log(this.img)
    // for  (var i =  0; i <  event.target.files.length; i++)  {  
    //   this.files.push(event.target.files[i]);
    // }
  }
  onFileChange1(event: any) {
    // this.selectedFile1 = event.target.files[0]
    //  console.log(this.selectedFile1)
    for  (var i =  0; i <  event.target.files.length; i++)  {  
      this.selectedFile1.push(event.target.files[i]);
    } 
    console.log(this.selectedFile1)
  }
  addAds() {
    const formData = new FormData();
    //   for  (var i =  0; i <  this.selectedFile3.length; i++)  {  
    //     formData.append("clinicImagesPath",  this.selectedFile3[i]);
    // } 
    for (var i = 0; i < this.selectedFile1.length; i++) {
      formData.append("img", this.selectedFile1[i]);
          console.log("img",this.selectedFile1[i])

    }
    // formData.append("img", this.img);
    // console.log("img", this.img
    // )
    formData.append('categoryId', this.categoryId);
    console.log('categoryId', this.categoryId
    )
    formData.append('title', this.usrFormGroup.value.title);
    console.log('title', this.usrFormGroup.value.title)
    

    formData.append('price', this.usrFormGroup.value.price);
    console.log('price', this.usrFormGroup.value.price )
    formData.append('ableToExchange', this.usrFormGroup.value.ableToExchange);
    console.log('ableToExchange', this.usrFormGroup.value.ableToExchange)
    
    formData.append('brand', this.usrFormGroup.value.brand);
    console.log('brand', this.usrFormGroup.value.brand)
    formData.append('durationOfUse', this.usrFormGroup.value.durationOfUse);
    console.log('durationOfUse', this.usrFormGroup.value.durationOfUse)

    formData.append('color', this.usrFormGroup.value.color);
    console.log('color', this.usrFormGroup.value.color)
    formData.append('firstFilter', this.usrFormGroup.value.firstFilter);
    console.log('firstFilter', this.usrFormGroup.value.firstFilter)
    formData.append('secondFilter', this.usrFormGroup.value.secondFilter);
    console.log('secondFilter', this.usrFormGroup.value.secondFilter)
    formData.append('thirdFilter', this.usrFormGroup.value.thirdFilter);
    console.log('thirdFilter', this.usrFormGroup.value.thirdFilter)
    formData.append('description', this.usrFormGroup.value.description);
    console.log('description', this.usrFormGroup.value.description)
    formData.append('status', "active");
    console.log(formData)
    //  formData.append('description', this.usrFormGroup.value.description);
    //  console.log( )

       this.addadvs.addAds(this.usrFormGroup.value.userEmail,formData).subscribe((res)=>{
        this.onCloseClick()
       })

    // this.http.post(`http://localhost:4000/dashboard/addProduct/${this.usrFormGroup.value.userEmail}`, formData).subscribe(res => {
    //   alert('correct.')

    //   console.log(res);


    // })
  }
  onCloseClick(){
    this.dialogRef.close();
  }
}