import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number;
  num2: number;
  total: number;

  constructor() {

  }

  suma(){

    if(this.num1 || this.num2){
      this.total = this.num1 + this.num2;
    } 

  }

  reinicia() {

    //Reiniciamos las variables.
    this.num1 = null;
    this.num2 = null;
    this.total = 0;
  }

}
