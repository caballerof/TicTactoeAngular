import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State {
  turn: string;
  values: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _state$: BehaviorSubject<State>;

  constructor() {
    this._state$ = new BehaviorSubject({
      turn: `Player X`,
      values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    });
  }

  get state$(): BehaviorSubject<State> {
    return this._state$;
  }

  get state(): State {
    return this._state$.getValue();
  }

  set state(state: State) {
    this._state$.next(state);
  }

  updateValue(row, col) {
    console.log(`Updating value`);
    if (this.state.values[row][col] === '-') {
      const newValue = this.state.turn === 'Player X' ? 'X' : '0';
      const newTurn = this.state.turn === 'Player X' ? 'Player O' : 'Player X';
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this.state = this.state;
    }
  }// End updateValue

  reset() {
    this.state = {
      turn: `Player X`,
      values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
  }

}// End Class
