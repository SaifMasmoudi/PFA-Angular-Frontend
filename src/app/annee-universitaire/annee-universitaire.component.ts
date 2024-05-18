import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';

@Component({
  selector: 'app-annee-universitaire',
  templateUrl: './annee-universitaire.component.html',
  styleUrls: ['./annee-universitaire.component.css']
})
export class AnneeUniversitaireComponent implements OnInit {
  annees: AnneeUniversitaire[] = [];

  constructor(private anneeService: AnneeUniversitaireService) { }

  ngOnInit(): void {
    this.getAnnees();
  }

  getAnnees(): void {
    this.anneeService.getAnnees().subscribe(annees => this.annees = annees);
  }

  deleteAnnee(id: number): void {
    this.anneeService.deleteAnnee(id).subscribe(() => this.getAnnees());
  }
}
