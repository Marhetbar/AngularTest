import { Component } from '@angular/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {FavoriteComponent} from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  template: `<h1>Hello Angular</h1>
  <authors></authors>
  

    `
})

export class AppComponent { }
