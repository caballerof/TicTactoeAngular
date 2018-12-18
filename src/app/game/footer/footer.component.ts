import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  stateService: StateService;
  router: Router;

  constructor(stateService: StateService, router: Router) {
    this.stateService = stateService;
    this.router = router;
  }

  ngOnInit() {}

  saveGame(){
    this.router.navigateByUrl('/saveform');
  }

}
