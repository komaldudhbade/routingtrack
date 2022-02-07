import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifthpage',
  templateUrl: './fifthpage.component.html',
  styleUrls: ['./fifthpage.component.css'],
})
export class FifthpageComponent implements OnInit {
  mobileName: string = 'Samsung Galaxy';
  color: string = 'Black';
  companyName: string = 'Samsung';
  prize: number = 14000;
  type: string = 'Smartphone';
  version: string = 'Kernel Version';
  imagePath: string = '/assets/images/mobile.jpg';
  madeIn: string[] = [
    'India',
    'Koria',
    'Japan',
    'China',
    'USA',
    'UK',
    'UAE',
    'Australia',
  ];
  usersList: any[] = [
    { name: 'vikas', location: 'Pune' },
    { name: 'nilesh', location: 'Pune' },
    { name: 'swapnil', location: 'Nagpur' },
    { name: 'swapnjeet', location: 'Nagpur' },
  ];
  showTable: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  display(): void {
    this.showTable = !this.showTable;
  }
  display1(): void{
    if(this.showTable == true){
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }
}
