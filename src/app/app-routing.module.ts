import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { LogoutComponent } from './component/account/logout/logout.component';
import { AddAdvComponent } from './component/add-adv/add-adv/add-adv.component';
import { BuyingOrdersComponent } from './component/buying-orders/buying-orders.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductsComponent } from './component/categories/products/products.component';
import { DeliveredBuyingComponent } from './component/delivered-buying/delivered-buying/delivered-buying.component';
import { DeliveredExchangingComponent } from './component/delivered-exchanging/delivered-exchanging/delivered-exchanging.component';
import { DeliveredOrdersComponent } from './component/delivered-orders/delivered-orders.component';
import { ExchangingOrdersComponent } from './component/exchanging-orders/exchanging-orders.component';
import { HomeComponent } from './component/home/home.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PendingAdsComponent } from './component/pending-ads/pending-ads.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { Loginguard } from './guards/login.guard';

const routes: Routes = [
  {path:'dashbord',component:MainLayoutComponent,children:[
    {path:'',redirectTo:"home",pathMatch:"full"},
    {path:'home',component:HomeComponent ,canActivate: [AuthGuard]},
    {path:'users',component:UsersComponent,canActivate: [AuthGuard]},
    {path:'categories',component:CategoriesComponent,canActivate: [AuthGuard]},
    {path:'Products/:id',component:ProductsComponent,canActivate: [AuthGuard]},
    {path:'pendingAds',component:PendingAdsComponent,canActivate: [AuthGuard]},
    {path:'deliveredOrders',component:DeliveredOrdersComponent,canActivate: [AuthGuard]},
    {path:'deliveredBuying',component:DeliveredBuyingComponent,canActivate: [AuthGuard]},
    {path:'deliveredexchanging',component:DeliveredExchangingComponent,canActivate: [AuthGuard]},
    {path:'buyingOrders',component:BuyingOrdersComponent,canActivate: [AuthGuard]},
    {path:'exchangingOrders',component:ExchangingOrdersComponent,canActivate: [AuthGuard]},
    {path:'AddAdvComponent',component:AddAdvComponent,canActivate:[AuthGuard]},

    {path:'logout',component:LogoutComponent,canActivate: [AuthGuard]}
    
    
  ],canActivate:[AuthGuard]},
  {path:'',component:LoginComponent,children:[
    {path:'',redirectTo:"login",pathMatch:"full"}
  ],canActivate:[Loginguard]},

  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }