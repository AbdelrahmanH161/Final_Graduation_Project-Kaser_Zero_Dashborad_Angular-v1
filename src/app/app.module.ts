import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './component/account/login/login.component';
import { LogoutComponent } from './component/account/logout/logout.component';
import { AddAdminComponent } from './component/account/add-admin/add-admin.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductsComponent } from './component/categories/products/products.component';
import { PendingAdsComponent } from './component/pending-ads/pending-ads.component';
import { DeliveredOrdersComponent } from './component/delivered-orders/delivered-orders.component';
import { BuyingOrdersComponent } from './component/buying-orders/buying-orders.component';
import { ExchangingOrdersComponent } from './component/exchanging-orders/exchanging-orders.component';
import { LoaderComponent } from './component/loader/loader.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptors } from './service/httpinterceptor';
import { AddUserComponent } from './component/home/add-user/add-user.component';
import { AddCategoryComponent } from './component/home/add-category/add-category.component';
import { ViewPendingAdComponent } from './component/shared/view-pending-ad/view-pending-ad.component';
import { ViewProductComponent } from './component/categories/view-product/view-product.component';
import { ViewBuyingOrderComponent } from './component/shared/view-buying-order/view-buying-order.component';
import { ViewExchangingOrderComponent } from './component/shared/view-exchanging-order/view-exchanging-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewdetailsComponent } from './component/viewdetails/viewdetails.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS , MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LoadingInterceptor } from './service/loading.interceptor';
import { DeliveredBuyingComponent } from './component/delivered-buying/delivered-buying/delivered-buying.component';
import { DeliveredExchangingComponent } from './component/delivered-exchanging/delivered-exchanging/delivered-exchanging.component';
import { AddAdvComponent } from './component/add-adv/add-adv/add-adv.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmBoxConfigModule, DialogConfigModule, NgxAwesomePopupModule, ToastNotificationConfigModule } from '@costlydeveloper/ngx-awesome-popup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    AddAdminComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    ProductsComponent,
    PendingAdsComponent,
    DeliveredOrdersComponent,
    BuyingOrdersComponent,
    ExchangingOrdersComponent,
    LoaderComponent,
    MainLayoutComponent,
    NotfoundComponent,
    AddUserComponent,
    AddCategoryComponent,
    ViewPendingAdComponent,
    ViewProductComponent,
    ViewBuyingOrderComponent,
    ViewExchangingOrderComponent,
    ViewdetailsComponent,
    DeliveredBuyingComponent,
    DeliveredExchangingComponent,
    AddAdvComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    NgScrollbarModule,
    NgScrollbarModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot(), // Needed for instantiating toast notifications.
    Ng2SearchPipeModule
  ],
  providers: [HttpInterceptors
 
    ,{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}} ,
   { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
