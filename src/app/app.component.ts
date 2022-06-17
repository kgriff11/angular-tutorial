import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  name: string = 'KeLSo';

  toDate: Date = new Date();


  constructor(){}








  setName(newName: string){
    this.name = newName;
  }

}
