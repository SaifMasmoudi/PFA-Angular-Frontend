import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { Emploi } from 'src/Modeles/Emploi';
import { Salle } from 'src/Modeles/Salle';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { EmploiService } from 'src/Services/emploi.service';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-create-emploi',
  templateUrl: './create-emploi.component.html',
  styleUrls: ['./create-emploi.component.css']
})
export class CreateEmploiComponent implements OnInit {
  createEmploiForm: FormGroup;
  salles: Salle[] = [];
  annees: AnneeUniversitaire[] = [];
  jours: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(
    private formBuilder: FormBuilder,
    private emploiService: EmploiService,
    private salleService: SalleService,
    private anneeService: AnneeUniversitaireService,
    private router: Router
  ) {
    this.createEmploiForm = this.formBuilder.group({
      jour: ['', Validators.required],
      heure_debut: ['', Validators.required],
      heure_fin: ['', Validators.required],
      id_salle: ['', Validators.required],
      id_annee: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllSalles();
  }

  getAllSalles(): void {
    this.salleService.getAllSalles().subscribe(salles => this.salles = salles);
  }

 

  onCreateEmployi(): void {
    if (this.createEmploiForm.valid) {
      this.emploiService.createEmployi(this.createEmploiForm.value).subscribe(
        (emploi) => {
          console.log('Emploi créé avec succès :', emploi);
          this.router.navigate(['/emplois']);
        },
        (error) => {
          console.error('Erreur lors de la création de l\'emploi :', error);
        }
      );
    }
  }
}
