import { Component } from "@angular/core";

import { RouterLink } from "@angular/router";

@Component({
    standalone : true,
    templateUrl : './child.component.html',
    selector : "child-treatment-component",
    imports: [RouterLink]
})

export class ChildComponent {

}