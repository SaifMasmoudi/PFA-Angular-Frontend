import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emploi } from 'src/Modeles/Emploi';
import { EmploiService } from 'src/Services/emploi.service';


@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {
  emplois: Emploi[] = [];

  constructor(private emploiService: EmploiService) { }

  ngOnInit(): void {
    this.getAllEmplois();
  }

  getAllEmplois(): void {
    this.emploiService.getAllEmplois().subscribe(
      (data) => {
        this.emplois = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des emplois:', error);
      }
    );
  }

  deleteEmploi(id: number): void {
    this.emploiService.deleteEmploi(id).subscribe(
      () => {
        this.getAllEmplois();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'emploi:', error);
      }
    );
  }
}
