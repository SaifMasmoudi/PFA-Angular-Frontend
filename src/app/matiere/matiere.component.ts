import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { MatiereService } from 'src/Services/matiere.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  matieres: Matiere[] = [];
  displayedColumns: string[] = ['1', '2', '3', '4'];

  constructor(
    private matiereService: MatiereService,
    private router: Router,private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllMatieres();
  }

  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  deleteMatiere(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.matiereService.deleteMatiere(id).subscribe(() => {
          this.matieres = this.matieres.filter(matiere => matiere.id !== id);
        });
      }
    });
    
  }

  editMatiere(matiere: Matiere): void {
    this.router.navigate(['/edit-matiere', matiere.id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
