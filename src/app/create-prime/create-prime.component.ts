import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { Prime } from 'src/Modeles/Prime';
import { EnseignantService } from 'src/Services/enseignant.service';
import { PrimeService } from 'src/Services/prime.service';

@Component({
  selector: 'app-create-prime',
  templateUrl: './create-prime.component.html',
  styleUrls: ['./create-prime.component.css']
})
export class CreatePrimeComponent {
  form!: FormGroup;
  enseignants: Enseignant[] = [];

  constructor(
    private primeService: PrimeService,
    private enseignantService: EnseignantService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
    this.getAllEnseignants();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      montant_prime: ['', Validators.required],
      id_enseignant: ['', Validators.required]
    });
  }

  getAllEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants', error);
      }
    );
  }

  createPrime(): void {
    if (this.form.valid) {
      const prime: Prime = {
        montant_prime: this.form.value.montant_prime,
        id_enseignant: this.form.value.id_enseignant
      };

      this.primeService.createPrime(prime).subscribe(
        (data) => {
          this.router.navigate(['/primes']);
        },
        (error) => {
          console.error('Erreur lors de la création de la prime', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}