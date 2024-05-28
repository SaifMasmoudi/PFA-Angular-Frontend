import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Horaire } from 'src/Modeles/Horaire';
import { HoraireService } from 'src/Services/horaire.service';

@Component({
  selector: 'app-create-horaire',
  templateUrl: './create-horaire.component.html',
  styleUrls: ['./create-horaire.component.css']
})
export class CreateHoraireComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private horaireService: HoraireService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      heure: ['', Validators.required]
    });
  }

  createHoraire(): void {
    if (this.form.invalid) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouvelHoraire: Horaire = {
      heure: this.form.value.heure
    };

    this.horaireService.createHoraire(nouvelHoraire).subscribe(() => {
      this.router.navigate(['/horaires']);
    }, (error) => {
      console.error("Une erreur s'est produite lors de la création de l'horaire :", error);
      alert("Une erreur s'est produite lors de la création de l'horaire. Veuillez réessayer plus tard.");
    });
  }
}
