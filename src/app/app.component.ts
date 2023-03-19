import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebSite';
  
  img : string = "/assets/bike1.jpg";
  
  nDate : Date = new Date();
}
