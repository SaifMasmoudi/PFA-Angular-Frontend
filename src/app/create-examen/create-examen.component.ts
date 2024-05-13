import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/Modeles/Examen';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ExamenService } from 'src/Services/examen.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
@Component({
  selector: 'app-create-examen',
  templateUrl: './create-examen.component.html',
  styleUrls: ['./create-examen.component.css']
})
export class CreateExamenComponent  {
  newExamen: Examen = {
    nom_examen: '',
    date_examen: '',
    heure_debut: '',
    heure_fin: '',
    id_niveau_matiere: 0
  };
  niveauMatieres: NiveauMatiere[] = [];

  constructor(
    private examenService: ExamenService,
    private niveauMatiereService: NiveauMatiereService,
    private router: Router
  ) {
    this.getNiveauMatieres();
  }

  getNiveauMatieres() {
    this.niveauMatiereService.getAllNiveauMatieres().subscribe(
      (data) => {
        this.niveauMatieres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des niveaux/matières :', error);
      }
    );
  }

  createExamen():void {
    this.examenService.createExamen(this.newExamen).subscribe(
      (data) => {
        this.router.navigate(['/examens']);
      },
      (error) => {
        console.error('Erreur lors de la création de l\'examen :', error);
      }
    );
  }

  
}
