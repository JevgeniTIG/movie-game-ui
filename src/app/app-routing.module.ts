import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {GamePageComponent} from "./pages/game-page/game-page.component";
import {GameOverPageComponent} from "./pages/game-over-page/game-over-page.component";
import {constants} from "./constants/constants";
import {ModeSelectionPageComponent} from "./pages/mode-selection-page/mode-selection-page.component";
import {ServerDownPageComponent} from "./pages/server-down-page/server-down-page.component";


const routes: Routes = [

  {path: constants.MAIN, component: MainPageComponent},
  {path: constants.MODE_SELECTION, component: ModeSelectionPageComponent},
  {path: constants.GAME, component: GamePageComponent},
  {path: constants.GAME_OVER, component: GameOverPageComponent},
  {path: constants.SERVER_DOWN, component: ServerDownPageComponent},

  {path: '', redirectTo: constants.MAIN, pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
