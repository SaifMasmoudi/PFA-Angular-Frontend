import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { MatiereService } from 'src/Services/matiere.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-create-niveau-matiere',
  templateUrl: './create-niveau-matiere.component.html',
  styleUrls: ['./create-niveau-matiere.component.css']
})
export class CreateNiveauMatiereComponent {
  niveaux: Niveau[] = [];
  matieres: Matiere[] = [];

  constructor(
    private niveauMatiereService: NiveauMatiereService,
    private niveauService: NiveauService,
    private matiereService: MatiereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllNiveaux();
    this.getAllMatieres();
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  createNiveauMatiere(idNiveau: number, idMatiere: number): void {
    const niveauMatiere: NiveauMatiere = {
      id_niveau: idNiveau,
      id_matiere: idMatiere
    };

    this.niveauMatiereService.createNiveauMatiere(niveauMatiere).subscribe(() => {
      this.router.navigate(['/niveau-matieres']);
    });
  }
}
