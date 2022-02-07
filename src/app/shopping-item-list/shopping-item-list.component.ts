import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.css'],
})
export class ShoppingItemListComponent implements OnInit {
  public shoppingItemList: any = [
    {
      itemName: 'Samsang Galaxy 12',
      itemCompany: 'Samsung Pvt. Ltd',
      itemOriginalPrice: 12000,
      itemImagePath: '/assets/images/mobile_img.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 12000,
    },
    {
      itemName: 'Samsang Washine Machine',
      itemCompany: 'Samsung Pvt. Ltd',
      itemOriginalPrice: 18000,
      itemImagePath: '/assets/images/washinemachine_img.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 18000,
    },
    {
      itemName: 'Sony LCD 32',
      itemCompany: 'Sony Pvt. Ltd',
      itemOriginalPrice: 25000,
      itemImagePath: '/assets/images/lcd_tv.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 25000,
    },
    {
      itemName: 'LG mini Double Door',
      itemCompany: 'LG Pvt. Ltd',
      itemOriginalPrice: 22000,
      itemImagePath: '/assets/images/fridge.jpg',
      itemDiscount: 0,
      itemPriceAfterDiscount: 22000,
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  public calculatePriceAfterDiscount(shoppingItem: any) {
    shoppingItem.itemPriceAfterDiscount =
      shoppingItem.itemOriginalPrice -
      (shoppingItem.itemOriginalPrice * shoppingItem.itemDiscount) / 100;
  }
}
