import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
@Component({
  selector: 'app-edit-annee-universitaire',
  templateUrl: './edit-annee-universitaire.component.html',
  styleUrls: ['./edit-annee-universitaire.component.css']
})
export class EditAnneeUniversitaireComponent {
  anneeUniversitaire: AnneeUniversitaire = {
    id: 0,
    nom_annee: '',
    id_charge_horaire: 0
  };
  chargeHoraires: ChargeHoraire[] = [];
  constructor(
    private anneeUniversitaireService: AnneeUniversitaireService,
    private chargeHoraireService: ChargeHoraireService,
    private route: ActivatedRoute,
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
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getAnneeUniversitaireById(id);
  }

  getAnneeUniversitaireById(id: number) {
    this.anneeUniversitaireService.getAnneeUniversitaireById(id).subscribe(
      (data) => {
        this.anneeUniversitaire = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'année universitaire :', error);
      }
    );
  }

  updateAnneeUniversitaire() {
    this.anneeUniversitaireService.updateAnneeUniversitaire(this.anneeUniversitaire.id!, this.anneeUniversitaire).subscribe(
      () => {
        this.router.navigate(['/annee-universitaires']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'année universitaire :', error);
      }
    );
  }
}
