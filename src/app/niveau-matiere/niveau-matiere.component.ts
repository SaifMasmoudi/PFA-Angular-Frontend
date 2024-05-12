import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { MatiereService } from 'src/Services/matiere.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { NiveauService } from 'src/Services/niveau.service';

@Component({
  selector: 'app-niveau-matiere',
  templateUrl: './niveau-matiere.component.html',
  styleUrls: ['./niveau-matiere.component.css']
})
export class NiveauMatiereComponent {
  niveauMatieres: NiveauMatiere[] = [];
  niveaux: Niveau[] = [];
  matieres: Matiere[] = [];

  constructor(
    private niveauMatiereService: NiveauMatiereService,
    private niveauService: NiveauService,
    private matiereService: MatiereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllNiveauMatieres();
    this.getAllNiveaux();
    this.getAllMatieres();
  }

  getAllNiveauMatieres(): void {
    this.niveauMatiereService.getAllNiveauMatieres().subscribe(niveauMatieres => this.niveauMatieres = niveauMatieres);
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  deleteNiveauMatiere(id: number): void {
    this.niveauMatiereService.deleteNiveauMatiere(id).subscribe(() => {
      this.niveauMatieres = this.niveauMatieres.filter(nm => nm.id !== id);
    });
  }

  editNiveauMatiere(niveauMatiere: NiveauMatiere): void {
    this.router.navigate(['/edit-niveau-matiere', niveauMatiere.id]);
  }
}
