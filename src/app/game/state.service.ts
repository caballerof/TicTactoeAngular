import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State {
  turn: string;
  values: string[][];
  itWasWin: boolean;
  movements: number;
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
      ],
      itWasWin: false,
      movements: 0
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
    // console.log(`Updating value`);
    if (this.state.values[row][col] === '-') {
      const newValue = this.state.turn === 'Player X' ? 'X' : '0';
      const newTurn = this.state.turn === 'Player X' ? 'Player O' : 'Player X';
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this.state.movements = this.state.movements + 1;
      // --
      for (let index = 0; index < this.state.values.length; index++) {
        console.log(this.state.values[index][index]);
        console.log(this.state.values[0][index]);
        console.log(this.state.values[1][index]);
        console.log(this.state.values[2][index]);
      }
      // --
      this._state$.next(this.state);
    }
  }// End updateValue

  reset() {
    this.state = {
      turn: `Player X`,
      values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ],
      itWasWin: false,
      movements: 0
    };
  }

}// End Class
