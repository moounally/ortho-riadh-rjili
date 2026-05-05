import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

@Component({
    standalone : true,
    templateUrl : './avis.component.html',
    selector : "avis-component"
})

export class AvisComponent implements AfterViewInit {
    
    ngAfterViewInit() {
        this.loadTrustindex();
    }

    private loadTrustindex() {
        // Vérifier si le script est déjà présent pour éviter les doublons
        const scriptId = 'trustindex-loader-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.trustindex.io/loader.js?f7547c9710b4182ab85657aa2de';
            script.defer = true;
            script.async = true;
            
            // On l'ajoute au conteneur spécifique
            const container = document.getElementById('trustindex-widget-container');
            if (container) {
                container.appendChild(script);
            }
        } else {
            // Si le script existe déjà, on force parfois un re-render si l'API Trustindex le permet
            // Pour Trustindex, le simple fait de ré-ajouter le script ou d'appeler leur init peut aider
        }
    }
}