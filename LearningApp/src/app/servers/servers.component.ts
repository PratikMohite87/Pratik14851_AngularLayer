import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server created";
  serverName: string = "default";
  serverCreated: boolean = false;
  servers = ["server1", "server2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created. Name is: "+this.serverName;
  }

  // updateServerName(event: any){
  //   this.serverName = event.target.value;
  // }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
