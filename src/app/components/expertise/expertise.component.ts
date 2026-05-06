import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise.component.html',
  styles: [`
    .expertise-container {
      background: linear-gradient(to bottom, #ffffff, #f8f9fa);
    }
    .article-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .article-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
  `]
})
export class ExpertiseComponent {
  articles = [
    {
      title: "L'évolution de l'Orthodontie à Médenine : Pourquoi choisir le Dr. Riadh Rjili ?",
      excerpt: "L'orthodontie moderne ne se limite plus à aligner les dents. Découvrez comment les nouvelles technologies transforment les sourires dans le sud Tunisien.",
      content: "Le cabinet du Dr. Riadh Rjili à Médenine se positionne à la pointe de l'innovation orthodontique. En intégrant des protocoles avancés comme le système Pitts 21 et les aligneurs invisibles Invisalign, nous offrons des traitements plus rapides et plus confortables. Pour les patients de Médenine, Zarzis et Tataouine, cela signifie moins de rendez-vous et des résultats esthétiques supérieurs.",
      keywords: ["Orthodontie Médenine", "Dr. Riadh Rjili", "Sud Tunisien", "Invisalign"]
    },
    {
      title: "Système Pitts 21 : La révolution de l'esthétique faciale",
      excerpt: "Contrairement aux bagues classiques, le système Pitts 21 se concentre sur l'arc du sourire et l'harmonie globale du visage.",
      content: "Le système Pitts 21 est une technologie de bagues auto-ligaturantes de haute précision. Il permet un contrôle tridimensionnel exceptionnel de la position dentaire. Au cabinet du Dr. Rjili, nous utilisons cette approche pour créer des sourires larges et éclatants qui rajeunissent le visage, une expertise unique dans la région de Médenine.",
      keywords: ["Pitts 21", "Esthétique dentaire", "Bagues auto-ligaturantes"]
    },
    {
      title: "Orthodontie Invisible : La solution pour les adultes actifs",
      excerpt: "Vous hésitez à porter un appareil à l'âge adulte ? Les aligneurs transparents sont la solution discrète par excellence.",
      content: "Beaucoup de nos patients adultes à Médenine et Djerba optent pour l'orthodontie invisible. Cette méthode utilise des gouttières transparentes amovibles qui déplacent les dents en douceur. C'est la solution idéale pour maintenir une vie sociale et professionnelle normale tout en améliorant sa santé bucco-dentaire.",
      keywords: ["Invisalign Tunisie", "Orthodontie adulte", "Gouttières transparentes"]
    }
  ];
}
