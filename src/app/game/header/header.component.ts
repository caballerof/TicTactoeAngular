import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  ngOnInit() {
  }

}
