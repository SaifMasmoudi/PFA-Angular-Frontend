import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup; 

  constructor(
    private formBuilder: FormBuilder, 
    private anneeUniversitaireService: AnneeUniversitaireService, 
    private router: Router
  ) { 
    this.form = this.formBuilder.group({ 
      nom_annee: ['', Validators.required], 
      semester: ['', Validators.required]
    });
  }

  createAnneeUniversitaire(): void {
    if (this.form.invalid) { 
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouvelleAnnee: AnneeUniversitaire = { 
      nom_annee: this.form.value.nom_annee, 
      semester: this.form.value.semester 
    };

    this.anneeUniversitaireService.addAnneeUniversitaire(nouvelleAnnee).subscribe(() => {
      this.router.navigate(['/annee-universitaire']);
    }, (error) => {
      console.error("Une erreur s'est produite lors de la création de l'année universitaire :", error);
      alert("Une erreur s'est produite lors de la création de l'année universitaire. Veuillez réessayer plus tard.");
    });
  }
}
