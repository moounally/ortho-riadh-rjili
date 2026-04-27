import { Component, Input } from "@angular/core";
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
    selector : 'diff-component',
    standalone : true,
    templateUrl : "./diff.component.html",
})

export class DiffComponent {
    @Input()
    left!: string;
    
    @Input()
    right!: string
}