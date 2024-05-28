import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emploi } from 'src/Modeles/Emploi';
import { EmploiService } from 'src/Services/emploi.service';
import { JourService } from 'src/Services/jour.service';
import { HoraireService } from 'src/Services/horaire.service';
import { SalleService } from 'src/Services/salle.service';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';

@Component({
  selector: 'app-edit-emploi',
  templateUrl: './edit-emploi.component.html',
  styleUrls: ['./edit-emploi.component.css']
})
export class EditEmploiComponent implements OnInit {
  emploi: Emploi = {
    id_jour: 0,
    id_heure: 0,
    id_salle: 0,
    id_annee: 0,
    id_charge_horaire: 0
  };

  constructor(
    private emploiService: EmploiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmploiById(+id);
    }
  }

  getEmploiById(id: number): void {
    this.emploiService.getEmploiById(id).subscribe(
      (data) => {
        this.emploi = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'emploi:', error);
      }
    );
  }

  updateEmploi(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.emploiService.updateEmploi(+id, this.emploi).subscribe(
        (data) => {
          console.log('Emploi mis à jour:', data);
          this.router.navigate(['/emplois']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'emploi:', error);
        }
      );
    }
  }
}
