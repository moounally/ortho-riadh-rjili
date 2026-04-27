import { Component, ElementRef, ViewChild } from "@angular/core";
import { TreatmentComponent } from "./treatmentComponent/treatment.component";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";
import { AvisComponent } from "./avisComponent/avis.component";

@Component({
    selector : 'home-component',
    standalone : true,
    templateUrl : "./home.component.html",
    imports: [TreatmentComponent, ContactBarreComponent, AvisComponent],
}
)
export class HomeComponent {
    @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;

    // Essayer de démarrer la vidéo
    video.muted = true;
    video.play().catch(error => {
      console.warn('Lecture automatique bloquée :', error);
    });
  }
}