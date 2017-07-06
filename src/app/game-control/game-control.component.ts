import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() numberPosted = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  timer = undefined;
  num:number = 0;
start(){
this.timer = window.setInterval(() => { this.num=this.num +1 ; 
  console.log(this.num); 

this.numberPosted.emit(this.num);



}, 1000);
return this.timer;
}
  
  
    

stop() {
    clearInterval(this.timer);
}



}
