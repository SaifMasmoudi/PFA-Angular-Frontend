import { Component } from '@angular/core';
import { Matiere } from 'src/Modeles/Matiere';
import { MatiereService } from 'src/Services/matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-matiere',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.css']
})
export class CreateMatiereComponent {
  constructor(
    private matiereService: MatiereService,
    private router: Router
  ) { }

  createMatiere(nom_matiere: string, description: string): void {
    const nouvelleMatiere: Matiere = { nom_matiere, description } as Matiere;
    this.matiereService.createMatiere(nouvelleMatiere).subscribe(() => {
      this.router.navigate(['/matieres']);
    });
  }
}
