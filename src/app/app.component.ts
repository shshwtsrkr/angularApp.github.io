import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'my-app';
  count = -1;
  lon = [1, 2, 3, 4, 5, 6, 7];
  names = ["sash", "bash", "zash"];
  
  increaseCount = () => {
    ++this.count;
  }

  decreaseCount = () => {
    --this.count;
  }
  */
  tdi: string = '';
  lots: string[] = [];
  
  addToDoList = () => {
    this.lots.push(this.tdi)
  }
}


