import { MyHttpServiceService } from './../my-http-service.service';
import { State } from './state.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State {
  turn: string;
  values: string[][];
  itWasWin: boolean;
  movements: number;
  player_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state$: BehaviorSubject<State>;

  constructor(public myHttpService: MyHttpServiceService) {
    this._state$ = new BehaviorSubject({
      turn: `Turn of Player 1 X`,
      values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      itWasWin: false,
      movements: 0,
      player_name: ``
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
    if (this.state.values[row][col] === '-' && !this.state.itWasWin) {
      const newValue = this.state.turn === 'Turn of Player 1 X' ? 'X' : 'O';
      const newTurn =
        this.state.turn === 'Turn of Player 1 X'
          ? 'Turn of Player 1 O'
          : 'Turn of Player 1 X';
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this.state.movements = this.state.movements + 1;
      // --
      if (
        /XXX|OOO/.test(
          this.state.values[0][0] +
            this.state.values[0][1] +
            this.state.values[0][2]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[1][0] +
            this.state.values[1][1] +
            this.state.values[1][2]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[2][0] +
            this.state.values[2][1] +
            this.state.values[2][2]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[0][0] +
            this.state.values[1][0] +
            this.state.values[2][0]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[0][1] +
            this.state.values[1][1] +
            this.state.values[2][1]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[0][2] +
            this.state.values[1][2] +
            this.state.values[2][2]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[0][0] +
            this.state.values[1][1] +
            this.state.values[2][2]
        )
      ) {
        this.state.itWasWin = true;
      } else if (
        /XXX|OOO/.test(
          this.state.values[0][2] +
            this.state.values[1][1] +
            this.state.values[2][0]
        )
      ) {
        this.state.itWasWin = true;
      }
      if (this.state.itWasWin) {
        this.state.turn = `There is a winner, ${
          this.state.turn === 'Turn of Player 1 X' ? 'Player 2 O' : 'Player 1 X'
        }`;
      }
      // --
      this._state$.next(this.state);
    }
  } // End updateValue

  reset() {
    this.state = {
      turn: `Turn of Player 1 X`,
      values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      itWasWin: false,
      movements: 0,
      player_name: ``
    };
  }

  saveStateGame() {
    // console.log(this.state);
    this.myHttpService.putGame(this.state).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  } // End saveStateGame
} // End Class
