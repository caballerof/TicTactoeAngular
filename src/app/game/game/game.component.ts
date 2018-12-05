import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService, State } from '../state.service';

import { MyHttpServiceService } from './../../my-http-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  status = `fetching`;

  constructor(
    route: ActivatedRoute,
    stateService: StateService,
    myHttpService: MyHttpServiceService
  ) {
    if (route.snapshot.data.continue) {
      myHttpService.getSavedGame().subscribe((state: State) => {
        stateService.state = state;
        this.status = `success`;
      }, error => {
        this.status = error.statusText;
      });
    } else {
      stateService.reset();
      this.status = `success`;
    }
  }

  ngOnInit() {
  }

}
