import { Component } from '@angular/core';

@Component({
  selector: 'app-server-down-page',
  templateUrl: './server-down-page.component.html',
  styleUrls: ['./server-down-page.component.scss']
})
export class ServerDownPageComponent {


  textForOutput = 'Server is down, please come again later!';
  buttonText = 'HOME PAGE';
  imageSrc = './assets/server_down.svg';
  pageIndex = 2;

  constructor() {
  }

}
