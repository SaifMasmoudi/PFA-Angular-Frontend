import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { Emploi } from 'src/Modeles/Emploi';
import { Salle } from 'src/Modeles/Salle';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { EmploiService } from 'src/Services/emploi.service';
import { SalleService } from 'src/Services/salle.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent {
  emplois: Emploi[] = [];
  salles: Salle[] = [];
  annees: AnneeUniversitaire[] = [];
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];

  constructor(
    private emploiService: EmploiService,
    private salleService: SalleService,
    private anneeService: AnneeUniversitaireService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllEmployis();
    this.getAllSalles();
    this.getAllAnnees();
  }

  getAllEmployis(): void {
    this.emploiService.getEmployis().subscribe(emplois => this.emplois = emplois);
  }

  getAllSalles(): void {
    this.salleService.getAllSalles().subscribe(salles => this.salles = salles);
  }

  getAllAnnees(): void {
    this.anneeService.getAllAnneeUniversitaires().subscribe(annees => this.annees = annees);
  }

  deleteEmployi(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.emploiService.deleteEmployi(id).subscribe(() => {
          this.emplois = this.emplois.filter(emploi => emploi.id !== id);
        });
      }
    });
  }

  editEmployi(emploi: Emploi): void {
    if (emploi && emploi.id) {
      this.router.navigate(['/edit-emplois', emploi.id]);
    } else {
      console.error("L'identifiant de l'emploi est indéfini.");
    }
  }

  getSalleName(idSalle: number): string {
    const salle = this.salles.find(s => s.id === idSalle);
    return salle ? salle.num_salle : '';
  }

  getAnneeName(idAnnee: number): string {
    const annee = this.annees.find(a => a.id === idAnnee);
    return annee ? annee.nom_annee : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }






  
}
