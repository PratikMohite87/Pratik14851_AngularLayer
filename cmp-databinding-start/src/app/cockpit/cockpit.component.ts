import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('serverInputContent') serverContent: ElementRef; // getting values from template with ViewChild.

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }

  // using local reference

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContent.nativeElement.value // getting values from template with ViewChild.
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContent.nativeElement.value // getting values from template with ViewChild.
    });
  }

}
