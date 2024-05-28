import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { MatiereService } from 'src/Services/matiere.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { NiveauService } from 'src/Services/niveau.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-niveau-matiere',
  templateUrl: './niveau-matiere.component.html',
  styleUrls: ['./niveau-matiere.component.css']
})
export class NiveauMatiereComponent implements OnInit {
  niveauMatieres: NiveauMatiere[] = [];
  niveaux: Niveau[] = [];
  matieres: Matiere[] = [];
  displayedColumns: string[] = ['1', '2', '3','4'];

  constructor(
    private niveauMatiereService: NiveauMatiereService,
    private niveauService: NiveauService,
    private matiereService: MatiereService,
    private router: Router,private dialog: MatDialog
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
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.niveauMatiereService.deleteNiveauMatiere(id).subscribe(() => {
          this.niveauMatieres = this.niveauMatieres.filter(nm => nm.id !== id);
        });
      }
    });
    
  }

  editNiveauMatiere(niveauMatiere: NiveauMatiere): void {
    this.router.navigate(['/edit-niveau-matiere', niveauMatiere.id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
  getNiveauLabel(idNiveau: number): string {
    const niveau = this.niveaux.find(n => n.id === idNiveau);
    return niveau ? niveau.nom_niveau : '';
  }

  getMatiereLabel(idMatiere: number): string {
    const matiere = this.matieres.find(m => m.id === idMatiere);
    return matiere ? matiere.nom_matiere : '';
  }
}
