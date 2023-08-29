import {Component, HostListener, Input} from '@angular/core';
import {constants} from "../../constants/constants";

@Component({
  selector: 'app-common-for-main-and-game-over',
  templateUrl: './common-for-main-and-game-over.component.html',
  styleUrls: ['./common-for-main-and-game-over.component.scss']
})
export class CommonForMainAndGameOverComponent {

  @Input('buttonText') buttonText!: string;
  @Input('textForOutput') textForOutput!: string;
  @Input('imageSrc') imageSrc!: string;
  @Input('pageIndex') pageIndex!: number;

  modeSelectionPage = '/' + constants.MODE_SELECTION;
  mainPage = '/' + constants.MAIN;
  isMobile = false;


  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.isMobileView()
  }


  ngOnInit(): void {
    this.isMobileView()
  }

  isMobileView() {
    this.isMobile = window.innerWidth <= 600;
  }

}
