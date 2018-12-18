import { StateService, State } from './../game/state.service';
import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from './../my-http-service.service';

@Component({
  selector: 'app-save-game',
  templateUrl: './save-game.component.html',
  styleUrls: ['./save-game.component.scss']
})
export class SaveGameComponent implements OnInit {

  stateService: StateService;
  myHttpService: MyHttpServiceService;
  savedGames: any;

  constructor(stateService: StateService,
    myHttpService: MyHttpServiceService) {
    this.stateService = stateService;
    this.myHttpService = myHttpService;
  }

  ngOnInit() {
    this.getSavedGames();
  }

  getSavedGames() {
    this.myHttpService.getSavedGames().subscribe(
      (response:any[]) => {        
        this.savedGames = response;
        this.stateService.state.savedGames = [...response];
      },
      error => {
        console.log(error);
      }
    );
  }// End getSavedGames

  continueGame(index: number) {
    console.log(this.stateService.state.savedGames);
  }// End continueGame

}
