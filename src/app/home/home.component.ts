import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { TreatmentComponent } from "./treatmentComponent/treatment.component";
import { ContactBarreComponent } from "../components/contactBarreComponent/contactBarre.component";
import { AvisComponent } from "./avisComponent/avis.component";
import { RouterLink } from "@angular/router";
import { ExpertiseComponent } from "../components/expertise/expertise.component";
import { CommonModule } from "@angular/common";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  icon: string;
  current: number;
}

@Component({
    selector: 'home-component',
    standalone: true,
    templateUrl: "./home.component.html",
    imports: [TreatmentComponent, ContactBarreComponent, AvisComponent, RouterLink, ExpertiseComponent, CommonModule],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
    @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

    private statsObserver?: IntersectionObserver;
    private animationFrames: number[] = [];

    stats: Stat[] = [
      { target: 500, suffix: '+', label: 'Patients traités', icon: 'icon-[ph--users-three-bold]', current: 0 },
      { target: 10,  suffix: '+', label: "Années d'expérience", icon: 'icon-[ph--certificate-bold]', current: 0 },
      { target: 23,  suffix: '',  label: 'Cas avant/après', icon: 'icon-[ph--images-bold]', current: 0 },
      { target: 3,   suffix: '',  label: 'Techniques maîtrisées', icon: 'icon-[ph--magic-wand-bold]', current: 0 },
    ];

    ngAfterViewInit() {
      // Lecture vidéo
      const video = this.videoRef?.nativeElement;
      if (video) {
        video.muted = true;
        video.play().catch(e => console.warn('Autoplay bloqué:', e));
      }

      // Observer pour les compteurs
      this.initStatsObserver();
    }

    private initStatsObserver() {
      this.statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounters();
            this.statsObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      const statsSection = document.querySelector('#stats-section');
      if (statsSection) this.statsObserver.observe(statsSection);
    }

    private animateCounters() {
      this.stats.forEach((stat, index) => {
        const duration = 1800;
        const steps = 60;
        const increment = stat.target / steps;
        let current = 0;
        let step = 0;

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = () => {
          step++;
          const progress = easeOut(step / steps);
          stat.current = Math.min(Math.round(progress * stat.target), stat.target);

          if (step < steps) {
            const frameId = requestAnimationFrame(animate);
            this.animationFrames.push(frameId);
          }
        };

        // Délai échelonné par stat
        setTimeout(() => animate(), index * 150);
      });
    }

    ngOnDestroy() {
      this.statsObserver?.disconnect();
      this.animationFrames.forEach(id => cancelAnimationFrame(id));
    }
}