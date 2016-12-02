import { Component } from '@angular/core';
import { CoursesService } from './course.service';
import {AutoGrowDirective} from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  template: `
        <h2>Courses</h2>
        {{ title }}
        <input type = "text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>

        `
})
export class CoursesComponent  {

  title = "The title of courses page";
  courses;

  constructor(courseService: CoursesService){
      this.courses = courseService.getCourses();
  }

 
}
