import { Component } from "@angular/core";
import { DiffComponent } from "../components/diff/diff.component";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";

import { RouterLink } from "@angular/router";

@Component({
    selector : 'gallery-component',
    standalone : true,
    templateUrl : "./gallery.component.html",
    imports: [DiffComponent, ContactBarreComponent, RouterLink],
})

export class GalleryComponent {

}