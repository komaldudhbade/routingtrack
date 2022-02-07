import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayofobjectComponent } from './arrayofobject/arrayofobject.component';


import { CalculatorComponent } from './calculator/calculator.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ForthpageComponent } from './forthpage/forthpage.component';
import { GmailSignUpComponent } from './gmail-sign-up/gmail-sign-up.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { InputComponent } from './input/input.component';
import { MobileInfoComponent } from './mobile-info/mobile-info.component';
import { QuizzprojectComponent } from './quizzproject/quizzproject.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ShoppingItemListComponent } from './shopping-item-list/shopping-item-list.component';
import { TableComponent } from './table/table.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
  {
    path:'firstPageLink',component:FirstpageComponent
  },
  {
    path:'secondPageLink',component:SecondpageComponent
  },
  {
    path:'thirdPageLink',component:ThirdpageComponent
  },
  {
    path:'forthPageLink',component:ForthpageComponent
  },
  {
    path:'fifthPageLink',component:FifthpageComponent
  },
  {
    path:'twowaybinding',component:TwowaybindingComponent
  },
  {
    path:"calculator",component : CalculatorComponent
  },
 {
   path:"gmailSignUp", component : GmailSignUpComponent
 },
 {
   path:"mobileInfo", component : MobileInfoComponent
 },
 {
   path: `shoppingList`, component: ShoppingItemListComponent
 },
 {
  path:"quizzproject", component: QuizzprojectComponent

 },
 {
   path:"table", component : TableComponent
 },
 {
   path:"arrayofobject", component :ArrayofobjectComponent
 },
 {
   path:"googelpay", component:GooglepayComponent
 },
 {
   path:"input",component:InputComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
