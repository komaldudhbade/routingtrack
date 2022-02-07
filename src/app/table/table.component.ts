import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
firstInput:number=0;
table:any=[];




  constructor() { }

  ngOnInit(): void {
  }
calculateTable():void{
  this.table=[];
  if(this.firstInput == 0){
    return;
  }
  
  for (let index = 1; index <= 10; index++) {
   this.table.push(this.firstInput*index);
    
  }
}
}
