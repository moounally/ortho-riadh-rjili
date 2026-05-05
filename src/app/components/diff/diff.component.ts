import { Component, Input, OnInit, ElementRef, HostListener } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'diff-component',
    standalone: true,
    templateUrl: "./diff.component.html",
    imports: [FormsModule]
})
export class DiffComponent implements OnInit {
    @Input() left!: string;
    @Input() right!: string;

    sliderValue: number = 50;
    containerWidth: number = 0;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.onResize();
    }

    @HostListener('window:resize')
    onResize() {
        this.containerWidth = this.el.nativeElement.offsetWidth;
    }
}