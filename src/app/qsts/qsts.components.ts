import { Component } from "@angular/core";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";

@Component({
    selector : 'qsts-component',
    standalone : true,
    templateUrl : "./qsts.component.html",
    imports: [ContactBarreComponent],
})

export class QstsComponent {

}