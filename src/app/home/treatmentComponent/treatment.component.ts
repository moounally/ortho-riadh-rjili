import { Component } from "@angular/core";
import { ChildComponent } from "./childComponent/child.component";
import { AdultComponent } from "./adultComponent/adult.component";
import { TeenagerComponent } from "./teenagerComponent/teenager.component";

@Component({
    standalone: true,
    templateUrl: "./treatment.component.html",
    selector: 'home-treatment-component',
    imports: [ChildComponent, AdultComponent, TeenagerComponent]
})

export class TreatmentComponent {
    tab: 'child' | 'teenager' | 'adult' = 'child';
    switchTab(tab: 'child' | 'teenager' | 'adult'): void {
        this.tab = tab;
    }
}