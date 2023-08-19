import { Component } from '@angular/core';
import { Iplayer } from './shared/module/model';
import { cricket } from './shared/const/players';
import { iPlayer } from './shared/module/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
  search !: string;
  playersArray: Array<iPlayer> = cricket;


  changeClick(eve: Event) {
    let value = ((eve.target as HTMLSelectElement).value)
    console.log(value)
  }
}
