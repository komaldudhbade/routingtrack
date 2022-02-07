import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  public r: number = 0;
  public b: number = 0;
  public g: number = 0;
  public opacity : number = 1;
  public gbColor: string = 'rgb(0,0,0)';

  
  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(): void {
    this.gbColor = `rgb(${this.r},${this.g},${this.b},${this.opacity})`;
   // this.gbColor = 'rbg('+this.r+','+this.b+','+this.g+','+this.opacity+')';
  }

}
