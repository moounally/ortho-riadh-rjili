import { Component, ElementRef, ViewChild } from "@angular/core";
import { TreatmentComponent } from "./treatmentComponent/treatment.component";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";
import { AvisComponent } from "./avisComponent/avis.component";
import { RouterLink } from "@angular/router";
import { ExpertiseComponent } from "../components/expertise/expertise.component";

@Component({
    selector : 'home-component',
    standalone : true,
    templateUrl : "./home.component.html",
    imports: [TreatmentComponent, ContactBarreComponent, AvisComponent, RouterLink, ExpertiseComponent],
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