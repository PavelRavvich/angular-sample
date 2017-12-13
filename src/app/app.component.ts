import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    {name: 'WFM1'},
    {name: 'WFM2'},
    {name: 'WFM3'},
    {name: 'WFM4'},
    {name: 'WFM5'},
    {name: 'WFM6'}
  ];
}
