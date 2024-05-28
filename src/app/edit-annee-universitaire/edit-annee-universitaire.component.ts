import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup; 
  nomAnnee: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private anneeUniversitaireService: AnneeUniversitaireService, 
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.form = this.formBuilder.group({ 
      nom_annee: [{value: '', disabled: true}, Validators.required], 
      semester: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.nomAnnee = this.route.snapshot.paramMap.get('nom_annee')!;
    this.getAnneeUniversitaire(this.nomAnnee);
  }

  getAnneeUniversitaire(nomAnnee: string): void {
    this.anneeUniversitaireService.getAnneeUniversitaire(nomAnnee).subscribe(annee => {
      this.form.patchValue({
        nom_annee: annee.nom_annee,
        semester: annee.semester
      });
    });
  }

  updateAnneeUniversitaire(): void {
    if (this.form.invalid) { 
      alert("Veuillez remplir tous les champs");
      return;
    }

    const updatedAnnee: AnneeUniversitaire = { 
      nom_annee: this.nomAnnee, 
      semester: this.form.value.semester 
    };

    this.anneeUniversitaireService.updateAnneeUniversitaire(this.nomAnnee, updatedAnnee).subscribe(() => {
      this.router.navigate(['/annee-universitaire']);
    }, (error) => {
      console.error("Une erreur s'est produite lors de la mise à jour de l'année universitaire :", error);
      alert("Une erreur s'est produite lors de la mise à jour de l'année universitaire. Veuillez réessayer plus tard.");
    });
  }
}
