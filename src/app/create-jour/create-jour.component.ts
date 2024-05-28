import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jour } from 'src/Modeles/Jour';
import { JourService } from 'src/Services/jour.service';

@Component({
  selector: 'app-create-jour',
  templateUrl: './create-jour.component.html',
  styleUrls: ['./create-jour.component.css']
})
export class CreateJourComponent {
  form: FormGroup;
  joursDeLaSemaine: Jour[] = [
    { id: 1, nom: 'Lundi' },
    { id: 2, nom: 'Mardi' },
    { id: 3, nom: 'Mercredi' },
    { id: 4, nom: 'Jeudi' },
    { id: 5, nom: 'Vendredi' },
    { id: 6, nom: 'Samedi' },
    { id: 7, nom: 'Dimanche' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private jourService: JourService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      jour: ['', Validators.required]
    });
  }

  createJour(): void {
    if (this.form.invalid) {
      alert("Veuillez sélectionner un jour");
      return;
    }

    const nouveauJour: Jour = {
      nom: this.form.value.jour
    };

    this.jourService.createJour(nouveauJour).subscribe(() => {
      this.router.navigate(['/jours']);
    }, (error) => {
      console.error("Une erreur s'est produite lors de la création du jour :", error);
      alert("Une erreur s'est produite lors de la création du jour. Veuillez réessayer plus tard.");
    });
  }
}
