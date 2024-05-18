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
  form!: FormGroup;
  niveauMatieres: NiveauMatiere[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private examenService: ExamenService,
    private niveauMatiereService: NiveauMatiereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getNiveauMatieres();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      nom_examen: ['', Validators.required],
      date_examen: ['', Validators.required],
      heure_debut: ['', Validators.required],
      heure_fin: ['', Validators.required],
      id_niveau_matiere: ['', Validators.required]
    });
  }

  getNiveauMatieres(): void {
    this.niveauMatiereService.getAllNiveauMatieres().subscribe(
      (data) => {
        this.niveauMatieres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des niveaux/matières :', error);
      }
    );
  }

  createExamen(): void {
    if (this.form.valid) {
      const newExamen: Examen = {
        nom_examen: this.form.value.nom_examen,
        date_examen: this.form.value.date_examen,
        heure_debut: this.form.value.heure_debut,
        heure_fin: this.form.value.heure_fin,
        id_niveau_matiere: this.form.value.id_niveau_matiere
      };

      this.examenService.createExamen(newExamen).subscribe(
        (data) => {
          this.router.navigate(['/examens']);
        },
        (error) => {
          console.error('Erreur lors de la création de l\'examen :', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  
}