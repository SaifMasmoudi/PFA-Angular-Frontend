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
    private examenService: ExamenService,
    private niveauMatiereService: NiveauMatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getExamenById(id);
    this.getNiveauMatieres();
  }

  getExamenById(id: number) {
    this.examenService.getExamenById(id).subscribe(
      (data) => {
        this.examen = data;
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
    this.examenService.updateExamen(this.examen.id!, this.examen).subscribe(
      () => {
        this.router.navigate(['/examens']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'examen :', error);
      }
    );
  }
}
