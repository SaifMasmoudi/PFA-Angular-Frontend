import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { EnseignantService } from 'src/Services/enseignant.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignants: Enseignant[] = [];
  displayedColumns: string[] = ['1', '2', '3', '4', '5','6'];

  constructor(
    private enseignantService: EnseignantService,
    private router: Router,    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getAllEnseignants();
  }

  getAllEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants', error);
      }
    );
  }

  deleteEnseignant(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (id !== undefined) {
          this.enseignantService.deleteEnseignant(id).subscribe(
            () => {
              this.enseignants = this.enseignants.filter((e) => e.id !== id);
            },
            (error) => {
              console.error('Erreur lors de la suppression de l\'enseignant', error);
            }
          );
        }
      }
    });
    
  }

  editEnseignant(id :number): void {
    this.router.navigate(['/edit-enseignant', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
