import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Groupe } from 'src/Modeles/Groupe';
import { Niveau } from 'src/Modeles/Niveau';
import { GroupeService } from 'src/Services/groupe.service';
import { NiveauService } from 'src/Services/niveau.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent {
  groupes: Groupe[] = [];
  niveaux: Niveau[] = [];
  displayedColumns: string[] = ['1', '2', '3', '4'];

  constructor(
    private groupeService: GroupeService,
    private niveauService: NiveauService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllGroupes();
    this.getAllNiveaux();
  }

  getAllGroupes(): void {
    this.groupeService.getAllGroupes().subscribe(groupes => this.groupes = groupes);
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  deleteGroupe(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.groupeService.deleteGroupe(id).subscribe(() => {
          this.groupes = this.groupes.filter(groupe => groupe.id !== id);
        });
      }
    });
  }













  editGroupe(groupe: Groupe): void {
    if (groupe && groupe.id) {
      this.router.navigate(['/edit-groupe', groupe.id]);
    } else {
      console.error("L'identifiant du groupe est indéfini.");
    }
  }
  
  getNiveauName(idNiveau: number): string {
    const niveau = this.niveaux.find(n => n.id === idNiveau);
    return niveau ? niveau.nom_niveau : '';
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}