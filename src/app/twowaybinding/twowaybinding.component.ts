import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  bikeName: string ='Pulsar';
  bikePrice: string ='80k';
  enginePower: string ='150cc';
  bikeColor: string ="Black";

  constructor() { }

  ngOnInit(): void {
  }
  reset():void{
    this.bikeName='unicorn';
    this.bikePrice='200';
    
  }

}
