import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Jour } from 'src/Modeles/Jour';
import { JourService } from 'src/Services/jour.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-jour',
  templateUrl: './jour.component.html',
  styleUrls: ['./jour.component.css']
})
export class JourComponent implements OnInit {
  jours: Jour[] = [];
  displayedColumns: string[] = ['1', '2', '3'];

  constructor(private jourService: JourService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllJours();
  }

  getAllJours(): void {
    this.jourService.getAllJours().subscribe(jours => this.jours = jours);
  }

  deleteJour(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jourService.deleteJour(id).subscribe(() => {
          this.jours = this.jours.filter(jour => jour.id !== id);
        });
      }
    });
    
  }

 
}
