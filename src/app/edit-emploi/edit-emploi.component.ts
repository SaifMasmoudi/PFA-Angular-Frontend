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
export class EditEmploiComponent  {
  selectedEmploi: Emploi | null = null;

  constructor(
    private emploiService: EmploiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.emploiService.getEmploi(id).subscribe(
      (data: Emploi) => {
        this.selectedEmploi = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  updateEmploi(): void {
    if (this.selectedEmploi) {
      this.emploiService.updateEmploi(this.selectedEmploi.id, this.selectedEmploi).subscribe(
        (data: Emploi) => {
          this.router.navigate(['/emploi']);
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }

}