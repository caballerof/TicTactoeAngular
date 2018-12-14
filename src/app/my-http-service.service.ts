import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { State } from './game/state.service';

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {
  constructor(private httpClient: HttpClient) {}

  getSavedGame() {
    return this.httpClient.get('https://api.myjson.com/bins/zuklq');
  }

  putGame(gameState: State) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      })
    };
    return this.httpClient.post(
      `https://api.myjson.com/bins/zuklq`,
      gameState,
      httpOptions
    );
  }
} // End Class
