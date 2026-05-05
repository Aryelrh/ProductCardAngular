import { Component } from '@angular/core';
import { CardList } from './components/card-list/card-list';

@Component({
  selector: 'app-root',
  imports: [CardList],
  templateUrl: './app.html',
})
export class App {}
