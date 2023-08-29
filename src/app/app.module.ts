import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {GamePageComponent} from "./pages/game-page/game-page.component";
import {GameOverPageComponent} from "./pages/game-over-page/game-over-page.component";
import {RouterModule} from "@angular/router";
import {ModeSelectionPageComponent} from "./pages/mode-selection-page/mode-selection-page.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CommonForMainAndGameOverComponent} from "./pages/common-component/common-for-main-and-game-over.component";
import {ServerDownPageComponent} from "./pages/server-down-page/server-down-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ModeSelectionPageComponent,
    GamePageComponent,
    GameOverPageComponent,
    ServerDownPageComponent,
    CommonForMainAndGameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
