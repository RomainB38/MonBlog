import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    new Post('TOTO', 'Contenu du post de toto', 12, new Date('01/01/2012')),
    new Post('TITI', 'Contenu du post de titi', -3, new Date('06/06/2016')),
    new Post('TATA', 'Contenu du post de tata', 5, new Date('12/12/2014'))
  ];
}