import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';

@Component({
  selector: 'app-annee-universitaire',
  templateUrl: './annee-universitaire.component.html',
  styleUrls: ['./annee-universitaire.component.css']
})
export class AnneeUniversitaireComponent {
  anneeUniversitaires: AnneeUniversitaire[] = [];

  constructor(
    private anneeUniversitaireService: AnneeUniversitaireService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllAnneeUniversitaires();
  }

  getAllAnneeUniversitaires() {
    this.anneeUniversitaireService.getAllAnneeUniversitaires().subscribe(
      (data) => {
        this.anneeUniversitaires = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des années universitaires :', error);
      }
    );
  }

  editAnneeUniversitaire(id: number) {
    this.router.navigate(['/edit-annee-universitaire', id]);
  }

  deleteAnneeUniversitaire(id: number) {
    this.anneeUniversitaireService.deleteAnneeUniversitaire(id).subscribe(
      () => {
        this.getAllAnneeUniversitaires();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'année universitaire :', error);
      }
    );
  }
}
