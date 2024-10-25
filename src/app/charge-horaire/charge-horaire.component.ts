import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { Enseignant } from 'src/Modeles/Enseignant';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { EnseignantService } from 'src/Services/enseignant.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-charge-horaire',
  templateUrl: './charge-horaire.component.html',
  styleUrls: ['./charge-horaire.component.css']
})
export class ChargeHoraireComponent implements OnInit {
  chargeHoraires: any[] = [];  // Change the type to `any[]` to include group names
  niveauMatieres: NiveauMatiere[] = [];
  enseignants: Enseignant[] = [];
  displayedColumns: string[] = ['5', '1', '2', '3', 'groupNames', '4'];  // Add `groupNames` column

  constructor(
    private chargeHoraireService: ChargeHoraireService,
    private niveauMatiereService: NiveauMatiereService,
    private enseignantService: EnseignantService,
    private router: Router,private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getChargeHoraires();
    this.getNiveauMatieres();
    this.getEnseignants();
  }

  getChargeHoraires() {
    this.chargeHoraireService.getAllChargeHoraires().subscribe(
      (data) => {
        this.chargeHoraires = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des charges horaires :', error);
      }
    );
  }

  getNiveauMatieres() {
    this.niveauMatiereService.getAllNiveauMatieres().subscribe(
      (data) => {
        this.niveauMatieres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des niveaux et matières :', error);
      }
    );
  }

  getEnseignants() {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

  editChargeHoraire(id: number) {
    this.router.navigate(['/edit-charge-horaire', id]);
  }

  deleteChargeHoraire(id: number):void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.chargeHoraireService.deleteChargeHoraire(id).subscribe(
          () => {
            this.getChargeHoraires();
          },
          (error) => {
            console.error('Erreur lors de la suppression de la charge horaire :', error);
          }
        );
      }
    });
    
  }

  getEnseignantName(idEnseignant: number): string {
    const enseignant = this.enseignants.find(e => e.id === idEnseignant);
    return enseignant ? `${enseignant.nom_enseignant} ${enseignant.prenom_enseignant}` : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }

  getGroupNames(chargeHoraire: any): string {
    return chargeHoraire.groupes ? chargeHoraire.groupes.join(', ') : '';
  }
}
