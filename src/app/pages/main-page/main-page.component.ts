import {Component, OnInit} from '@angular/core';
import {constants} from "../../constants/constants";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor() {
  }

  textForOutput = 'You are about to play an incredible game of higher or lower!';
  buttonText = 'PLAY GAME';
  imageSrc = './assets/main_page_cinema.svg';
  pageIndex = 0;


  ngOnInit(): void {
  }


}
