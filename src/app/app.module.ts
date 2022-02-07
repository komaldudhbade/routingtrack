import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { ForthpageComponent } from './forthpage/forthpage.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VarPracticeComponent } from './var-practice/var-practice.component';
import { FormsModule } from '@angular/forms';
import { StructralDirectiveDemoComponent } from './structral-directive-demo/structral-directive-demo.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GmailSignUpComponent } from './gmail-sign-up/gmail-sign-up.component';
import { MobileInfoComponent } from './mobile-info/mobile-info.component';
import { ShoppingItemListComponent } from './shopping-item-list/shopping-item-list.component';
import { QuizzprojectComponent } from './quizzproject/quizzproject.component';
import { TableComponent } from './table/table.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ArrayofobjectComponent } from './arrayofobject/arrayofobject.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { MsgboxComponent } from './msgbox/msgbox.component';
import { TransactionHisoryComponent } from './transaction-hisory/transaction-hisory.component';
import { InputComponent } from './input/input.component';
import { InputchildComponent } from './inputchild/inputchild.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    ForthpageComponent,
    FifthpageComponent,
    NavigationComponent,
    VarPracticeComponent,
    StructralDirectiveDemoComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    GmailSignUpComponent,
    MobileInfoComponent,
    ShoppingItemListComponent,
    QuizzprojectComponent,
    TableComponent,
    ColorPickerComponent,
    ArrayofobjectComponent,
    GooglepayComponent,
    MsgboxComponent,
    TransactionHisoryComponent,
    InputComponent,
    InputchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
