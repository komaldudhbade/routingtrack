import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {
  firstName : string = 'SHITAL';
  lastName : string = 'Dudhbade';
  customerId : number = 123456;
  accountNumber : number = 456987422365;
  address : string ='Pune';
  emailId : string = 'shital.dudhbade@gmail.com';
  phoneNumber : number = 9945698712;
  imagePath : string ='assets/images/bank_customer.jpg';
  customerLocation:string[]=[
    'Kharadi','Wagholi','Hinjewadi','Wakad','Yerwada','Bundgarden','KalyaniNagar','Manjari','Hdapsar',
    'Sanagavi'
  ];
  customersDetails:any[]=[
    {firstname:"Nilesh", lastname:"Nartam", accountNo:123456,bankName:"HDFC"},
    {firstname:"Gaurav", lastname:"Korde", accountNo:987456,bankName:"ICICI"}

  ];
  showCustomerDetails:boolean=true;



  constructor() { }

  ngOnInit(): void {
  };
  display():void{
    if(this.showCustomerDetails==true){
      this.showCustomerDetails=false;

    } else{
      this.showCustomerDetails=true;
    }
  }

}
