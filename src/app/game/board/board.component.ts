import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  values: string[][];
  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
    this.values = stateService.state.values;
  }

  ngOnInit() {
  }

}
