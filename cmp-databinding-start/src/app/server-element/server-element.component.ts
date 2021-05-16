import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element : {type: string, name: string, content: string};

  constructor() { 
    console.log("constructor invoked");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("on change executed");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit invoked");
  }

}
