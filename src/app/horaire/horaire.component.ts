import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Horaire } from 'src/Modeles/Horaire';
import { HoraireService } from 'src/Services/horaire.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {
  horaires: Horaire[] = [];
  displayedColumns: string[] = ['1', '2', '3'];

  constructor(private horaireService: HoraireService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllHoraires();
  }

  getAllHoraires(): void {
    this.horaireService.getAllHoraires().subscribe(horaires => this.horaires = horaires);
  }

  deleteHoraire(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.horaireService.deleteHoraire(id).subscribe(() => {
          this.horaires = this.horaires.filter(horaire => horaire.id !== id);
        });
      }
    });
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
