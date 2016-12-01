import { Component } from '@angular/core';
import { CourseService } from './course.service';
import {AutoGrowDirective} from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
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

  constructor(courseService: CourseService){
      this.courses = courseService.getCourses();
  }

 
}
