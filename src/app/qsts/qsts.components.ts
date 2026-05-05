import { Component } from "@angular/core";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";

import { RouterLink } from "@angular/router";

@Component({
    selector : 'qsts-component',
    standalone : true,
    templateUrl : "./qsts.component.html",
    imports: [ContactBarreComponent, RouterLink],
})

export class QstsComponent {

}