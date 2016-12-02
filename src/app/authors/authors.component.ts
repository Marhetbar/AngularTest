import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';


@Component({
  selector: 'app-authors',
  template:`
    <h3>Authors</h3>
        {{ author }}
        <ul>
            <li *ngFor= "let author of authors">
                {{author}}
            </li>
        </ul>
  ` 

})
export class AuthorsComponent implements OnInit {

  title = "The title of authors page";
    authors;

    constructor(authorService: AuthorsService){
            this.authors = authorService.getAuthors();

    }
  ngOnInit() {
  }

}
