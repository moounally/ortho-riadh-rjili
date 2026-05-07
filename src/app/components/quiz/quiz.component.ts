import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md" *ngIf="isOpen">
      <div class="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative reveal active">
        <!-- Close Button -->
        <button (click)="close()" class="absolute top-6 right-6 text-gray-400 hover:text-brand-navy transition-colors">
          <span class="icon-[ph--x-bold] text-2xl"></span>
        </button>

        <div class="p-8 md:p-12">
          <!-- Step Indicator -->
          <div class="flex gap-2 mb-8">
            <div *ngFor="let s of [1,2,3]; let i = index" 
                 class="h-1.5 flex-1 rounded-full transition-all duration-500"
                 [ngClass]="step > i ? 'bg-brand-gold' : 'bg-gray-100'">
            </div>
          </div>

          <!-- Step 1: Age -->
          <div *ngIf="step === 1" class="animate-fade-in">
            <h3 class="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Pour qui est ce traitement ?</h3>
            <p class="text-gray-500 mb-8 font-light">L'orthodontie s'adapte à chaque étape de la vie.</p>
            <div class="grid gap-4">
              <button (click)="next('Enfant / Adolescent')" class="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-cream text-brand-navy font-semibold transition-all duration-300">Enfant ou Adolescent</button>
              <button (click)="next('Adulte')" class="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-cream text-brand-navy font-semibold transition-all duration-300">Adulte</button>
            </div>
          </div>

          <!-- Step 2: Goal -->
          <div *ngIf="step === 2" class="animate-fade-in">
            <h3 class="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Quel est votre objectif ?</h3>
            <p class="text-gray-500 mb-8 font-light">Dites-nous ce que vous aimeriez corriger.</p>
            <div class="grid gap-4">
              <button (click)="next('Alignement')" class="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-cream text-brand-navy font-semibold transition-all duration-300">Aligner mes dents</button>
              <button (click)="next('Espace')" class="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-cream text-brand-navy font-semibold transition-all duration-300">Fermer des espaces</button>
              <button (click)="next('Esthétique')" class="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-cream text-brand-navy font-semibold transition-all duration-300">Sourire plus harmonieux</button>
            </div>
          </div>

          <!-- Step 3: Result -->
          <div *ngIf="step === 3" class="animate-fade-in text-center">
            <div class="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="icon-[ph--sparkle-bold] text-brand-gold text-4xl"></span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Votre Solution Idéale</h3>
            <p class="text-gray-600 mb-8 font-light">
              D'après vos réponses, le système <strong>{{ recommendation }}</strong> semble parfaitement adapté à votre profil.
            </p>
            <div class="bg-brand-cream p-6 rounded-2xl mb-8 border border-brand-gold/20">
              <p class="text-brand-navy font-semibold text-sm uppercase tracking-widest mb-2">Conseil du Dr. Rjili</p>
              <p class="text-gray-600 text-sm italic">"Le mieux est de réaliser un bilan clinique complet pour valider cette option."</p>
            </div>
            <a href="https://www.med.tn/rendez-vous/dr-riadh-rjili/227277" target="_blank" class="btn-primary-custom w-full">Réserver mon bilan</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Trigger -->
    <button (click)="open()" class="fixed bottom-28 right-8 z-[90] bg-white text-brand-navy px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-brand-gold/20 hover:bg-brand-gold hover:text-white transition-all duration-300 group">
      <span class="icon-[ph--magic-wand-bold] text-brand-gold group-hover:text-white text-xl"></span>
      <span class="text-xs font-bold uppercase tracking-widest">Simulateur</span>
    </button>
  `,
  styles: []
})
export class QuizComponent {
  isOpen = false;
  step = 1;
  answers: string[] = [];
  recommendation = '';

  open() {
    this.isOpen = true;
    this.step = 1;
    this.answers = [];
  }

  close() {
    this.isOpen = false;
  }

  next(answer: string) {
    this.answers.push(answer);
    if (this.step < 3) {
      this.step++;
      if (this.step === 3) {
        this.generateRecommendation();
      }
    }
  }

  generateRecommendation() {
    const isAdult = this.answers[0] === 'Adulte';
    const goal = this.answers[1];

    if (isAdult && goal === 'Esthétique') {
      this.recommendation = 'Invisalign (Gouttières Invisibles)';
    } else if (!isAdult) {
      this.recommendation = 'Système PITTS 21 (Bagues High-Tech)';
    } else {
      this.recommendation = 'Damon Ultima ou Invisalign';
    }
  }
}
