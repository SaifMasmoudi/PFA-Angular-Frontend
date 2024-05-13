import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { Enseignant } from 'src/Modeles/Enseignant';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { EnseignantService } from 'src/Services/enseignant.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
@Component({
  selector: 'app-create-charge-horaire',
  templateUrl: './create-charge-horaire.component.html',
  styleUrls: ['./create-charge-horaire.component.css']
})
export class CreateChargeHoraireComponent {
  newChargeHoraire: ChargeHoraire = {
    nb_heure: '',
    id_niveau_matiere: 0,
    id_enseignant: 0
  };
  niveauMatieres: NiveauMatiere[] = [];
  enseignants: Enseignant[] = [];

  constructor(
    private chargeHoraireService: ChargeHoraireService,
    private niveauMatiereService: NiveauMatiereService,
    private enseignantService: EnseignantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNiveauMatieres();
    this.getEnseignants();
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

  getEnseignants() {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

  createChargeHoraire():void  {
    this.chargeHoraireService.createChargeHoraire(this.newChargeHoraire).subscribe(
      (data) => {
       
        this.router.navigate(['/charge-horaires']);
      },
      (error) => {
        console.error('Erreur lors de la création de la charge horaire :', error);
      }
    );
  }
}
