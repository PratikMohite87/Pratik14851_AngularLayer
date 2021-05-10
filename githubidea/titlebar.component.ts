import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  section1 : number[] = [];
  section2 : number[] = [];
  section3 : number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createSection1(){
    this.section1.push(this.section1.length);
  };

  removeFromSection1(event){
    this.section1.splice(event,1);
  }

  createSection2(){
    this.section2.push(this.section2.length);
  };

  removeFromSection2(event){
    this.section2.splice(event,1);
  }

  createSection3(){
    this.section3.push(this.section3.length);
  };

  removeFromSection3(event){
    this.section3.splice(event,1);
  }

}
