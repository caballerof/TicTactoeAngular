import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.scss']
})
export class SaveFormComponent implements OnInit {

  gameName: string;

  constructor() { }

  ngOnInit() {
  }

  handleSubmitClick(){
    console.log(`Saved game ${this.gameName}`);
  }

}
