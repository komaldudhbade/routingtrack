import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structral-directive-demo',
  templateUrl: './structral-directive-demo.component.html',
  styleUrls: ['./structral-directive-demo.component.css']
})
export class StructralDirectiveDemoComponent implements OnInit {
  public colorCodeCharRange: string[] = [
    '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
