import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { Enseignant } from 'src/Modeles/Enseignant';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { EnseignantService } from 'src/Services/enseignant.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';

@Component({
  selector: 'app-charge-horaire',
  templateUrl: './charge-horaire.component.html',
  styleUrls: ['./charge-horaire.component.css']
})
export class ChargeHoraireComponent {
  chargeHoraires: ChargeHoraire[] = [];
  niveauMatieres: NiveauMatiere[] = [];
  enseignants: Enseignant[] = [];

  constructor(
    private chargeHoraireService: ChargeHoraireService,
    private niveauMatiereService: NiveauMatiereService,
    private enseignantService: EnseignantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getChargeHoraires();
    
  }

  getChargeHoraires() {
    this.chargeHoraireService.getAllChargeHoraires().subscribe(
      (data) => {
        this.chargeHoraires = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des charges horaires :', error);
      }
    );
  }

  editChargeHoraire(id: number) {
    this.router.navigate(['/edit-charge-horaire', id]);
  }

  deleteChargeHoraire(id: number) {
    this.chargeHoraireService.deleteChargeHoraire(id).subscribe(
      () => {
        this.getChargeHoraires();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la charge horaire :', error);
      }
    );
  }
}
