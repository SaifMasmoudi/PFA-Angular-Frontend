import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { Enseignant } from 'src/Modeles/Enseignant';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { EnseignantService } from 'src/Services/enseignant.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
@Component({
  selector: 'app-edit-charge-horaire',
  templateUrl: './edit-charge-horaire.component.html',
  styleUrls: ['./edit-charge-horaire.component.css']
})
export class EditChargeHoraireComponent {
  chargeHoraire: ChargeHoraire = {
    id: 0,
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getChargeHoraireById(id);
    this.getNiveauMatieres();
    this.getEnseignants();
  }

  getChargeHoraireById(id: number) {
    this.chargeHoraireService.getChargeHoraireById(id).subscribe(
      (data) => {
        this.chargeHoraire = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la charge horaire :', error);
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

  updateChargeHoraire() {
    this.chargeHoraireService.updateChargeHoraire(this.chargeHoraire.id!, this.chargeHoraire).subscribe(
      () => {
        this.router.navigate(['/charge-horaires']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la charge horaire :', error);
      }
    );
  }
}
