import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactBarreComponent } from '../components/contactBarreComponent/contactBarre.component';
import { Meta, Title } from '@angular/platform-browser';

interface Conseil {
  slug: string;
  icon: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
}

interface Video {
  title: string;
  description: string;
  youtubeId: string | null; // null = placeholder (pas encore de vidéo YouTube)
  thumbnail: string;
}

@Component({
  selector: 'conseils-component',
  standalone: true,
  imports: [RouterLink, ContactBarreComponent],
  templateUrl: './conseils.component.html',
})
export class ConseilsComponent {
  // TODO: Remplacez les youtubeId null par les vrais IDs de vos vidéos YouTube
  // Exemple : youtubeId = 'dQw4w9WgXcQ' pour https://youtu.be/dQw4w9WgXcQ
  videos: Video[] = [
    {
      title: 'Première consultation orthodontique : comment ça se passe ?',
      description: 'Le Dr. Riadh Rjili explique en détail le déroulement de votre première visite au cabinet.',
      youtubeId: null,
      thumbnail: 'assets/accueil/riadh.png',
    },
    {
      title: 'Comment entretenir son appareil dentaire ?',
      description: 'Conseils pratiques du Dr. Rjili pour le brossage, la hygiène et les aliments à éviter.',
      youtubeId: null,
      thumbnail: 'assets/accueil/why.jpg',
    },
    {
      title: 'Invisalign ou bagues : comment choisir ?',
      description: 'Quels sont les avantages de chaque technique ? Qui peut en bénéficier ?',
      youtubeId: null,
      thumbnail: 'assets/accueil/adulte.jpg',
    },
  ];

  conseils: Conseil[] = [
    {
      slug: 'premier-rdv',
      icon: 'icon-[ph--calendar-check-bold]',
      tag: 'Première consultation',
      title: 'À quel âge consulter pour la première fois ?',
      excerpt: 'La question la plus fréquente des parents. La réponse est souvent plus tôt que vous ne le pensez.',
      content: `Une première consultation vers l'âge de 6-7 ans est généralement recommandée. À cet âge, il est souvent trop tôt pour commencer un traitement complet — mais c'est le moment idéal pour détecter d'éventuels problèmes de croissance des mâchoires. Certaines situations se corrigent beaucoup plus facilement et rapidement si elles sont prises en charge avant la fin de la croissance. Pour les adultes, il n'y a pas d'âge limite : l'orthodontie reste possible à tout âge.`,
    },
    {
      slug: 'hygiene',
      icon: 'icon-[ph--tooth-bold]',
      tag: 'Hygiène',
      title: 'Comment bien nettoyer son appareil dentaire ?',
      excerpt: 'Un brossage adapté est la clé d\'un traitement réussi et d\'une bonne santé bucco-dentaire.',
      content: `Avec un appareil dentaire fixe (bagues), le brossage doit être fait après chaque repas, idéalement avec une brosse orthodontique ou des brossettes interdentaires. Un bain de bouche fluoré le soir est recommandé. Évitez les aliments trop durs ou trop collants (caramels, bonbons durs, pain croustillant). Pour les aligneurs transparents (Invisalign), retirez-les avant de manger ou de boire autre chose que de l'eau, et nettoyez-les à l'eau tiède avant de les remettre.`,
    },
    {
      slug: 'bague-decollee',
      icon: 'icon-[ph--warning-bold]',
      tag: 'Urgence',
      title: 'Que faire si une bague se décolle ?',
      excerpt: 'Pas de panique. Voici les bons réflexes à avoir avant votre prochain rendez-vous.',
      content: `Si une bague (bracket) se décolle, elle reste généralement accrochée au fil sans tomber. Ne tentez pas de la retirer vous-même. Vous pouvez utiliser de la cire orthodontique pour couvrir la partie qui irrite la joue. Appelez le cabinet dès que possible pour prendre rendez-vous. Ce n'est pas une urgence absolue, mais il faut consulter sous une semaine pour éviter que le traitement ne prenne du retard.`,
    },
    {
      slug: 'douleur',
      icon: 'icon-[ph--smiley-nervous-bold]',
      tag: 'Confort',
      title: 'La douleur après la pose : ce qui est normal',
      excerpt: 'Un léger inconfort les premiers jours est habituel. Voici comment le gérer.',
      content: `Après la pose de votre appareil ou lors des activations, il est normal de ressentir une sensibilité dentaire pendant 2 à 4 jours. Les dents peuvent sembler "serrées" ou légèrement douloureuses au toucher. Un antalgique classique (paracétamol) peut aider si nécessaire. Privilégiez des aliments mous les premiers jours. Si la douleur est vive, persistante, ou si vous remarquez une blessure à l'intérieur de la bouche qui ne guérit pas, contactez le cabinet.`,
    },
    {
      slug: 'contention',
      icon: 'icon-[ph--shield-check-bold]',
      tag: 'Après le traitement',
      title: 'La contention : pourquoi c\'est indispensable ?',
      excerpt: 'Le traitement est terminé, mais les dents ont encore besoin d\'être maintenues en place.',
      content: `Après le retrait de votre appareil, les dents ont tendance à vouloir reprendre leur position initiale. La contention (gouttière amovible la nuit ou fil collé derrière les dents) est indispensable pour maintenir le résultat obtenu. Elle est généralement portée à vie, ce qui peut surprendre — mais c'est la garantie que votre sourire reste aligné sur le long terme. Ne négligez jamais cette étape.`,
    },
    {
      slug: 'adulte',
      icon: 'icon-[ph--person-bold]',
      tag: 'Orthodontie adulte',
      title: 'L\'orthodontie à l\'âge adulte : idées reçues',
      excerpt: 'L\'orthodontie n\'est pas réservée aux enfants. Beaucoup d\'adultes se traitent aujourd\'hui, souvent discrètement.',
      content: `L'orthodontie adulte est de plus en plus fréquente. Les aligneurs transparents (comme Invisalign) permettent un traitement presque invisible, idéal pour les personnes actives. Les bagues céramiques sont aussi une alternative esthétique. La durée de traitement est généralement similaire à celle des adolescents. Le seul facteur limitant peut être une maladie parodontale (gencives) non traitée — mais une fois stabilisée, l'orthodontie reste possible.`,
    },
  ];

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Conseils Orthodontiques | Dr. Riadh Rjili Médenine');
    this.metaService.updateTag({
      name: 'description',
      content: 'Conseils orthodontiques du Dr. Riadh Rjili de Médenine : hygiène, bague décolée, douleur, âge de consultation, contention. Vidéos et articles pratiques.'
    });
  }
}
