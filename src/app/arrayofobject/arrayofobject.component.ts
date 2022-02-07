import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayofobject',
  templateUrl: './arrayofobject.component.html',
  styleUrls: ['./arrayofobject.component.css'],
})
export class ArrayofobjectComponent implements OnInit {
  fruitObject: any = {
    fruitName: 'Apple',
    fruitPrice: 70,
    fruitColor: 'Red',
    fruitImage: '/assets/images/apple.jpg',
    fruitDiscount: 0,
    fruitPriceAfterDiscount: 70
  };

  constructor() {}

  ngOnInit(): void {};
  
  calculatePriceAfterDiscount(fruitObject: any): void {
    fruitObject.fruitPriceAfterDiscount =
      fruitObject.fruitPrice -
      (fruitObject.fruitPrice * fruitObject.fruitDiscount) / 100;
  }
}
