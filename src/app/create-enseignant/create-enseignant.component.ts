import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nom_enseignant: ['', Validators.required],
      prenom_enseignant: ['', Validators.required],
      num_tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  createEnseignant(): void {
    if (this.form.valid) {
      const enseignant: Enseignant = this.form.value;
      this.enseignantService.createEnseignant(enseignant).subscribe(
        () => {
          this.router.navigate(['/enseignants']);
        },
        (error) => {
          console.error('Erreur lors de la création de l enseignant', error);
        }
      );
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}