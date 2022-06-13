import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name: string;
  @Output() onNameChanged = new EventEmitter<string>();

  changeName(newName: string){
    this.onNameChanged.emit(newName);
  }
}