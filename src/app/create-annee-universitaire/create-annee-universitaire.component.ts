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
  annee: AnneeUniversitaire = {
    nom_annee: 0,
    semestre: ''
  };

  constructor(
    private anneeService: AnneeUniversitaireService,
    private router: Router
  ) { }

  createAnnee(): void {
    this.anneeService.createAnnee(this.annee).subscribe(
      () => this.router.navigate(['/annee-universitaires'])
    );
  }
}
