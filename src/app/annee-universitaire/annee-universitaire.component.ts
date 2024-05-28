import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-annee-universitaire',
  templateUrl: './annee-universitaire.component.html',
  styleUrls: ['./annee-universitaire.component.css']
})
export class AnneeUniversitaireComponent implements OnInit {
  annees: AnneeUniversitaire[] = [];
  displayedColumns: string[] = ['nom_annee', 'semester', 'actions'];

  constructor(private anneeUniversitaireService: AnneeUniversitaireService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllAnneeUniversitaires();
  }

  getAllAnneeUniversitaires(): void {
    this.anneeUniversitaireService.getAnneeUniversitaires().subscribe(annees => this.annees = annees);
  }

  deleteAnneeUniversitaire(nom_annee: string): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.anneeUniversitaireService.deleteAnneeUniversitaire(nom_annee).subscribe(() => {
          this.annees = this.annees.filter(annee => annee.nom_annee !== nom_annee);
        });
      }
    });
  }

  editAnneeUniversitaire(nom_annee: string): void {
    this.router.navigate(['/edit-annee-universitaire', nom_annee]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }


}
