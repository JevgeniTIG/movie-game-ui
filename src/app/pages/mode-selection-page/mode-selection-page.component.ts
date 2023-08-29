import {Component, OnInit} from '@angular/core';
import {constants} from "../../constants/constants";

@Component({
  selector: 'app-mode-selection-page',
  templateUrl: './mode-selection-page.component.html',
  styleUrls: ['./mode-selection-page.component.scss']
})
export class ModeSelectionPageComponent implements OnInit {

  constructor() {
  }


  gamePage = '/' + constants.GAME;
  categoryModes = constants.CATEGORY_MODES;
  beginnerDifficultySelected = true;
  difficultyMode = 0;
  categoryMode = 0;

  ngOnInit(): void {
    if (localStorage.getItem('difficultySelected') !== undefined) {
      this.selectGameDifficultyMode(Number(localStorage.getItem('difficultySelected')!));
    }

    if (localStorage.getItem('categorySelected') !== undefined) {
      this.selectGameCategoryMode(Number(localStorage.getItem('categorySelected')!));
    }
  }

  selectGameDifficultyMode(userSelectionIndex: number) {
    this.difficultyMode = userSelectionIndex;
    localStorage.setItem('difficultySelected', userSelectionIndex.toString())

  }


  selectGameCategoryMode(userSelectionIndex: number) {
    this.categoryMode = userSelectionIndex;
    localStorage.setItem('categorySelected', userSelectionIndex.toString())

  }
}
