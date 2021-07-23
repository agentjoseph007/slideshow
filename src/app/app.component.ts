import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'slideshow';
  showCheck = false;

  setFocusSlider(): void{
    console.log(this.showCheck);
    this.showCheck = !this.showCheck;
  }

  removeFocusSlider(): void {
    console.log(this.showCheck);
    this.showCheck = !this.showCheck;
  }
}
