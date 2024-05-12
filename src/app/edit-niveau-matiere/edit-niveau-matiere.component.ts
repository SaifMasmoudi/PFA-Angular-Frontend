import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { MatiereService } from 'src/Services/matiere.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-edit-niveau-matiere',
  templateUrl: './edit-niveau-matiere.component.html',
  styleUrls: ['./edit-niveau-matiere.component.css']
})
export class EditNiveauMatiereComponent {
  niveauMatiereToEdit: NiveauMatiere | null = null;
  niveaux: Niveau[] = [];
  matieres: Matiere[] = [];

  constructor(
    private route: ActivatedRoute,
    private niveauMatiereService: NiveauMatiereService,
    private niveauService: NiveauService,
    private matiereService: MatiereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNiveauMatiereToEdit();
    this.getAllNiveaux();
    this.getAllMatieres();
  }

  getNiveauMatiereToEdit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.niveauMatiereService.getNiveauMatiereById(+id).subscribe(niveauMatiere => {
        this.niveauMatiereToEdit = niveauMatiere;
      });
    }
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  updateNiveauMatiere(): void {
    if (this.niveauMatiereToEdit) {
      this.niveauMatiereService.updateNiveauMatiere(this.niveauMatiereToEdit.id!, this.niveauMatiereToEdit).subscribe(() => {
        this.router.navigate(['/niveau-matieres']);
      });
    }
  }
}
