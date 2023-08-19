import { Component } from '@angular/core';
import { Iplayer } from './shared/module/model';
import { teams } from './shared/const/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
  search !: string;
  playersArray: Array<Iplayer> = teams;


  changeClick(eve: Event) {
    let value = ((eve.target as HTMLSelectElement).value)
    console.log(value)
  }
}
