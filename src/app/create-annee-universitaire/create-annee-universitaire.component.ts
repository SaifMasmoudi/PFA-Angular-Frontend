import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
@Component({
  selector: 'app-create-annee-universitaire',
  templateUrl: './create-annee-universitaire.component.html',
  styleUrls: ['./create-annee-universitaire.component.css']
})
export class CreateAnneeUniversitaireComponent {
  newAnneeUniversitaire: AnneeUniversitaire = {
    nom_annee: '',
    id_charge_horaire: 0
  };
  chargeHoraires: ChargeHoraire[] = [];
  constructor(
    private anneeUniversitaireService: AnneeUniversitaireService,
    private chargeHoraireService: ChargeHoraireService,
    private router: Router
  ) { this.getAllChargeHoraires();}
  getAllChargeHoraires() {
    this.chargeHoraireService.getAllChargeHoraires().subscribe(
      (data) => {
        this.chargeHoraires = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des charges horaires :', error);
      }
    );
  }
  createAnneeUniversitaire() {
    this.anneeUniversitaireService.createAnneeUniversitaire(this.newAnneeUniversitaire).subscribe(
      (data) => {
        this.newAnneeUniversitaire = {
          nom_annee: '',
          id_charge_horaire: 0
        };
        this.router.navigate(['/annee-universitaires']);
      },
      (error) => {
        console.error('Erreur lors de la création de l\'année universitaire :', error);
      }
    );
  }
}
