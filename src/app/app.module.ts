import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { CourseService } from './courses/course.service';
import { AuthorsService } from './authors/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CourseService, 
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
