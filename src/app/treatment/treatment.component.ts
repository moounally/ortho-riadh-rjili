import { Component } from "@angular/core";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";


@Component({
    selector : 'treatment-component',
    standalone : true,
    templateUrl : "./treatment.component.html",
    imports: [ContactBarreComponent],
})

export class TreatmentComponent {

}