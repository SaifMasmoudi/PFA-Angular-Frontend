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
  annee: AnneeUniversitaire = {
    nom_annee: 0,
    semestre: ''
  };

  constructor(
    private route: ActivatedRoute,
    private anneeService: AnneeUniversitaireService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAnnee();
  }

  getAnnee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.anneeService.getAnnee(id).subscribe(annee => this.annee = annee);
  }

  updateAnnee(): void {
    this.anneeService.updateAnnee(this.annee.nom_annee, this.annee).subscribe(
      () => this.router.navigate(['/annees'])
    );
  }
}
