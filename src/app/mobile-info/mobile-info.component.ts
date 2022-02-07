import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-info',
  templateUrl: './mobile-info.component.html',
  styleUrls: ['./mobile-info.component.css']
})
export class MobileInfoComponent implements OnInit {
  mobileImage:string='/assets/images/mobile_img.jpg';
  mobileName:string='Samsung Galaxy';
  mobileCompany:string='Samsung Pvt Ltd';
  mobileOriginalPrice:number=12000;
  discount:number=0;
  priceAfterDiscount:number=12000;

  public shopingCard:any=[
    {
      itemName :'Lenovo ipad 350',
      itemCompany : 'Lenovo pvt ltd',
      itemImage : '/assets/images/laptop.jpg',
      itemOriginalPrice:35000,
      itemDiscount: 0,
      itemPriceAfterDiscount:35000
    },
    {
      itemName: 'Samsang Washine Machine',
      itemCompany: 'Samsung Pvt. Ltd',
      itemOriginalPrice: 18000,
      itemImage: '/assets/images/washinemachine_img.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 18000,
    },
    {
      itemName: 'Sony LCD 32',
      itemCompany: 'Sony Pvt. Ltd',
      itemOriginalPrice: 25000,
      itemImage: '/assets/images/lcd_tv.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 25000,
    },
    {
      itemName: 'LG mini Double Door',
      itemCompany: 'LG Pvt. Ltd',
      itemOriginalPrice: 22000,
      itemImage: '/assets/images/fridge.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 22000,
    }
  ]



  constructor() { }

  ngOnInit(): void {
//this.priceAfterDiscount=this.mobileOriginalPrice-this.discount;
  }
  calculatePriceAfterDiscount():void{
    this.priceAfterDiscount=this.mobileOriginalPrice-(this.mobileOriginalPrice*this.discount/100);

  }
  calculatePriceAfterDiscount2(item:any):void{
    item.itemPriceAfterDiscount=item.itemOriginalPrice-(item.itemOriginalPrice*item.itemDiscount/100);

  }

}
