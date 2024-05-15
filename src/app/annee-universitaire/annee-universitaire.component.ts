import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';

@Component({
  selector: 'app-annee-universitaire',
  templateUrl: './annee-universitaire.component.html',
  styleUrls: ['./annee-universitaire.component.css']
})
export class AnneeUniversitaireComponent implements OnInit {
  anneeUniversitaires: AnneeUniversitaire[] = [];
  displayedColumns: string[] = ['1', '2', '3', '4'];

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
