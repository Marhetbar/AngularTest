import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseService } from './course.service';
import { AuthorService } from './authors.service';
import { AuthorsComponent } from './authors.component';
import {AutoGrowDirective} from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective ],
  bootstrap:    [ AppComponent ],
  providers:    [CourseService, AuthorService],
})

export class AppModule { }
