import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { IndexComponent } from './index/index.component';
import { GameComponent } from './game/game/game.component';

import { HttpClientModule } from '@angular/common/http';
import { SaveGameComponent } from './save-game/save-game.component';

const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'new',
    component: GameComponent
  },
  {
    path: 'continue',
    component: GameComponent,
    data: { continue: true }
  },
  {
    path: 'save',
    component: SaveGameComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, IndexComponent, SaveGameComponent],
  imports: [
    BrowserModule,
    GameModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
