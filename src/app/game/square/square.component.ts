import { StateService } from './../state.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() row: number;
  @Input() column: number;

  _stateService: StateService;

  constructor(stateService: StateService) {
    this._stateService = stateService;
  }

  ngOnInit() {
  }

  _handleSquareClick() {
    console.log(`Square clicked, row: ${this.row} column: ${this.column}`);
    this._stateService.updateValue(this.row, this.column);
  }

}// End Class
