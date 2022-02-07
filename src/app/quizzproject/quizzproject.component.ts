import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzproject',
  templateUrl: './quizzproject.component.html',
  styleUrls: ['./quizzproject.component.css']
})
export class QuizzprojectComponent implements OnInit {
  answer:string='';
  correctAnswer:string='Delhi';
  isAnswerSubmitted:boolean=false;



  constructor() { }

  ngOnInit(): void {

  }
  submitAnswer():void{
    if(this.answer){
      this.isAnswerSubmitted=true;
    }
    
  }
  resetAnswer(){
    if(this.answer){
      this.answer = '';
      this.isAnswerSubmitted=false;
    }
  }

}
