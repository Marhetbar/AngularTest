import {Component} from '@angular/core'
import { AuthorService } from './authors.service';


@Component ({
    selector: 'favorite',
    template: `
        <h3>Authors</h3>
        {{ author }}
        <ul>
            <li *ngFor= "let author of authors">
                {{author}}
            </li>
        </ul>
        `,        
})

export class AuthorsComponent {
    title = "The title of authors page";
    authors;

    constructor(authorService: AuthorService){
            this.authors = authorService.getAuthors();
    }
}