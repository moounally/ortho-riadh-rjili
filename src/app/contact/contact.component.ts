import { Component, OnInit } from "@angular/core";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";
import { FormsModule } from '@angular/forms';
import flatpickr from 'flatpickr';

@Component({
  selector: 'contact-component',
  standalone: true,
  templateUrl: "./contact.component.html",
  imports: [ContactBarreComponent, FormsModule],
})

export class ContactComponent implements OnInit {
  ngOnInit(): void {
    flatpickr('#flatpickr-floating', {});
  }

  onSubmit() {
    
  }
}
