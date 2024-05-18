import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/Modeles/Examen';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ExamenService } from 'src/Services/examen.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';

@Component({
  selector: 'app-edit-examen',
  templateUrl: './edit-examen.component.html',
  styleUrls: ['./edit-examen.component.css']
})
export class EditExamenComponent {
  form: FormGroup;
  examen: Examen = {
    id: 0,
    nom_examen: '',
    date_examen: '',
    heure_debut: '',
    heure_fin: '',
    id_niveau_matiere: 0
  };
  niveauMatieres: NiveauMatiere[] = [];

  constructor(
    private fb: FormBuilder,
    private examenService: ExamenService,
    private niveauMatiereService: NiveauMatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nom_examen: ['', Validators.required],
      date_examen: ['', Validators.required],
      heure_debut: ['', Validators.required],
      heure_fin: ['', Validators.required],
      id_niveau_matiere: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getExamenById(id);
    this.getNiveauMatieres();
  }

  getExamenById(id: number) {
    this.examenService.getExamenById(id).subscribe(
      (data) => {
        this.examen = data;
        this.form.patchValue({
          nom_examen: this.examen.nom_examen,
          date_examen: this.examen.date_examen,
          heure_debut: this.examen.heure_debut,
          heure_fin: this.examen.heure_fin,
          id_niveau_matiere: this.examen.id_niveau_matiere
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'examen :', error);
      }
    );
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

  updateExamen() {
    if (this.form.valid) {
      this.examenService.updateExamen(this.examen.id!, this.form.value).subscribe(
        () => {
          this.router.navigate(['/examens']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'examen :', error);
        }
      );
    }
  }
}